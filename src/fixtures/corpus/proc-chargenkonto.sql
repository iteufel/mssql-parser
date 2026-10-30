CREATE PROCEDURE [dbo].[ap_Lager_ChargenkontoBuchen]
	@Anwender varchar(50),
	@ArtikelNr varchar(20),
	@ZielCharge varchar(20),
	@VerfallZielcharge datetime,
	@LieferantenNr int,
	@Lieferantencharge varchar(50),
	@Menge DECIMAL(18,8),
	@Nachkommastellen smallint,
	@PreisProEinheit DECIMAL(18,8),
	@Preiseinheit int,
	@Gesamtpreis DECIMAL(18,8),
	@Buchungsdatum datetime,
	@IstQuarantaenemenge bit,
	@QuarantaenegrundNeu varchar(6) = null,
	@IstSperrmenge bit,
	@SperrgrundNeu varchar(6) = null,
	@Bewegungsart tinyint,
	@IstWareneingang bit,
	@UpdateEinkaufspreis bit,
	@UpdateDurchschnittspreis bit,
	@UpdateKumZugaenge bit,
	@UpdateKumAbgaenge bit,
	@UpdateUrsprungsmenge bit,
	@WirkstoffgehaltNeu DECIMAL(18,8) = null,
	@UpdateVormerkungen bit = 0,
	@DatumWareneingang datetime = null,
	@SelectReturn bit = 0,
	@Maschinenkosten DECIMAL(18,8) = 0,
	@Personalkosten DECIMAL(18,8) = 0
AS BEGIN
/* 	Bucht Chargenkonto
	gibt 0 zurück, wenn alles geklappt hat
	1 und raiserror bei Fehler

	v2.1.08 10.12.2004 Manfred Sorg

	Wirkstoffgehalt wurde falsch berechnet

    V2.0.01	03.08.2005	Mark Brockmann
	Entfernen des ArgonUser-Views wegen neuem Login-Konzept

	V3.0	11.10.2015 Alexander Cimen
			Optimierungen Performance und Speichern / Transaktionshandling

*/

	declare @error int
	declare @rowcount int
	declare @errdescription varchar(255)
	declare @errsource varchar(255)
	declare @return int

	declare @Ursprungsmenge DECIMAL(18,8)
	declare @Wirkstoffgehalt DECIMAL(18,8)
	declare @Lagerbestand DECIMAL(18,8)
	declare @DurchEKPreis DECIMAL(18,8)
	declare @LetzterEKPreis DECIMAL(18,8)
	declare @Vormerkungen DECIMAL(18,8)
	declare @Quarantaenemenge DECIMAL(18,8)
	declare @Sperrmenge DECIMAL(18,8)
	declare @DatumInventur datetime
	declare @Inventur bit

	declare @Quarantaenegrund varchar(6)
	declare @Sperrgrund varchar(6)
	declare @Quarantaene bit
	declare @Sperre bit
	declare @SperreQuarantaene datetime
	declare @DatumSperre datetime


	set nocount on

	--TODO:
	select @Nachkommastellen = 10	-- Es darf auf keinen Fall mit den NK Stellen aus den Stammdaten gerundet werden. Beispiel Rückmeldung FA bei kleinen Mengen (Ausschuss) muss es auch 0,00012 Stück Paletten buchen können!


	select @VerfallZielcharge = cast(@VerfallZielcharge as date)	--Uhrzeit entfernen, damit die Chargen auch bei 0 Uhr ablaufen

	If @DatumWareneingang is null begin
		select @DatumWareneingang = getdate()
	end

	/* Haupttransaktion begin ***************************************************************/
	begin tran
	save tran Lager_ChargenkontoBuchen


	/* Chargenkonto holen *******************************************************************/
	select	@Ursprungsmenge = Ursprungsmenge,
		@Wirkstoffgehalt = Wirkstoffgehalt,
		@Lagerbestand = Lagerbestand,
		@LetzterEKPreis = LetzterEKPreis,
		@Vormerkungen = Vormerkungen,
		@Quarantaenemenge = Quarantaenemenge,
		@Sperrmenge = Sperrmenge,
		@DatumInventur = DatumInventur,
		@Inventur = Inventur,
		@Quarantaenegrund = Quarantaenegrund,
		@Sperrgrund = Sperrgrund,
		@SperreQuarantaene = SperreQuarantaene
	from 	Chargenkonto (holdlock)
	where	ArtikelNr=@ArtikelNr and ZielCharge=@ZielCharge

	select @error=@@error, @rowcount=@@rowcount
	if @error<>0 begin
		select	@errdescription=	'Fehler beim Holen des Chargenkontos',
			@errsource=		'select Chargenkonto'
		goto Fehler
	end

	if @rowcount<>1 begin
		insert into Chargenkonto (ArtikelNr, ZielCharge, DatumWE, DatumAnlage, Anwender)
		select	@ArtikelNr, @ZielCharge, @DatumWareneingang, getdate(), @Anwender

		select @error=@@error, @rowcount=@@rowcount
		if @error<>0 begin
			select	@errdescription=	'Fehler beim Anlegen des Chargenkontos',
				@errsource=		'insert into Chargenkonto'
			goto Fehler
		end
		if @rowcount<>1 begin
			select	@errdescription=	'Chargenkonto konnte nicht angelegt werden',
				@errsource=		'insert into Chargenkonto'
			goto Fehler
		end

		select	@Ursprungsmenge = 0,
			@Wirkstoffgehalt = 0,
			@Lagerbestand = 0,
			@LetzterEKPreis = 0,
			@Vormerkungen = 0,
			@Quarantaenemenge = 0,
			@Sperrmenge = 0,
			@DatumInventur = null,
			@Inventur = 0,
			@Quarantaenegrund = NULL,
			@Sperrgrund = NULL,
			@SperreQuarantaene = null,
			@DatumSperre = null,
			@Quarantaene = 0,
			@Sperre = 0
	end
	else begin
		if @Quarantaenemenge <>0 select @Quarantaene = 1 else select @Quarantaene = 0
		if @Sperrmenge <>0 select @Sperre = 1 else select @Sperre = 0
	end

	/* Werte ermitteln **********************************************************************/

	-- Lagerbestand wird durch Trigger trg_Buchungseinheiten_KontoSync gesetzt

	/* Wirkstoffgehalt eintragen, wenn vorhanden */
	If not @WirkstoffgehaltNeu is null And @Bewegungsart = 1 begin /*bwZugang*/
		IF (ISNULL(@Lagerbestand, 0) + @Menge) <> 0
			select @Wirkstoffgehalt = ((isnull(@Wirkstoffgehalt,0) * isnull(@Lagerbestand,0))
						+ (@WirkstoffgehaltNeu * @Menge)) / (isnull(@Lagerbestand,0) + @Menge)
		ELSE
			select @Wirkstoffgehalt = @WirkstoffgehaltNeu
	end

	-- Vor dem Aufruf auf 0 setzen: findet ap_EKDurchPreis_Periodisch_GET im Periodenfenster keine
	-- Bewegung zur Charge, weist ihr abschliessendes SELECT nichts zu und der OUTPUT-Parameter
	-- behaelt seinen Eingangswert. Stand dort ein Chargenpreis, wuerde er unten ein zweites Mal
	-- ueber die Preiseinheiten umgerechnet und mit jeder Buchung weiter verschoben.
	-- Muster: ap_Lager_ArtikelkontoBuchen.
	select @DurchEKPreis = 0

	EXEC [dbo].[ap_EKDurchPreis_Periodisch_GET]	@ArtikelNr = @ArtikelNr,
												@ChargenNr = @ZielCharge,
												@DurchEKPreis = @DurchEKPreis OUTPUT


	/* Ursprungsmenge aktualisieren */
	If @UpdateUrsprungsmenge <> 0 begin
		select @Ursprungsmenge = round(isnull(@Ursprungsmenge,0) + @Menge, @Nachkommastellen)
	end

	-- Vormerkungen, Quarantaenemenge, Sperrmenge werden durch Trigger trg_Buchungseinheiten_KontoSync gesetzt

	If @Lagerbestand <= 0 begin
		select @Quarantaene = 0
		select @Sperre = 0
	end
	else begin
		/* Quarantaene-Status setzen */
		If @IstQuarantaenemenge <> 0 begin
			If @Bewegungsart = 1 begin /* bwZugang */
				select @Quarantaene = @IstQuarantaenemenge
				select @Quarantaenegrund = isnull(@QuarantaenegrundNeu, @Quarantaenegrund)
				select @SperreQuarantaene = isnull(@SperreQuarantaene, GetDate())
			end
		end

		/* Sperr-Status setzen */
	    If @IstSperrmenge <> 0 begin
			If @Bewegungsart = 1 begin /* bwZugang */
				select @Sperre = @IstSperrmenge
				select @Sperrgrund = isnull(@SperrgrundNeu, @Sperrgrund)
				select @DatumSperre = isnull(@DatumSperre, GETDATE())
			end
		end
	end

	/* Inventur */
	If @Bewegungsart = 4 begin
		select @DatumInventur = getdate()
		select @Inventur = 1
	end

	/* Chargenkonto aktualisieren ***********************************************************/
	update Chargenkonto
	set	Ursprungsmenge = @Ursprungsmenge,
		Wirkstoffgehalt = @Wirkstoffgehalt,

		DurchPreisNeu = case when @UpdateEinkaufspreis <> 0 and @Menge >0 then
							case when IsNull(@DurchEKPreis, 0) <> 0 then
								@DurchEKPreis  / NULLIF(art.PreisEinheit, 0) * @Preiseinheit
							else
								IsNull(DurchPreisNeu, 0)
							end
						else
							IsNull(DurchPreisNeu, 0)
						end,

		DurchEKPreis =	case when @UpdateEinkaufspreis <> 0 and @Menge >0 then
							case when IsNull(@DurchEKPreis, 0) <> 0 then
								@DurchEKPreis  / NULLIF(art.PreisEinheit, 0) * @Preiseinheit
							else
								IsNull(DurchEKPreis, 0)
							end
						else
							IsNull(DurchEKPreis, 0)
						end,

		LetzterEKPreis =	case when @UpdateEinkaufspreis <> 0 and @Menge >0 then
								case when IsNull(@PreisProEinheit, 0) = 0 then
									IsNull(LetzterEKPreis, 0)
								else
									IsNull(@PreisProEinheit, 0)
								end
							else
								IsNull(LetzterEKPreis, 0)
							end,

		DatumWE = @DatumWareneingang,
		-- Kumulierter Wareneingang als Delta auf den Spaltenwerten - Muster und Semantik wie in
		-- ap_Lager_ArtikelkontoBuchen. Zuvor wurden beide Spalten aus der Tabelle gelesen und
		-- unveraendert zurueckgeschrieben, wodurch der Chargen-Wareneingang nie fortgeschrieben
		-- wurde. @Gesamtpreis ist bereits der absolute Betrag (Menge * Preis pro 1).
		Wareneingangswert = case when @IstWareneingang = 1 then IsNull(Wareneingangswert, 0) + @Gesamtpreis else IsNull(Wareneingangswert, 0) end,
		Wareneingangsmenge = case when @IstWareneingang <> 0 then ROUND(IsNull(Wareneingangsmenge, 0) + @Menge, 8) else IsNull(Wareneingangsmenge, 0) end,
		Preiseinheit = @Preiseinheit,
		Quarantaene = @Quarantaene,
		Quarantaenegrund = NULLIF(@Quarantaenegrund, ''),
		SperreQuarantaene = @SperreQuarantaene,
		Sperre = @Sperre,
		Sperrgrund = NULLIF(@Sperrgrund, ''),
		DatumSperre = @DatumSperre,
		DatumInventur = @DatumInventur,
		Inventur = @Inventur,
		DatumBewegung = @Buchungsdatum,
		VerfallZielcharge = @VerfallZielcharge,
		ChargeKundeLieferant =	case
					when isnull(@Lieferantencharge,'')=''
					then ChargeKundeLieferant
					else @Lieferantencharge
					end,
		LieferantenNr = @LieferantenNr,
		Maschinenkosten  = case when @Maschinenkosten > 0 then @Maschinenkosten else Maschinenkosten end,
		Personalkosten  = case when @Personalkosten > 0 then @Personalkosten else Personalkosten end
	from chargenkonto ck inner join artikelstamm art on ck.artikelNr = art.ArtikelNr
	where ck.ArtikelNr = @ArtikelNr and ZielCharge=@ZielCharge

	select @error=@@error, @rowcount=@@rowcount
	if @error<>0 begin
		select	@errdescription=	'Fehler beim Aktualisieren des Chargenkontos',
			@errsource=		'update Chargenkonto'
		goto Fehler
	end
	if @rowcount<>1 begin
		select	@errdescription=	'Chargenkonto konnte nicht aktualisiert werden',
			@errsource=		'update Chargenkonto'
		goto Fehler
	end

	/* Haupttransaktion end *****************************************************************/
	commit tran
	if @@trancount = 0 begin
		set nocount off
	end
	if @SelectReturn = 0 begin
		return 0
	end
	else begin
		select 0 as Rueckgabe
		return
	end

	/* Fehlerbehandlung *********************************************************************/
Fehler:
	rollback tran Lager_ChargenkontoBuchen
	commit tran

	exec ap_Argon_Logbuch	'Fehler beim Buchen von Chargenkonto', 'ap_Lager_ChargenkontoBuchen',
				@error, @errdescription, @errsource, @Menge, @Nachkommastellen,
				@PreisProEinheit, @Preiseinheit, @Gesamtpreis, @IstQuarantaenemenge,
				@IstSperrmenge, @Bewegungsart, @IstWareneingang, @UpdateEinkaufspreis,
				@UpdateDurchschnittspreis, @UpdateKumZugaenge, @UpdateKumAbgaenge,
				@UpdateVormerkungen, @DatumWareneingang, @SelectReturn
	raiserror('Fehler beim Buchen von Chargenkonto: %s', 2, 1, @errdescription) with seterror

	if @@trancount = 0 begin
		set nocount off
	end
	if @SelectReturn = 0 begin
		return 1
	end
	else begin
		select 1 as Rueckgabe
		return
	end
END
