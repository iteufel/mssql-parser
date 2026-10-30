/* eslint-disable */
/* Generated from Microsoft.SqlServer.TransactSql.ScriptDom. Do not edit. */

export type AbortAfterWaitType = "None" | "Blockers" | "Self";
export type AffinityKind = "NotSpecified" | "None" | "Integer" | "Admin";
export type AllowConnectionsOptionKind = "No" | "ReadOnly" | "ReadWrite" | "All";
export type AlterAction = "None" | "Add" | "Drop";
export type AlterAvailabilityGroupActionType = "Failover" | "ForceFailoverAllowDataLoss" | "Online" | "Offline" | "Join";
export type AlterAvailabilityGroupStatementType = "AddDatabase" | "RemoveDatabase" | "AddReplica" | "ModifyReplica" | "RemoveReplica" | "Set" | "Action";
export type AlterCertificateStatementKind = "None" | "RemovePrivateKey" | "RemoveAttestedOption" | "WithPrivateKey" | "WithActiveForBeginDialog" | "AttestedBy";
export type AlterEventSessionStatementType = "Unknown" | "AddEventDeclarationOptionalSessionOptions" | "DropEventSpecificationOptionalSessionOptions" | "AddTargetDeclarationOptionalSessionOptions" | "DropTargetSpecificationOptionalSessionOptions" | "RequiredSessionOptions" | "AlterStateIsStart" | "AlterStateIsStop";
export type AlterFederationKind = "Unknown" | "Split" | "DropLow" | "DropHigh";
export type AlterFullTextCatalogAction = "None" | "Rebuild" | "Reorganize" | "AsDefault";
export type AlterIndexType = "Rebuild" | "Disable" | "Reorganize" | "Set" | "UpdateSelectiveXmlPaths" | "Abort" | "Pause" | "Resume";
export type AlterMasterKeyOption = "None" | "Regenerate" | "ForceRegenerate" | "AddEncryptionByServiceMasterKey" | "AddEncryptionByPassword" | "DropEncryptionByServiceMasterKey" | "DropEncryptionByPassword";
export type AlterResourceGovernorCommandType = "Unknown" | "Disable" | "Reconfigure" | "ClassifierFunction" | "ResetStatistics";
export type AlterServerConfigurationBufferPoolExtensionOptionKind = "None" | "OnOff" | "FileName" | "Size";
export type AlterServerConfigurationDiagnosticsLogOptionKind = "None" | "OnOff" | "Path" | "MaxSize" | "MaxFiles";
export type AlterServerConfigurationExternalAuthenticationOptionKind = "None" | "OnOff" | "CredentialName" | "UseIdentity";
export type AlterServerConfigurationFailoverClusterPropertyOptionKind = "None" | "VerboseLogging" | "SqlDumperDumpFlags" | "SqlDumperDumpPath" | "SqlDumperDumpTimeout" | "FailureConditionLevel" | "HealthCheckTimeout";
export type AlterServerConfigurationHadrClusterOptionKind = "None" | "Context";
export type AlterServerConfigurationSoftNumaOptionKind = "None" | "OnOff";
export type AlterServiceMasterKeyOption = "None" | "Regenerate" | "ForceRegenerate" | "WithOldAccount" | "WithNewAccount";
export type AlterTableAlterColumnOption = "NoOptionDefined" | "AddRowGuidCol" | "DropRowGuidCol" | "Null" | "NotNull" | "AddPersisted" | "DropPersisted" | "AddNotForReplication" | "DropNotForReplication" | "AddSparse" | "DropSparse" | "AddMaskingFunction" | "DropMaskingFunction" | "AddHidden" | "DropHidden" | "Encryption";
export type ApplicationRoleOptionKind = "Name" | "DefaultSchema" | "Login" | "Password";
export type AssemblyOptionKind = "PermissionSet" | "Visibility" | "UncheckedData";
export type AssignmentKind = "Equals" | "AddEquals" | "SubtractEquals" | "MultiplyEquals" | "DivideEquals" | "ModEquals" | "BitwiseAndEquals" | "BitwiseOrEquals" | "BitwiseXorEquals" | "ConcatEquals";
export type AtomicBlockOptionKind = "IsolationLevel" | "Language" | "DateFirst" | "DateFormat" | "DelayedDurability";
export type AttachMode = "None" | "Attach" | "AttachRebuildLog" | "AttachForceRebuildLog" | "Load";
export type AuditActionGroup = "None" | "SuccessfulLogin" | "Logout" | "ServerStateChange" | "FailedLogin" | "LoginChangePassword" | "ServerRoleMemberChange" | "ServerPrincipalImpersonation" | "ServerObjectOwnershipChange" | "DatabaseMirroringLogin" | "BrokerLogin" | "ServerPermissionChange" | "ServerObjectPermissionChange" | "ServerOperation" | "TraceChange" | "ServerObjectChange" | "ServerPrincipalChange" | "DatabasePermissionChange" | "SchemaObjectPermissionChange" | "DatabaseRoleMemberChange" | "ApplicationRoleChangePassword" | "SchemaObjectAccess" | "BackupRestore" | "Dbcc" | "AuditChange" | "DatabaseChange" | "DatabaseObjectChange" | "DatabasePrincipalChange" | "SchemaObjectChange" | "DatabasePrincipalImpersonation" | "DatabaseObjectOwnershipChange" | "DatabaseOwnershipChange" | "SchemaObjectOwnershipChange" | "DatabaseObjectPermissionChange" | "DatabaseOperation" | "DatabaseObjectAccess" | "SuccessfulDatabaseAuthenticationGroup" | "FailedDatabaseAuthenticationGroup" | "DatabaseLogoutGroup" | "UserChangePasswordGroup" | "UserDefinedAuditGroup" | "TransactionBegin" | "TransactionCommit" | "TransactionRollback" | "StatementRollback" | "TransactionGroup" | "BatchCompletedGroup" | "BatchStartedGroup";
export type AuditFailureActionType = "Continue" | "Shutdown" | "FailOperation";
export type AuditOptionKind = "QueueDelay" | "AuditGuid" | "OnFailure" | "State" | "OperatorAudit";
export type AuditTargetKind = "File" | "ApplicationLog" | "SecurityLog" | "Url" | "ExternalMonitor";
export type AuditTargetOptionKind = "MaxRolloverFiles" | "FilePath" | "ReserveDiskSpace" | "MaxSize" | "MaxFiles" | "Path" | "RetentionDays";
export type AuthenticationProtocol = "NotSpecified" | "Windows" | "WindowsNtlm" | "WindowsKerberos" | "WindowsNegotiate";
export type AuthenticationTypes = "None" | "Basic" | "Digest" | "Integrated" | "Ntlm" | "Kerberos";
export type AutomaticTuningOptionKind = "Force_Last_Good_Plan" | "Create_Index" | "Drop_Index" | "Maintain_Index";
export type AutomaticTuningOptionState = "Off" | "On" | "Default";
export type AutomaticTuningState = "NotSet" | "Inherit" | "Auto" | "Custom";
export type AvailabilityGroupOptionKind = "RequiredCopiesToCommit";
export type AvailabilityModeOptionKind = "SynchronousCommit" | "AsynchronousCommit";
export type AvailabilityReplicaOptionKind = "AvailabilityMode" | "FailoverMode" | "EndpointUrl" | "SecondaryRole" | "SessionTimeout" | "ApplyDelay" | "PrimaryRole";
export type BackupOptionKind = "None" | "NoRecovery" | "TruncateOnly" | "NoLog" | "NoTruncate" | "Unload" | "NoUnload" | "Rewind" | "NoRewind" | "Format" | "NoFormat" | "Init" | "NoInit" | "Skip" | "NoSkip" | "Restart" | "Stats" | "Differential" | "Snapshot" | "Checksum" | "NoChecksum" | "ContinueAfterError" | "StopOnError" | "CopyOnly" | "Standby" | "ExpireDate" | "RetainDays" | "Name" | "Description" | "Password" | "MediaName" | "MediaDescription" | "MediaPassword" | "BlockSize" | "BufferCount" | "MaxTransferSize" | "EnhancedIntegrity" | "Compression" | "NoCompression" | "Encryption";
export type BackupRestoreItemKind = "None" | "Files" | "FileGroups" | "Page" | "ReadWriteFileGroups";
export type BinaryExpressionType = "Add" | "Subtract" | "Multiply" | "Divide" | "Modulo" | "BitwiseAnd" | "BitwiseOr" | "BitwiseXor" | "LeftShift" | "RightShift" | "Concat";
export type BinaryQueryExpressionType = "Union" | "Except" | "Intersect";
export type BooleanBinaryExpressionType = "And" | "Or";
export type BooleanComparisonType = "Equals" | "GreaterThan" | "LessThan" | "GreaterThanOrEqualTo" | "LessThanOrEqualTo" | "NotEqualToBrackets" | "NotEqualToExclamation" | "NotLessThan" | "NotGreaterThan" | "LeftOuterJoin" | "RightOuterJoin" | "IsDistinctFrom" | "IsNotDistinctFrom" | "NotLike";
export type BooleanTernaryExpressionType = "Between" | "NotBetween";
export type BoundingBoxParameterType = "None" | "XMin" | "YMin" | "XMax" | "YMax";
export type BrokerPriorityParameterSpecialType = "None" | "Any" | "Default";
export type BrokerPriorityParameterType = "Unknown" | "ContractName" | "LocalServiceName" | "RemoteServiceName" | "PriorityLevel";
export type BuiltInFunctionCasing = "Preserve" | "Uppercase" | "Lowercase" | "PascalCase";
export type BulkInsertOptionKind = "None" | "BatchSize" | "CheckConstraints" | "CodePage" | "DataFileType" | "FieldTerminator" | "FirstRow" | "FireTriggers" | "FormatFile" | "KeepIdentity" | "KeepNulls" | "KilobytesPerBatch" | "LastRow" | "MaxErrors" | "RowsPerBatch" | "RowTerminator" | "TabLock" | "ErrorFile" | "NoTriggers" | "SingleBlob" | "SingleClob" | "SingleNClob" | "Order" | "IncludeHidden" | "DataSource" | "FormatDataSource" | "ErrorDataSource" | "DataFileFormat" | "FieldQuote" | "EscapeChar" | "DataCompression" | "ParserVersion" | "HeaderRow" | "RowsetOptions";
export type CatalogCollation = "Database_Default" | "Latin1_General_100_CI_AS_KS_WS_SC" | "SQL_Latin1_General_CP1_CI_AS";
export type CertificateOptionKinds = "None" | "Subject" | "StartDate" | "ExpiryDate";
export type ChangeTrackingOption = "NotSpecified" | "Auto" | "Manual" | "Off" | "OffNoPopulation";
export type ClauseBodyAlignment = "Aligned" | "Indented";
export type ColumnAliasStyle = "AsKeyword" | "EqualsSign" | "Preserve";
export type ColumnEncryptionDefinitionParameterKind = "ColumnEncryptionKey" | "EncryptionType" | "Algorithm";
export type ColumnEncryptionKeyAlterType = "Add" | "Drop";
export type ColumnEncryptionKeyValueParameterKind = "ColumnMasterKeyName" | "EncryptionAlgorithmName" | "EncryptedValue";
export type ColumnEncryptionType = "Deterministic" | "Randomized";
export type ColumnMasterKeyParameterKind = "KeyStoreProviderName" | "KeyPath" | "AllowEnclaveComputations" | "Signature";
export type ColumnType = "Regular" | "IdentityCol" | "RowGuidCol" | "Wildcard" | "PseudoColumnIdentity" | "PseudoColumnRowGuid" | "PseudoColumnAction" | "PseudoColumnCuid" | "PseudoColumnGraphNodeId" | "PseudoColumnGraphEdgeId" | "PseudoColumnGraphFromId" | "PseudoColumnGraphToId";
export type CommaPlacement = "Trailing" | "Leading";
export type CommandOptions = "None" | "CreateDatabase" | "CreateDefault" | "CreateProcedure" | "CreateFunction" | "CreateRule" | "CreateTable" | "CreateView" | "BackupDatabase" | "BackupLog";
export type CompressionDelayTimeUnit = "Unitless" | "Minute" | "Minutes";
export type ComputeFunctionType = "NotSpecified" | "Avg" | "Count" | "Max" | "Min" | "Stdev" | "Stdevp" | "Var" | "Varp" | "Sum" | "CountBig" | "ChecksumAgg" | "ModularSum";
export type ConstraintEnforcement = "NotSpecified" | "NoCheck" | "Check";
export type ContainmentOptionKind = "None" | "Partial";
export type CopyCommandCompressionType = "None" | "Gzip" | "DefaultCodec" | "Snappy";
export type CopyCommandCredentialType = "Sas" | "AccountKey" | "ServicePrincipal" | "ManagedIdentity" | "PassThrough" | "None";
export type CopyCommandDateFormat = "mdy" | "dmy" | "ymd" | "ydm" | "myd" | "dym";
export type CopyCommandEncoding = "UTF8" | "UTF16";
export type CopyCommandFileFormatType = "Orc" | "Csv" | "Parquet";
export type CopyCommandIdentityInsert = "ON" | "OFF";
export type CopyOptionKind = "File_Format" | "File_Type" | "ErrorFile" | "Identity_Insert" | "MaxErrors" | "Compression" | "FieldQuote" | "FieldTerminator" | "RowTerminator" | "FirstRow" | "DateFormat" | "Encoding" | "ColumnOptions" | "Credential" | "ErrorFileCredential";
export type CryptoMechanismType = "Certificate" | "AsymmetricKey" | "SymmetricKey" | "Password";
export type CursorOptionKind = "Local" | "Global" | "Scroll" | "ForwardOnly" | "Insensitive" | "Keyset" | "Dynamic" | "FastForward" | "ScrollLocks" | "Optimistic" | "ReadOnly" | "Static" | "TypeWarning";
export type DataCompressionLevel = "None" | "Row" | "Page" | "ColumnStore" | "ColumnStoreArchive";
export type DatabaseAuditActionKind = "Select" | "Update" | "Insert" | "Delete" | "Execute" | "Receive" | "References";
export type DatabaseConfigClearOptionKind = "ProcedureCache";
export type DatabaseConfigSetOptionKind = "MaxDop" | "LegacyCardinalityEstimate" | "ParameterSniffing" | "QueryOptimizerHotFixes" | "DWCompatibilityLevel";
export type DatabaseConfigurationOptionState = "NotSet" | "On" | "Off" | "Primary";
export type DatabaseEncryptionKeyAlgorithm = "None" | "Aes128" | "Aes192" | "Aes256" | "TripleDes3Key";
export type DatabaseMirroringEndpointRole = "NotSpecified" | "Witness" | "Partner" | "All";
export type DatabaseOptionKind = "Online" | "Offline" | "Emergency" | "SingleUser" | "RestrictedUser" | "MultiUser" | "ReadOnly" | "ReadWrite" | "EnableBroker" | "DisableBroker" | "NewBroker" | "ErrorBrokerConversations" | "DBChaining" | "Trustworthy" | "CursorCloseOnCommit" | "AutoClose" | "AutoCreateStatistics" | "AutoShrink" | "AutoUpdateStatistics" | "AutoUpdateStatisticsAsync" | "AnsiNullDefault" | "AnsiNulls" | "AnsiPadding" | "AnsiWarnings" | "ArithAbort" | "ConcatNullYieldsNull" | "NumericRoundAbort" | "QuotedIdentifier" | "RecursiveTriggers" | "TornPageDetection" | "DateCorrelationOptimization" | "AllowSnapshotIsolation" | "ReadCommittedSnapshot" | "Encryption" | "HonorBrokerPriority" | "VarDecimalStorageFormat" | "SupplementalLogging" | "CompatibilityLevel" | "CursorDefault" | "Recovery" | "PageVerify" | "Partner" | "Witness" | "Parameterization" | "ChangeTracking" | "DefaultLanguage" | "DefaultFullTextLanguage" | "NestedTriggers" | "TransformNoiseWords" | "TwoDigitYearCutoff" | "Containment" | "Hadr" | "FileStream" | "Edition" | "MaxSize" | "TargetRecoveryTime" | "MemoryOptimizedData" | "DelayedDurability" | "MemoryOptimizedElevateToSnapshot" | "ServiceObjective" | "RemoteDataArchive" | "QueryStore" | "MixedPageAllocation" | "TemporalHistoryRetention" | "CatalogCollation" | "AutomaticTuning" | "AcceleratedDatabaseRecovery" | "DataRetention" | "Ledger" | "ManualCutover" | "PerformCutover" | "OptimizedLocking" | "AutomaticIndexCompaction";
export type DbccCommand = "None" | "ActiveCursors" | "AddExtendedProc" | "AddInstance" | "AuditEvent" | "AutoPilot" | "Buffer" | "Bytes" | "CacheProfile" | "CacheStats" | "CallFullText" | "CheckAlloc" | "CheckCatalog" | "CheckConstraints" | "CheckDB" | "CheckFileGroup" | "CheckIdent" | "CheckPrimaryFile" | "CheckTable" | "CleanTable" | "ClearSpaceCaches" | "CollectStats" | "ConcurrencyViolation" | "CursorStats" | "DBRecover" | "DBReindex" | "DBReindexAll" | "DBRepair" | "DebugBreak" | "DeleteInstance" | "DetachDB" | "DropCleanBuffers" | "DropExtendedProc" | "DumpConfig" | "DumpDBInfo" | "DumpDBTable" | "DumpLock" | "DumpLog" | "DumpPage" | "DumpResource" | "DumpTrigger" | "ErrorLog" | "ExtentInfo" | "FileHeader" | "FixAllocation" | "Flush" | "FlushProcInDB" | "ForceGhostCleanup" | "Free" | "FreeProcCache" | "FreeSessionCache" | "FreeSystemCache" | "FreezeIO" | "Help" | "IcecapQuery" | "IncrementInstance" | "Ind" | "IndexDefrag" | "InputBuffer" | "InvalidateTextptr" | "InvalidateTextptrObjid" | "Latch" | "LogInfo" | "MapAllocUnit" | "MemObjList" | "MemoryMap" | "MemoryStatus" | "Metadata" | "MovePage" | "NoTextptr" | "OpenTran" | "OptimizerWhatIf" | "OutputBuffer" | "PerfMonStats" | "PersistStackHash" | "PinTable" | "ProcCache" | "PrtiPage" | "ReadPage" | "RenameColumn" | "RuleOff" | "RuleOn" | "SeMetadata" | "SetCpuWeight" | "SetInstance" | "SetIOWeight" | "ShowStatistics" | "ShowContig" | "ShowDBAffinity" | "ShowFileStats" | "ShowOffRules" | "ShowOnRules" | "ShowTableAffinity" | "ShowText" | "ShowWeights" | "ShrinkDatabase" | "ShrinkFile" | "SqlMgrStats" | "SqlPerf" | "StackDump" | "Tec" | "ThawIO" | "ThrottleIO" | "TraceOff" | "TraceOn" | "TraceStatus" | "UnpinTable" | "UpdateUsage" | "UsePlan" | "UserOptions" | "WritePage";
export type DbccOptionKind = "AllErrorMessages" | "CountRows" | "NoInfoMessages" | "TableResults" | "TabLock" | "StatHeader" | "DensityVector" | "HistogramSteps" | "EstimateOnly" | "Fast" | "AllLevels" | "AllIndexes" | "PhysicalOnly" | "AllConstraints" | "StatsStream" | "Histogram" | "DataPurity" | "MarkInUseForRemoval" | "ExtendedLogicalChecks";
export type DelayedDurabilityOptionKind = "Disabled" | "Allowed" | "Forced";
export type DeleteUpdateAction = "NotSpecified" | "Cascade" | "SetNull" | "SetDefault" | "NoAction";
export type DeviceType = "None" | "Disk" | "Tape" | "VirtualDevice" | "DatabaseSnapshot" | "Url";
export type DialogOptionKind = "RelatedConversation" | "RelatedConversationGroup" | "Lifetime" | "Encryption";
export type DiskStatementOptionKind = "Name" | "PhysName" | "VDevNo" | "Size" | "VStart";
export type DiskStatementType = "Init" | "Resize";
export type DropClusteredConstraintOptionKind = "MaxDop" | "Online" | "MoveTo" | "WaitAtLowPriority";
export type DropSchemaBehavior = "None" | "Cascade" | "Restrict";
export type DurabilityTableOptionKind = "SchemaOnly" | "SchemaAndData";
export type EnableDisableOptionType = "None" | "Enable" | "Disable";
export type EncryptionAlgorithm = "None" | "RC2" | "RC4" | "RC4_128" | "Des" | "TripleDes" | "DesX" | "Aes128" | "Aes192" | "Aes256" | "Rsa512" | "Rsa1024" | "Rsa2048" | "TripleDes3Key" | "Rsa3072" | "Rsa4096";
export type EncryptionAlgorithmPreference = "NotSpecified" | "Aes" | "Rc4";
export type EndpointEncryptionSupport = "NotSpecified" | "Disabled" | "Supported" | "Required";
export type EndpointProtocol = "None" | "Http" | "Tcp";
export type EndpointProtocolOptions = "None" | "HttpAuthenticationRealm" | "HttpAuthentication" | "HttpClearPort" | "HttpCompression" | "HttpDefaultLogonDomain" | "HttpPath" | "HttpPorts" | "HttpSite" | "HttpSslPort" | "HttpOptions" | "TcpListenerIP" | "TcpListenerPort" | "TcpOptions";
export type EndpointState = "NotSpecified" | "Disabled" | "Started" | "Stopped";
export type EndpointType = "NotSpecified" | "Soap" | "TSql" | "ServiceBroker" | "DatabaseMirroring";
export type EventNotificationEventGroup = "Unknown" | "DdlEvents" | "DdlServerLevelEvents" | "DdlEndpointEvents" | "DdlDatabaseEvents" | "DdlServerSecurityEvents" | "DdlLoginEvents" | "DdlGdrServerEvents" | "DdlAuthorizationServerEvents" | "DdlCredentialEvents" | "DdlServiceMasterKeyEvents" | "DdlExtendedProcedureEvents" | "DdlLinkedServerEvents" | "DdlLinkedServerLoginEvents" | "DdlMessageEvents" | "DdlRemoteServerEvents" | "DdlDatabaseLevelEvents" | "DdlTableViewEvents" | "DdlTableEvents" | "DdlViewEvents" | "DdlIndexEvents" | "DdlStatisticsEvents" | "DdlSynonymEvents" | "DdlFunctionEvents" | "DdlProcedureEvents" | "DdlTriggerEvents" | "DdlEventNotificationEvents" | "DdlAssemblyEvents" | "DdlTypeEvents" | "DdlDatabaseSecurityEvents" | "DdlCertificateEvents" | "DdlUserEvents" | "DdlRoleEvents" | "DdlApplicationRoleEvents" | "DdlSchemaEvents" | "DdlGdrDatabaseEvents" | "DdlAuthorizationDatabaseEvents" | "DdlSymmetricKeyEvents" | "DdlAsymmetricKeyEvents" | "DdlCryptoSignatureEvents" | "DdlMasterKeyEvents" | "DdlSsbEvents" | "DdlMessageTypeEvents" | "DdlContractEvents" | "DdlQueueEvents" | "DdlServiceEvents" | "DdlRouteEvents" | "DdlRemoteServiceBindingEvents" | "DdlXmlSchemaCollectionEvents" | "DdlPartitionEvents" | "DdlPartitionFunctionEvents" | "DdlPartitionSchemeEvents" | "DdlDefaultEvents" | "DdlExtendedPropertyEvents" | "DdlFullTextCatalogEvents" | "DdlPlanGuideEvents" | "DdlRuleEvents" | "DdlEventSessionEvents" | "DdlResourceGovernorEvents" | "DdlResourcePool" | "DdlWorkloadGroup" | "DdlCryptographicProviderEvents" | "DdlDatabaseEncryptionKeyEvents" | "DdlBrokerPriorityEvents" | "DdlServerAuditEvents" | "DdlServerAuditSpecificationEvents" | "DdlDatabaseAuditSpecificationEvents" | "DdlFullTextStopListEvents" | "DdlSearchPropertyListEvents" | "DdlSequenceEvents" | "DdlAvailabilityGroupEvents" | "DdlDatabaseAuditEvents" | "DdlSecurityPolicyEvents" | "DdlColumnMasterKeyEvents" | "DdlColumnEncryptionKeyEvents" | "DdlExternalResourcePoolEvents" | "DdlExternalLibraryEvents" | "DdlSensitivityEvents" | "DdlExternalLanguageEvents" | "TrcAllEvents" | "TrcDatabase" | "TrcErrorsAndWarnings" | "TrcLocks" | "TrcObjects" | "TrcPerformance" | "TrcSecurityAudit" | "TrcServer" | "TrcStoredProcedures" | "TrcTSql" | "TrcUserConfigurable" | "TrcOledb" | "TrcFullText" | "TrcDeprecation" | "TrcClr" | "TrcQueryNotifications";
export type EventNotificationEventType = "Unknown" | "CreateTable" | "AlterTable" | "DropTable" | "CreateIndex" | "AlterIndex" | "DropIndex" | "CreateStatistics" | "UpdateStatistics" | "DropStatistics" | "CreateSynonym" | "DropSynonym" | "CreateView" | "AlterView" | "DropView" | "CreateProcedure" | "AlterProcedure" | "DropProcedure" | "CreateFunction" | "AlterFunction" | "DropFunction" | "CreateTrigger" | "AlterTrigger" | "DropTrigger" | "CreateEventNotification" | "DropEventNotification" | "CreateType" | "DropType" | "CreateAssembly" | "AlterAssembly" | "DropAssembly" | "CreateUser" | "AlterUser" | "DropUser" | "CreateRole" | "AlterRole" | "DropRole" | "CreateApplicationRole" | "AlterApplicationRole" | "DropApplicationRole" | "CreateSchema" | "AlterSchema" | "DropSchema" | "CreateLogin" | "AlterLogin" | "DropLogin" | "CreateMessageType" | "AlterMessageType" | "DropMessageType" | "CreateContract" | "DropContract" | "CreateQueue" | "AlterQueue" | "DropQueue" | "BrokerQueueDisabled" | "CreateService" | "AlterService" | "DropService" | "CreateRoute" | "AlterRoute" | "DropRoute" | "GrantServer" | "DenyServer" | "RevokeServer" | "GrantDatabase" | "DenyDatabase" | "RevokeDatabase" | "QueueActivation" | "CreateRemoteServiceBinding" | "AlterRemoteServiceBinding" | "DropRemoteServiceBinding" | "CreateXmlSchemaCollection" | "AlterXmlSchemaCollection" | "DropXmlSchemaCollection" | "CreateEndpoint" | "AlterEndpoint" | "DropEndpoint" | "CreatePartitionFunction" | "AlterPartitionFunction" | "DropPartitionFunction" | "CreatePartitionScheme" | "AlterPartitionScheme" | "DropPartitionScheme" | "CreateCertificate" | "AlterCertificate" | "DropCertificate" | "CreateDatabase" | "AlterDatabase" | "DropDatabase" | "AlterAuthorizationServer" | "AlterAuthorizationDatabase" | "CreateXmlIndex" | "AddRoleMember" | "DropRoleMember" | "AddServerRoleMember" | "DropServerRoleMember" | "AlterExtendedProperty" | "AlterFullTextCatalog" | "AlterFullTextIndex" | "AlterInstance" | "AlterMessage" | "AlterPlanGuide" | "AlterRemoteServer" | "BindDefault" | "BindRule" | "CreateDefault" | "CreateExtendedProcedure" | "CreateExtendedProperty" | "CreateFullTextCatalog" | "CreateFullTextIndex" | "CreateLinkedServer" | "CreateLinkedServerLogin" | "CreateMessage" | "CreatePlanGuide" | "CreateRule" | "CreateRemoteServer" | "DropDefault" | "DropExtendedProcedure" | "DropExtendedProperty" | "DropFullTextCatalog" | "DropFullTextIndex" | "DropLinkedServerLogin" | "DropMessage" | "DropPlanGuide" | "DropRule" | "DropRemoteServer" | "Rename" | "UnbindDefault" | "UnbindRule" | "CreateSymmetricKey" | "AlterSymmetricKey" | "DropSymmetricKey" | "CreateAsymmetricKey" | "AlterAsymmetricKey" | "DropAsymmetricKey" | "AlterServiceMasterKey" | "CreateMasterKey" | "AlterMasterKey" | "DropMasterKey" | "AddSignatureSchemaObject" | "DropSignatureSchemaObject" | "AddSignature" | "DropSignature" | "CreateCredential" | "AlterCredential" | "DropCredential" | "DropLinkedServer" | "AlterLinkedServer" | "CreateEventSession" | "AlterEventSession" | "DropEventSession" | "CreateResourcePool" | "AlterResourcePool" | "DropResourcePool" | "CreateWorkloadGroup" | "AlterWorkloadGroup" | "DropWorkloadGroup" | "AlterResourceGovernorConfig" | "CreateSpatialIndex" | "CreateCryptographicProvider" | "AlterCryptographicProvider" | "DropCryptographicProvider" | "CreateDatabaseEncryptionKey" | "AlterDatabaseEncryptionKey" | "DropDatabaseEncryptionKey" | "CreateBrokerPriority" | "AlterBrokerPriority" | "DropBrokerPriority" | "CreateServerAudit" | "AlterServerAudit" | "DropServerAudit" | "CreateServerAuditSpecification" | "AlterServerAuditSpecification" | "DropServerAuditSpecification" | "CreateDatabaseAuditSpecification" | "AlterDatabaseAuditSpecification" | "DropDatabaseAuditSpecification" | "CreateFullTextStopList" | "AlterFullTextStopList" | "DropFullTextStopList" | "AlterServerConfiguration" | "CreateSearchPropertyList" | "AlterSearchPropertyList" | "DropSearchPropertyList" | "CreateServerRole" | "AlterServerRole" | "DropServerRole" | "CreateSequence" | "AlterSequence" | "DropSequence" | "CreateAvailabilityGroup" | "AlterAvailabilityGroup" | "DropAvailabilityGroup" | "CreateDatabaseAudit" | "DropDatabaseAudit" | "AlterDatabaseAudit" | "CreateSecurityPolicy" | "AlterSecurityPolicy" | "DropSecurityPolicy" | "CreateColumnMasterKey" | "DropColumnMasterKey" | "CreateColumnEncryptionKey" | "AlterColumnEncryptionKey" | "DropColumnEncryptionKey" | "AlterDatabaseScopedConfiguration" | "CreateExternalResourcePool" | "AlterExternalResourcePool" | "DropExternalResourcePool" | "CreateExternalLibrary" | "AlterExternalLibrary" | "DropExternalLibrary" | "AddSensitivityClassification" | "DropSensitivityClassification" | "CreateExternalLanguage" | "AlterExternalLanguage" | "DropExternalLanguage" | "CreateJsonIndex" | "CreateVectorIndex" | "AddInformationProtection" | "DropInformationProtection" | "AuditLogin" | "AuditLogout" | "AuditLoginFailed" | "EventLog" | "ErrorLog" | "LockDeadlock" | "Exception" | "SpCacheMiss" | "SpCacheInsert" | "SpCacheRemove" | "SpRecompile" | "ObjectCreated" | "ObjectDeleted" | "HashWarning" | "LockDeadlockChain" | "LockEscalation" | "OledbErrors" | "ExecutionWarnings" | "SortWarnings" | "MissingColumnStatistics" | "MissingJoinPredicate" | "ServerMemoryChange" | "UserConfigurable0" | "UserConfigurable1" | "UserConfigurable2" | "UserConfigurable3" | "UserConfigurable4" | "UserConfigurable5" | "UserConfigurable6" | "UserConfigurable7" | "UserConfigurable8" | "UserConfigurable9" | "DataFileAutoGrow" | "LogFileAutoGrow" | "DataFileAutoShrink" | "LogFileAutoShrink" | "AuditDatabaseScopeGdrEvent" | "AuditSchemaObjectGdrEvent" | "AuditAddLoginEvent" | "AuditLoginGdrEvent" | "AuditLoginChangePropertyEvent" | "AuditLoginChangePasswordEvent" | "AuditAddLoginToServerRoleEvent" | "AuditAddDBUserEvent" | "AuditAddMemberToDBRoleEvent" | "AuditAddRoleEvent" | "AuditAppRoleChangePasswordEvent" | "AuditSchemaObjectAccessEvent" | "AuditBackupRestoreEvent" | "AuditDbccEvent" | "AuditChangeAuditEvent" | "OledbCallEvent" | "OledbQueryInterfaceEvent" | "OledbDataReadEvent" | "ShowPlanXml" | "DeprecationAnnouncement" | "DeprecationFinalSupport" | "ExchangeSpillEvent" | "AuditDatabaseManagementEvent" | "AuditDatabaseObjectManagementEvent" | "AuditDatabasePrincipalManagementEvent" | "AuditSchemaObjectManagementEvent" | "AuditServerPrincipalImpersonationEvent" | "AuditDatabasePrincipalImpersonationEvent" | "AuditServerObjectTakeOwnershipEvent" | "AuditDatabaseObjectTakeOwnershipEvent" | "BlockedProcessReport" | "ShowPlanXmlStatisticsProfile" | "DeadlockGraph" | "TraceFileClose" | "AuditChangeDatabaseOwner" | "AuditSchemaObjectTakeOwnershipEvent" | "FtCrawlStarted" | "FtCrawlStopped" | "FtCrawlAborted" | "UserErrorMessage" | "ObjectAltered" | "SqlStmtRecompile" | "DatabaseMirroringStateChange" | "ShowPlanXmlForQueryCompile" | "ShowPlanAllForQueryCompile" | "AuditServerScopeGdrEvent" | "AuditServerObjectGdrEvent" | "AuditDatabaseObjectGdrEvent" | "AuditServerOperationEvent" | "AuditServerAlterTraceEvent" | "AuditServerObjectManagementEvent" | "AuditServerPrincipalManagementEvent" | "AuditDatabaseOperationEvent" | "AuditDatabaseObjectAccessEvent" | "OledbProviderInformation" | "MountTape" | "AssemblyLoad" | "XQueryStaticType" | "QnSubscription" | "QnParameterTable" | "QnTemplate" | "QnDynamics" | "BitmapWarning" | "DatabaseSuspectDataPage" | "CpuThresholdExceeded" | "AuditFullText";
export type EventNotificationTarget = "Unknown" | "Server" | "Database" | "Queue";
export type EventSessionEventRetentionModeType = "Unknown" | "AllowSingleEventLoss" | "AllowMultipleEventLoss" | "NoEventLoss";
export type EventSessionMemoryPartitionModeType = "Unknown" | "None" | "PerNode" | "PerCpu";
export type EventSessionScope = "Server" | "Database";
export type ExecuteAsOption = "Caller" | "Self" | "Owner" | "String" | "Login" | "User";
export type ExecuteOptionKind = "Recompile" | "ResultSets";
export type ExpressionFlags = "None" | "ScalarSubqueriesDisallowed" | "MatchClauseAllowed";
export type ExternalDataSourceOptionKind = "ResourceManagerLocation" | "Credential" | "DatabaseName" | "ShardMapName" | "ConnectionOptions";
export type ExternalDataSourcePushdownOption = "ON" | "OFF";
export type ExternalDataSourceType = "HADOOP" | "RDBMS" | "SHARD_MAP_MANAGER" | "BLOB_STORAGE" | "EXTERNAL_GENERICS";
export type ExternalFileFormatOptionKind = "SerDeMethod" | "FormatOptions" | "FieldTerminator" | "StringDelimiter" | "DateFormat" | "UseTypeDefault" | "DataCompression" | "FirstRow" | "Encoding" | "ParserVersion";
export type ExternalFileFormatType = "DelimitedText" | "RcFile" | "Orc" | "Parquet" | "JSON" | "Delta";
export type ExternalFileFormatUseDefaultType = "False" | "True";
export type ExternalModelTypeOption = "EMBEDDINGS";
export type ExternalResourcePoolAffinityType = "None" | "Cpu" | "NumaNode";
export type ExternalResourcePoolParameterType = "Unknown" | "MaxCpuPercent" | "MaxMemoryPercent" | "MaxProcesses" | "Affinity";
export type ExternalStreamOptionKind = "DataSource" | "FileFormat";
export type ExternalTableOptionKind = "Distribution" | "FileFormat" | "Location" | "RejectSampleValue" | "RejectType" | "RejectValue" | "SchemaName" | "ObjectName" | "RejectedRowLocation" | "TableOptions";
export type ExternalTableRejectType = "Value" | "Percentage";
export type FailoverActionOptionKind = "Target";
export type FailoverModeOptionKind = "Automatic" | "Manual";
export type FetchOrientation = "None" | "First" | "Next" | "Prior" | "Last" | "Relative" | "Absolute";
export type FileDeclarationOptionKind = "Name" | "NewName" | "Offline" | "FileName" | "Size" | "MaxSize" | "FileGrowth";
export type FileFormatType = "Undefined" | "RcFile" | "Orc" | "DelimitedText" | "Parquet" | "Csv" | "Parallel_Csv";
export type FipsComplianceLevel = "Off" | "Entry" | "Intermediate" | "Full";
export type FullTextCatalogOptionKind = "AccentSensitivity";
export type FullTextFunctionType = "None" | "Contains" | "FreeText";
export type FullTextIndexOptionKind = "ChangeTracking" | "StopList" | "SearchPropertyList";
export type FunctionOptionKind = "Encryption" | "SchemaBinding" | "ReturnsNullOnNullInput" | "CalledOnNullInput" | "ExecuteAs" | "NativeCompilation" | "Inline";
export type GeneralSetCommandType = "None" | "Language" | "DateFormat" | "DateFirst" | "DeadlockPriority" | "LockTimeout" | "QueryGovernorCostLimit" | "ContextInfo";
export type GeneratedAlwaysType = "RowStart" | "RowEnd" | "UserIdStart" | "UserIdEnd" | "UserNameStart" | "UserNameEnd" | "TransactionIdStart" | "TransactionIdEnd" | "SequenceNumberStart" | "SequenceNumberEnd";
export type GraphMatchRecursivePredicateKind = "ShortestPath";
export type GridParameterType = "None" | "Level1" | "Level2" | "Level3" | "Level4";
export type GroupByOption = "None" | "Cube" | "Rollup";
export type HadrDatabaseOptionKind = "Suspend" | "Resume" | "Off" | "AvailabilityGroup";
export type IdentifierBracketing = "Preserve" | "IncludeBrackets" | "ExcludeBrackets";
export type IdentifierCasing = "Preserve" | "Uppercase" | "Lowercase" | "PascalCase";
export type ImportanceParameterType = "Unknown" | "Low" | "Medium" | "High" | "Normal" | "Above_Normal" | "Below_Normal";
export type IndentationMode = "Spaces" | "Tabs";
export type IndexAffectingStatement = "AlterTableAddElement" | "AlterTableAlterIndexRebuild" | "AlterTableRebuildOnePartition" | "AlterTableRebuildAllPartitions" | "AlterIndexSet" | "AlterIndexRebuildOnePartition" | "AlterIndexRebuildAllPartitions" | "AlterIndexReorganize" | "CreateColumnStoreIndex" | "CreateIndex" | "CreateTable" | "CreateType" | "CreateXmlIndex" | "CreateOrAlterFunction" | "DeclareTableVariable" | "CreateSpatialIndex" | "CreateTableInlineIndex" | "AlterTableAlterColumn" | "AlterIndexResume";
export type IndexOptionKind = "PadIndex" | "FillFactor" | "SortInTempDB" | "IgnoreDupKey" | "StatisticsNoRecompute" | "DropExisting" | "Online" | "AllowRowLocks" | "AllowPageLocks" | "MaxDop" | "LobCompaction" | "FileStreamOn" | "DataCompression" | "MoveTo" | "BucketCount" | "StatisticsIncremental" | "Order" | "CompressAllRowGroups" | "CompressionDelay" | "Resumable" | "MaxDuration" | "WaitAtLowPriority" | "OptimizeForSequentialKey" | "XmlCompression" | "VectorMetric" | "VectorType" | "OptimizeForArraySearch";
export type IndexTypeKind = "Clustered" | "NonClustered" | "NonClusteredHash" | "ClusteredColumnStore" | "NonClusteredColumnStore";
export type InsertOption = "None" | "Into" | "Over";
export type IsolationLevel = "None" | "ReadCommitted" | "ReadUncommitted" | "RepeatableRead" | "Serializable" | "Snapshot";
export type JoinHint = "None" | "Loop" | "Hash" | "Merge" | "Remote";
export type JsonForClauseOptions = "None" | "Auto" | "Path" | "Root" | "IncludeNullValues" | "WithoutArrayWrapper";
export type KeyOptionKind = "KeySource" | "Algorithm" | "IdentityValue" | "ProviderKeyName" | "CreationDisposition";
export type KeywordCasing = "Lowercase" | "Uppercase" | "PascalCase";
export type LiteralType = "Integer" | "Real" | "Money" | "Binary" | "String" | "Null" | "Default" | "Max" | "Odbc" | "Identifier" | "Numeric";
export type LockEscalationMethod = "Table" | "Auto" | "Disable";
export type LowPriorityLockWaitOptionKind = "MaxDuration" | "AbortAfterWait";
export type MemoryUnit = "Unspecified" | "Percent" | "Bytes" | "KB" | "MB" | "GB" | "TB" | "PB" | "EB";
export type MergeCondition = "NotSpecified" | "Matched" | "NotMatched" | "NotMatchedByTarget" | "NotMatchedBySource";
export type MessageSender = "None" | "Initiator" | "Target" | "Any";
export type MessageValidationMethod = "NotSpecified" | "None" | "Empty" | "WellFormedXml" | "ValidXml";
export type MigrationState = "Paused" | "Outbound" | "Inbound";
export type ModifyFileGroupOption = "None" | "ReadWrite" | "ReadWriteOld" | "ReadOnly" | "ReadOnlyOld" | "AutogrowAllFiles" | "AutogrowSingleFile";
export type NonTransactedFileStreamAccess = "Off" | "ReadOnly" | "Full";
export type NullNotNull = "NotSpecified" | "Null" | "NotNull";
export type OdbcLiteralType = "Time" | "Date" | "Timestamp" | "Guid";
export type OpenRowsetCosmosOptionKind = "Provider" | "Connection" | "Object" | "Credential" | "Server_Credential";
export type OptimizerHintKind = "Unspecified" | "HashGroup" | "OrderGroup" | "MergeJoin" | "HashJoin" | "LoopJoin" | "ConcatUnion" | "HashUnion" | "MergeUnion" | "KeepUnion" | "ForceOrder" | "RobustPlan" | "KeepPlan" | "KeepFixedPlan" | "ExpandViews" | "AlterColumnPlan" | "ShrinkDBPlan" | "BypassOptimizerQueue" | "UsePlan" | "ParameterizationSimple" | "ParameterizationForced" | "OptimizeCorrelatedUnionAll" | "Recompile" | "Fast" | "CheckConstraintsPlan" | "MaxRecursion" | "MaxDop" | "QueryTraceOn" | "CardinalityTunerLimit" | "TableHints" | "OptimizeFor" | "IgnoreNonClusteredColumnStoreIndex" | "MaxGrantPercent" | "MinGrantPercent" | "NoPerformanceSpool" | "Label";
export type OptionState = "NotSet" | "On" | "Off" | "Primary";
export type OptionType = "Label" | "LabelId" | "InformationType" | "InformationTypeId" | "Rank" | "Undefined";
export type PageVerifyDatabaseOptionKind = "None" | "Checksum" | "TornPageDetection";
export type ParameterModifier = "None" | "Output" | "ReadOnly";
export type ParameterStyle = "None" | "Sql" | "General";
export type ParameterlessCallType = "User" | "CurrentUser" | "SessionUser" | "SystemUser" | "CurrentTimestamp" | "CurrentDate";
export type PartitionFunctionRange = "NotSpecified" | "Left" | "Right";
export type PartitionTableOptionRange = "NotSpecified" | "Left" | "Right";
export type PartnerDatabaseOptionKind = "None" | "PartnerServer" | "Failover" | "ForceServiceAllowDataLoss" | "Off" | "Resume" | "SafetyFull" | "SafetyOff" | "Suspend" | "Timeout";
export type PayloadOptionKinds = "None" | "WebMethod" | "Batches" | "Wsdl" | "Sessions" | "LoginType" | "SessionTimeout" | "Database" | "Namespace" | "Schema" | "CharacterSet" | "HeaderLimit" | "SoapOptions" | "Authentication" | "Encryption" | "MessageForwarding" | "MessageForwardSize" | "ServiceBrokerOptions" | "Role" | "DatabaseMirroringOptions";
export type PermissionSetOption = "None" | "Safe" | "ExternalAccess" | "Unsafe";
export type PortTypes = "None" | "Clear" | "Ssl";
export type PredictRunTimeOptions = "ONNX";
export type PrincipalOptionKind = "CheckExpiration" | "CheckPolicy" | "Sid" | "DefaultDatabase" | "DefaultLanguage" | "Credential" | "Name" | "NoCredential" | "DefaultSchema" | "Login" | "Password" | "Type" | "Object_ID";
export type PrincipalType = "Null" | "Public" | "Identifier";
export type PrivilegeType80 = "All" | "Select" | "Insert" | "Delete" | "Update" | "Execute" | "References";
export type ProcedureOptionKind = "Encryption" | "Recompile" | "ExecuteAs" | "NativeCompilation" | "SchemaBinding";
export type ProcessAffinityType = "CpuAuto" | "Cpu" | "NumaNode";
export type QualifiedJoinType = "Inner" | "LeftOuter" | "RightOuter" | "FullOuter";
export type QueryStoreCapturePolicyOptionKind = "NONE" | "AUTO" | "ALL";
export type QueryStoreDesiredStateOptionKind = "Off" | "ReadOnly" | "ReadWrite";
export type QueryStoreOptionKind = "Desired_State" | "Query_Capture_Mode" | "Size_Based_Cleanup_Mode" | "Flush_Interval_Seconds" | "Interval_Length_Minutes" | "Current_Storage_Size_MB" | "Max_Plans_Per_Query" | "Stale_Query_Threshold_Days" | "Wait_Stats_Capture_Mode";
export type QueryStoreSizeCleanupPolicyOptionKind = "OFF" | "AUTO";
export type QueueOptionKind = "Status" | "Retention" | "ActivationStatus" | "ActivationProcedureName" | "ActivationMaxQueueReaders" | "ActivationExecuteAs" | "ActivationDrop" | "PoisonMessageHandlingStatus";
export type QuoteType = "NotQuoted" | "SquareBracket" | "DoubleQuote";
export type RaiseErrorOptions = "None" | "Log" | "NoWait" | "SetError";
export type Rank = "None" | "Low" | "Medium" | "High" | "Critical";
export type RdaTableOption = "Disable" | "Enable" | "OffWithoutDataRecovery";
export type RecoveryDatabaseOptionKind = "None" | "Full" | "BulkLogged" | "Simple";
export type RemoteDataArchiveDatabaseSettingKind = "Server" | "Credential" | "FederatedServiceAccount";
export type RemoteServiceBindingOptionKind = "User" | "Anonymous";
export type ResourcePoolAffinityType = "None" | "Scheduler" | "NumaNode";
export type ResourcePoolParameterType = "Unknown" | "MaxCpuPercent" | "MaxMemoryPercent" | "MinCpuPercent" | "MinMemoryPercent" | "CapCpuPercent" | "TargetMemoryPercent" | "MinIoPercent" | "MaxIoPercent" | "CapIoPercent" | "Affinity" | "MinIopsPerVolume" | "MaxIopsPerVolume";
export type RestoreOptionKind = "NoLog" | "Checksum" | "NoChecksum" | "ContinueAfterError" | "StopOnError" | "Unload" | "NoUnload" | "Rewind" | "NoRewind" | "NoRecovery" | "Recovery" | "Replace" | "Restart" | "Verbose" | "LoadHistory" | "DboOnly" | "RestrictedUser" | "Partial" | "Snapshot" | "KeepReplication" | "Online" | "CommitDifferentialBase" | "SnapshotImport" | "EnableBroker" | "NewBroker" | "ErrorBrokerConversations" | "Stats" | "File" | "StopAt" | "MediaName" | "MediaPassword" | "Password" | "BlockSize" | "BufferCount" | "MaxTransferSize" | "Standby" | "EnhancedIntegrity" | "SnapshotRestorePhase" | "Move" | "Stop" | "FileStream" | "KeepTemporalRetention";
export type RestoreStatementKind = "None" | "Database" | "TransactionLog" | "FileListOnly" | "VerifyOnly" | "LabelOnly" | "RewindOnly" | "HeaderOnly";
export type ResultSetType = "Inline" | "Object" | "Type" | "ForXml";
export type ResultSetsOptionKind = "Undefined" | "None" | "ResultSetsDefined";
export type RouteOptionKind = "Address" | "BrokerInstance" | "Lifetime" | "MirrorAddress" | "ServiceName";
export type SecondaryXmlIndexType = "NotSpecified" | "Path" | "Property" | "Value";
export type SecurityObjectKind = "NotSpecified" | "ApplicationRole" | "Assembly" | "AsymmetricKey" | "Certificate" | "Contract" | "Database" | "Endpoint" | "FullTextCatalog" | "Login" | "MessageType" | "Object" | "RemoteServiceBinding" | "Role" | "Route" | "Schema" | "Server" | "Service" | "SymmetricKey" | "Type" | "User" | "XmlSchemaCollection" | "FullTextStopList" | "SearchPropertyList" | "ServerRole" | "AvailabilityGroup" | "ExternalModel";
export type SecurityPolicyActionType = "Create" | "AlterPredicates" | "AlterState" | "AlterReplication";
export type SecurityPolicyOptionKind = "State" | "SchemaBinding";
export type SecurityPredicateActionType = "Create" | "Alter" | "Drop";
export type SecurityPredicateOperation = "All" | "AfterInsert" | "AfterUpdate" | "BeforeUpdate" | "BeforeDelete";
export type SecurityPredicateType = "Filter" | "Block";
export type SemanticFunctionType = "None" | "SemanticKeyPhraseTable" | "SemanticSimilarityTable" | "SemanticSimilarityDetailsTable";
export type SemanticIndexChunkOptionKind = "Type" | "Size" | "Overlap";
export type SemanticIndexSearchType = "NotSpecified" | "Vector" | "Fulltext" | "Hybrid";
export type SeparatorType = "NotSpecified" | "Dot" | "DoubleColon";
export type SequenceOptionKind = "As" | "MinValue" | "MaxValue" | "Cache" | "Cycle" | "Start" | "Increment" | "Restart";
export type ServiceBrokerOption = "None" | "EnableBroker" | "NewBroker" | "ErrorBrokerConversations";
export type SessionOptionKind = "EventRetention" | "MemoryPartition" | "MaxMemory" | "MaxEventSize" | "MaxDispatchLatency" | "TrackCausality" | "StartUpState";
export type SetOffsets = "None" | "Select" | "From" | "Order" | "Compute" | "Table" | "Procedure" | "Execute" | "Statement" | "Param";
export type SetOptions = "None" | "QuotedIdentifier" | "ConcatNullYieldsNull" | "CursorCloseOnCommit" | "ArithAbort" | "ArithIgnore" | "FmtOnly" | "NoCount" | "NoExec" | "NumericRoundAbort" | "ParseOnly" | "AnsiDefaults" | "AnsiNullDfltOff" | "AnsiNullDfltOn" | "AnsiNulls" | "AnsiPadding" | "AnsiWarnings" | "ForcePlan" | "ShowPlanAll" | "ShowPlanText" | "ImplicitTransactions" | "RemoteProcTransactions" | "XactAbort" | "DisableDefCnstChk" | "ShowPlanXml" | "NoBrowsetable";
export type SetStatisticsOptions = "None" | "IO" | "Profile" | "Time" | "Xml";
export type SignableElementKind = "NotSpecified" | "Object" | "Assembly" | "Database";
export type SimpleAlterFullTextIndexActionKind = "None" | "Enable" | "Disable" | "SetChangeTrackingManual" | "SetChangeTrackingAuto" | "SetChangeTrackingOff" | "StartFullPopulation" | "StartIncrementalPopulation" | "StartUpdatePopulation" | "StopPopulation" | "PausePopulation" | "ResumePopulation";
export type SoapMethodAction = "None" | "Add" | "Alter" | "Drop";
export type SoapMethodFormat = "NotSpecified" | "AllResults" | "RowsetsOnly" | "None";
export type SoapMethodSchemas = "NotSpecified" | "None" | "Standard" | "Default";
export type SortOrder = "NotSpecified" | "Ascending" | "Descending";
export type SparseColumnOption = "None" | "Sparse" | "ColumnSetForAllSparseColumns";
export type SpatialIndexingSchemeType = "None" | "GeometryGrid" | "GeographyGrid" | "GeometryAutoGrid" | "GeographyAutoGrid";
export type SqlDataTypeOption = "None" | "BigInt" | "Int" | "SmallInt" | "TinyInt" | "Bit" | "Decimal" | "Numeric" | "Money" | "SmallMoney" | "Float" | "Real" | "DateTime" | "SmallDateTime" | "Char" | "VarChar" | "Text" | "NChar" | "NVarChar" | "NText" | "Binary" | "VarBinary" | "Image" | "Cursor" | "Sql_Variant" | "Table" | "Timestamp" | "UniqueIdentifier" | "Date" | "Time" | "DateTime2" | "DateTimeOffset" | "Rowversion" | "Json" | "Vector";
export type SqlEngineType = "All" | "Standalone" | "SqlAzure";
export type SqlVersion = "Sql90" | "Sql80" | "Sql100" | "Sql110" | "Sql120" | "Sql130" | "Sql140" | "Sql150" | "Sql160" | "Sql170" | "SqlFabricDW" | "Sql180";
export type SqlVersionFlags = "None" | "TSql80" | "TSql90" | "TSql100" | "TSqlUnder110" | "TSql110" | "TSqlUnder120" | "TSql120" | "TSqlUnder130" | "TSql130" | "TSqlUnder140" | "TSql140" | "TSqlUnder150" | "TSql150" | "TSqlUnder160" | "TSql160" | "TSql170" | "TSqlFabricDW" | "TSqlUnder170" | "TSqlUnder180" | "TSql180AndAbove" | "TSql180" | "TSql170AndAbove" | "TSql160AndAbove" | "TSqlFabricDWAndAbove" | "TSql150AndAbove" | "TSql140AndAbove" | "TSql130AndAbove" | "TSql120AndAbove" | "TSql110AndAbove" | "TSql100AndAbove" | "TSql90AndAbove" | "TSqlAll";
export type StatisticsOptionKind = "FullScan" | "SamplePercent" | "SampleRows" | "StatsStream" | "NoRecompute" | "Resample" | "RowCount" | "PageCount" | "All" | "Columns" | "Index" | "Rows" | "Incremental" | "AutoDrop" | "PersistSamplePercent";
export type SubDmlFlags = "None" | "InsideSubDml" | "SelectNotForInsert" | "MergeUsing" | "UpdateDeleteFrom";
export type SubqueryComparisonPredicateType = "None" | "All" | "Any";
export type TSqlTokenType = "None" | "EndOfFile" | "Add" | "All" | "Alter" | "And" | "Any" | "As" | "Asc" | "Authorization" | "Backup" | "Begin" | "Between" | "Break" | "Browse" | "Bulk" | "By" | "Cascade" | "Case" | "Check" | "Checkpoint" | "Close" | "Clustered" | "Coalesce" | "Collate" | "Column" | "Commit" | "Compute" | "Constraint" | "Contains" | "ContainsTable" | "Continue" | "Convert" | "Create" | "Cross" | "Current" | "CurrentDate" | "CurrentTime" | "CurrentTimestamp" | "CurrentUser" | "Cursor" | "Database" | "Dbcc" | "Deallocate" | "Declare" | "Default" | "Delete" | "Deny" | "Desc" | "Distinct" | "Distributed" | "Double" | "Drop" | "Else" | "End" | "Errlvl" | "Escape" | "Except" | "Exec" | "Execute" | "Exists" | "Exit" | "Fetch" | "File" | "FillFactor" | "For" | "Foreign" | "FreeText" | "FreeTextTable" | "From" | "Full" | "Function" | "GoTo" | "Grant" | "Group" | "Having" | "HoldLock" | "Identity" | "IdentityInsert" | "IdentityColumn" | "If" | "In" | "Index" | "Inner" | "Insert" | "Intersect" | "Into" | "Is" | "Join" | "Key" | "Kill" | "Left" | "Like" | "LineNo" | "National" | "NoCheck" | "NonClustered" | "Not" | "Null" | "NullIf" | "Of" | "Off" | "Offsets" | "On" | "Open" | "OpenDataSource" | "OpenQuery" | "OpenRowSet" | "OpenXml" | "Option" | "Or" | "Order" | "Outer" | "Over" | "Percent" | "Plan" | "Primary" | "Print" | "Proc" | "Procedure" | "Public" | "Raiserror" | "Read" | "ReadText" | "Reconfigure" | "References" | "Replication" | "Restore" | "Restrict" | "Return" | "Revoke" | "Right" | "Rollback" | "RowCount" | "RowGuidColumn" | "Rule" | "Save" | "Schema" | "Select" | "SessionUser" | "Set" | "SetUser" | "Shutdown" | "Some" | "Statistics" | "SystemUser" | "Table" | "TextSize" | "Then" | "To" | "Top" | "Tran" | "Transaction" | "Trigger" | "Truncate" | "TSEqual" | "Union" | "Unique" | "Update" | "UpdateText" | "Use" | "User" | "Values" | "Varying" | "View" | "WaitFor" | "When" | "Where" | "While" | "With" | "WriteText" | "Disk" | "Precision" | "External" | "Revert" | "Pivot" | "Unpivot" | "TableSample" | "Dump" | "Load" | "Merge" | "StopList" | "SemanticKeyPhraseTable" | "SemanticSimilarityTable" | "SemanticSimilarityDetailsTable" | "TryConvert" | "Bang" | "PercentSign" | "Ampersand" | "LeftParenthesis" | "RightParenthesis" | "LeftCurly" | "RightCurly" | "Star" | "MultiplyEquals" | "Plus" | "Comma" | "Minus" | "Dot" | "Divide" | "Colon" | "DoubleColon" | "Semicolon" | "LessThan" | "EqualsSign" | "RightOuterJoin" | "GreaterThan" | "Circumflex" | "VerticalLine" | "Tilde" | "AddEquals" | "SubtractEquals" | "DivideEquals" | "ModEquals" | "BitwiseAndEquals" | "BitwiseOrEquals" | "BitwiseXorEquals" | "LeftShift" | "RightShift" | "Concat" | "ConcatEquals" | "Go" | "Label" | "Integer" | "Numeric" | "Real" | "HexLiteral" | "Money" | "SqlCommandIdentifier" | "PseudoColumn" | "DollarPartition" | "AsciiStringOrQuotedIdentifier" | "AsciiStringLiteral" | "UnicodeStringLiteral" | "Identifier" | "QuotedIdentifier" | "Variable" | "OdbcInitiator" | "ProcNameSemicolon" | "SingleLineComment" | "MultilineComment" | "WhiteSpace";
export type TableElementType = "NotSpecified" | "Constraint" | "Column" | "Index" | "Period";
export type TableHintKind = "None" | "FastFirstRow" | "HoldLock" | "NoLock" | "PagLock" | "ReadCommitted" | "ReadPast" | "ReadUncommitted" | "RepeatableRead" | "Rowlock" | "Serializable" | "TabLock" | "TabLockX" | "UpdLock" | "XLock" | "NoExpand" | "NoWait" | "ReadCommittedLock" | "KeepIdentity" | "KeepDefaults" | "IgnoreConstraints" | "IgnoreTriggers" | "ForceSeek" | "Index" | "SpatialWindowMaxCells" | "ForceScan" | "Snapshot";
export type TableOptionKind = "LockEscalation" | "FileStreamOn" | "DataCompression" | "FileTableDirectory" | "FileTableCollateFileName" | "FileTablePrimaryKeyConstraintName" | "FileTableStreamIdUniqueConstraintName" | "FileTableFullPathUniqueConstraintName" | "MemoryOptimized" | "Durability" | "RemoteDataArchive" | "Distribution" | "Partition" | "Location" | "DataRetention" | "XmlCompression";
export type TableSampleClauseOption = "NotSpecified" | "Percent" | "Rows";
export type TableSwitchOptionKind = "LowPriorityLockWait" | "TruncateTarget";
export type TemporalClauseType = "AsOf" | "FromTo" | "Between" | "ContainedIn" | "TemporalAll";
export type TemporalRetentionPeriodUnit = "Day" | "Days" | "Week" | "Weeks" | "Month" | "Months" | "Year" | "Years";
export type TimeUnit = "Seconds" | "Minutes" | "Hours" | "Days";
export type TokenKind = "Common" | "String" | "SqlCommandIdentifier" | "QuotedIdentifier" | "MultiLineComment";
export type TriggerActionType = "Delete" | "Insert" | "Update" | "Event" | "LogOn";
export type TriggerEnforcement = "Disable" | "Enable";
export type TriggerOptionKind = "Encryption" | "ExecuteAsClause" | "NativeCompile" | "SchemaBinding";
export type TriggerScope = "Normal" | "Database" | "AllServer";
export type TriggerType = "Unknown" | "For" | "After" | "InsteadOf";
export type UnaryExpressionType = "Positive" | "Negative" | "BitwiseNot";
export type UniqueRowFilter = "NotSpecified" | "All" | "Distinct";
export type UnqualifiedJoinType = "CrossJoin" | "CrossApply" | "OuterApply";
export type UserLoginOptionType = "Login" | "Certificate" | "AsymmetricKey" | "WithoutLogin" | "External";
export type UserType80 = "Null" | "Public" | "Users";
export type VectorIndexType = "DiskANN";
export type VectorMetricType = "Cosine" | "Dot" | "Euclidean";
export type ViewOptionKind = "Encryption" | "SchemaBinding" | "ViewMetadata" | "Distribution" | "ForAppend";
export type WaitForOption = "Delay" | "Time" | "Statement";
export type WindowDelimiterType = "UnboundedPreceding" | "ValuePreceding" | "CurrentRow" | "ValueFollowing" | "UnboundedFollowing";
export type WindowFrameType = "Rows" | "Range";
export type WorkloadClassifierOptionType = "WorkloadGroup" | "MemberName" | "WlmLabel" | "WlmContext" | "StartTime" | "EndTime" | "Importance";
export type WorkloadGroupParameterType = "Importance" | "RequestMaxMemoryGrantPercent" | "RequestMaxCpuTimeSec" | "RequestMemoryGrantTimeoutSec" | "MaxDop" | "GroupMaxRequests" | "GroupMinMemoryPercent" | "MinPercentageResource" | "CapPercentageResource" | "RequestMinResourceGrantPercent" | "RequestMaxResourceGrantPercent" | "QueryExecutionTimeoutSec";
export type XmlCompressionOptionState = "Off" | "On";
export type XmlDataTypeOption = "None" | "Content" | "Document";
export type XmlForClauseOptions = "None" | "Raw" | "Auto" | "Explicit" | "Path" | "XmlData" | "XmlSchema" | "Elements" | "ElementsXsiNil" | "ElementsAbsent" | "ElementsAll" | "BinaryBase64" | "Type" | "Root";

export interface TSqlFragmentBase {
  $type: string;
  startLine?: number;
  startColumn?: number;
  startOffset?: number;
  fragmentLength?: number;
}

export interface AIAnalyzeSentimentFunctionCall extends PrimaryExpression {
  $type: "AIAnalyzeSentimentFunctionCall";
  input?: ScalarExpression | null;
}

export interface AIClassifyFunctionCall extends PrimaryExpression {
  $type: "AIClassifyFunctionCall";
  input?: ScalarExpression | null;
  labels?: ScalarExpression[];
}

export interface AIExtractFunctionCall extends PrimaryExpression {
  $type: "AIExtractFunctionCall";
  input?: ScalarExpression | null;
  labels?: ScalarExpression[];
}

export interface AIFixGrammarFunctionCall extends PrimaryExpression {
  $type: "AIFixGrammarFunctionCall";
  input?: ScalarExpression | null;
}

export interface AIGenerateChunksTableReference extends TableReferenceWithAlias {
  $type: "AIGenerateChunksTableReference";
  source?: ScalarExpression | null;
  chunkType?: Identifier | null;
}

export interface AIGenerateEmbeddingsFunctionCall extends PrimaryExpression {
  $type: "AIGenerateEmbeddingsFunctionCall";
  input?: ScalarExpression | null;
  modelName?: SchemaObjectName | null;
  optionalParameters?: ScalarExpression | null;
}

export interface AIGenerateFixedChunksTableReference extends Omit<AIGenerateChunksTableReference, "$type"> {
  $type: "AIGenerateFixedChunksTableReference";
  chunkSize?: ScalarExpression | null;
  overlap?: ScalarExpression | null;
  enableChunkSetId?: ScalarExpression | null;
}

export interface AIGenerateResponseFunctionCall extends PrimaryExpression {
  $type: "AIGenerateResponseFunctionCall";
  promptPart1?: ScalarExpression | null;
  promptPart2?: ScalarExpression | null;
}

export interface AISummarizeFunctionCall extends PrimaryExpression {
  $type: "AISummarizeFunctionCall";
  input?: ScalarExpression | null;
}

export interface AITranslateFunctionCall extends PrimaryExpression {
  $type: "AITranslateFunctionCall";
  input?: ScalarExpression | null;
  language?: ScalarExpression | null;
}

export interface AcceleratedDatabaseRecoveryDatabaseOption extends Omit<DatabaseOption, "$type"> {
  $type: "AcceleratedDatabaseRecoveryDatabaseOption";
  optionState?: OptionState;
}

export interface AdHocDataSource extends TSqlFragmentBase {
  $type: "AdHocDataSource";
  providerName?: StringLiteral | null;
  initString?: StringLiteral | null;
}

export interface AdHocTableReference extends TableReferenceWithAlias {
  $type: "AdHocTableReference";
  dataSource?: AdHocDataSource | null;
  object?: SchemaObjectNameOrValueExpression | null;
}

export interface AddAlterFullTextIndexAction extends AlterFullTextIndexAction {
  $type: "AddAlterFullTextIndexAction";
  columns?: FullTextIndexColumn[];
  withNoPopulation?: boolean;
}

export interface AddFileSpec extends TSqlFragmentBase {
  $type: "AddFileSpec";
  file?: ScalarExpression | null;
  fileName?: Literal | null;
}

export interface AddMemberAlterRoleAction extends AlterRoleAction {
  $type: "AddMemberAlterRoleAction";
  member?: Identifier | null;
}

export interface AddSearchPropertyListAction extends SearchPropertyListAction {
  $type: "AddSearchPropertyListAction";
  propertyName?: StringLiteral | null;
  guid?: StringLiteral | null;
  id?: IntegerLiteral | null;
  description?: StringLiteral | null;
}

export interface AddSensitivityClassificationStatement extends SensitivityClassificationStatement {
  $type: "AddSensitivityClassificationStatement";
  options?: SensitivityClassificationOption[];
}

export interface AddSignatureStatement extends SignatureStatementBase {
  $type: "AddSignatureStatement";
}

export interface AlgorithmKeyOption extends KeyOption {
  $type: "AlgorithmKeyOption";
  algorithm?: EncryptionAlgorithm;
}

export interface AlterApplicationRoleStatement extends ApplicationRoleStatement {
  $type: "AlterApplicationRoleStatement";
}

export interface AlterAssemblyStatement extends AssemblyStatement {
  $type: "AlterAssemblyStatement";
  dropFiles?: Literal[];
  isDropAll?: boolean;
  addFiles?: AddFileSpec[];
}

export interface AlterAsymmetricKeyStatement extends TSqlStatement {
  $type: "AlterAsymmetricKeyStatement";
  name?: Identifier | null;
  attestedBy?: Literal | null;
  kind?: AlterCertificateStatementKind;
  encryptionPassword?: Literal | null;
  decryptionPassword?: Literal | null;
}

export interface AlterAuthorizationStatement extends TSqlStatement {
  $type: "AlterAuthorizationStatement";
  securityTargetObject?: SecurityTargetObject | null;
  toSchemaOwner?: boolean;
  principalName?: Identifier | null;
}

export interface AlterAvailabilityGroupAction extends TSqlFragmentBase {
  $type: "AlterAvailabilityGroupAction";
  actionType?: AlterAvailabilityGroupActionType;
}

export interface AlterAvailabilityGroupFailoverAction extends Omit<AlterAvailabilityGroupAction, "$type"> {
  $type: "AlterAvailabilityGroupFailoverAction";
  options?: AlterAvailabilityGroupFailoverOption[];
}

export interface AlterAvailabilityGroupFailoverOption extends TSqlFragmentBase {
  $type: "AlterAvailabilityGroupFailoverOption";
  optionKind?: FailoverActionOptionKind;
  value?: Literal | null;
}

export interface AlterAvailabilityGroupStatement extends AvailabilityGroupStatement {
  $type: "AlterAvailabilityGroupStatement";
  alterAvailabilityGroupStatementType?: AlterAvailabilityGroupStatementType;
  action?: AlterAvailabilityGroupAction | null;
}

export interface AlterBrokerPriorityStatement extends BrokerPriorityStatement {
  $type: "AlterBrokerPriorityStatement";
}

export interface AlterCertificateStatement extends CertificateStatementBase {
  $type: "AlterCertificateStatement";
  kind?: AlterCertificateStatementKind;
  attestedBy?: Literal | null;
}

export interface AlterColumnAlterFullTextIndexAction extends AlterFullTextIndexAction {
  $type: "AlterColumnAlterFullTextIndexAction";
  column?: FullTextIndexColumn | null;
  withNoPopulation?: boolean;
}

export interface AlterColumnEncryptionKeyStatement extends ColumnEncryptionKeyStatement {
  $type: "AlterColumnEncryptionKeyStatement";
  alterType?: ColumnEncryptionKeyAlterType;
}

export interface AlterCreateEndpointStatementBase extends TSqlStatement {
  name?: Identifier | null;
  state?: EndpointState;
  affinity?: EndpointAffinity | null;
  protocol?: EndpointProtocol;
  protocolOptions?: EndpointProtocolOption[];
  endpointType?: EndpointType;
  payloadOptions?: PayloadOption[];
}

export interface AlterCreateServiceStatementBase extends TSqlStatement {
  name?: Identifier | null;
  queueName?: SchemaObjectName | null;
  serviceContracts?: ServiceContract[];
}

export interface AlterCredentialStatement extends CredentialStatement {
  $type: "AlterCredentialStatement";
}

export interface AlterCryptographicProviderStatement extends TSqlStatement {
  $type: "AlterCryptographicProviderStatement";
  name?: Identifier | null;
  option?: EnableDisableOptionType;
  file?: Literal | null;
}

export interface AlterDatabaseAddFileGroupStatement extends AlterDatabaseStatement {
  $type: "AlterDatabaseAddFileGroupStatement";
  fileGroup?: Identifier | null;
  containsFileStream?: boolean;
  containsMemoryOptimizedData?: boolean;
}

export interface AlterDatabaseAddFileStatement extends AlterDatabaseStatement {
  $type: "AlterDatabaseAddFileStatement";
  fileDeclarations?: FileDeclaration[];
  fileGroup?: Identifier | null;
  isLog?: boolean;
}

export interface AlterDatabaseAuditSpecificationStatement extends AuditSpecificationStatement {
  $type: "AlterDatabaseAuditSpecificationStatement";
}

export interface AlterDatabaseCollateStatement extends AlterDatabaseStatement {
  $type: "AlterDatabaseCollateStatement";
  collation?: Identifier | null;
}

export interface AlterDatabaseEncryptionKeyStatement extends DatabaseEncryptionKeyStatement {
  $type: "AlterDatabaseEncryptionKeyStatement";
  regenerate?: boolean;
}

export interface AlterDatabaseModifyFileGroupStatement extends AlterDatabaseStatement {
  $type: "AlterDatabaseModifyFileGroupStatement";
  fileGroup?: Identifier | null;
  newFileGroupName?: Identifier | null;
  makeDefault?: boolean;
  updatabilityOption?: ModifyFileGroupOption;
  termination?: AlterDatabaseTermination | null;
}

export interface AlterDatabaseModifyFileStatement extends AlterDatabaseStatement {
  $type: "AlterDatabaseModifyFileStatement";
  fileDeclaration?: FileDeclaration | null;
}

export interface AlterDatabaseModifyNameStatement extends AlterDatabaseStatement {
  $type: "AlterDatabaseModifyNameStatement";
  newDatabaseName?: Identifier | null;
}

export interface AlterDatabasePerformCutoverStatement extends AlterDatabaseStatement {
  $type: "AlterDatabasePerformCutoverStatement";
}

export interface AlterDatabaseRebuildLogStatement extends AlterDatabaseStatement {
  $type: "AlterDatabaseRebuildLogStatement";
  fileDeclaration?: FileDeclaration | null;
}

export interface AlterDatabaseRemoveFileGroupStatement extends AlterDatabaseStatement {
  $type: "AlterDatabaseRemoveFileGroupStatement";
  fileGroup?: Identifier | null;
}

export interface AlterDatabaseRemoveFileStatement extends AlterDatabaseStatement {
  $type: "AlterDatabaseRemoveFileStatement";
  file?: Identifier | null;
}

export interface AlterDatabaseScopedConfigurationClearStatement extends AlterDatabaseScopedConfigurationStatement {
  $type: "AlterDatabaseScopedConfigurationClearStatement";
  option?: DatabaseConfigurationClearOption | null;
}

export interface AlterDatabaseScopedConfigurationSetStatement extends AlterDatabaseScopedConfigurationStatement {
  $type: "AlterDatabaseScopedConfigurationSetStatement";
  option?: DatabaseConfigurationSetOption | null;
}

export interface AlterDatabaseScopedConfigurationStatement extends TSqlStatement {
  secondary?: boolean;
}

export interface AlterDatabaseSetStatement extends AlterDatabaseStatement {
  $type: "AlterDatabaseSetStatement";
  termination?: AlterDatabaseTermination | null;
  options?: DatabaseOption[];
  withManualCutover?: boolean;
}

export interface AlterDatabaseStatement extends TSqlStatement {
  databaseName?: Identifier | null;
  useCurrent?: boolean;
}

export interface AlterDatabaseTermination extends TSqlFragmentBase {
  $type: "AlterDatabaseTermination";
  immediateRollback?: boolean;
  rollbackAfter?: Literal | null;
  noWait?: boolean;
}

export interface AlterEndpointStatement extends AlterCreateEndpointStatementBase {
  $type: "AlterEndpointStatement";
}

export interface AlterEventSessionStatement extends Omit<EventSessionStatement, "$type"> {
  $type: "AlterEventSessionStatement";
  statementType?: AlterEventSessionStatementType;
  dropEventDeclarations?: EventSessionObjectName[];
  dropTargetDeclarations?: EventSessionObjectName[];
}

export interface AlterExternalDataSourceStatement extends ExternalDataSourceStatement {
  $type: "AlterExternalDataSourceStatement";
  previousPushDownOption?: ExternalDataSourcePushdownOption;
}

export interface AlterExternalFunctionStatement extends ExternalFunctionStatement {
  $type: "AlterExternalFunctionStatement";
}

export interface AlterExternalLanguageStatement extends ExternalLanguageStatement {
  $type: "AlterExternalLanguageStatement";
  platform?: Identifier | null;
  operation?: Identifier | null;
  owner?: Identifier | null;
}

export interface AlterExternalLibraryStatement extends ExternalLibraryStatement {
  $type: "AlterExternalLibraryStatement";
  owner?: Identifier | null;
}

export interface AlterExternalModelStatement extends ExternalModelStatement {
  $type: "AlterExternalModelStatement";
}

export interface AlterExternalResourcePoolStatement extends Omit<ExternalResourcePoolStatement, "$type"> {
  $type: "AlterExternalResourcePoolStatement";
}

export interface AlterFederationStatement extends TSqlStatement {
  $type: "AlterFederationStatement";
  name?: Identifier | null;
  kind?: AlterFederationKind;
  distributionName?: Identifier | null;
  boundary?: ScalarExpression | null;
}

export interface AlterFullTextCatalogStatement extends FullTextCatalogStatement {
  $type: "AlterFullTextCatalogStatement";
  action?: AlterFullTextCatalogAction;
}

export interface AlterFullTextIndexAction extends TSqlFragmentBase {
}

export interface AlterFullTextIndexStatement extends TSqlStatement {
  $type: "AlterFullTextIndexStatement";
  onName?: SchemaObjectName | null;
  action?: AlterFullTextIndexAction | null;
}

export interface AlterFullTextStopListStatement extends TSqlStatement {
  $type: "AlterFullTextStopListStatement";
  name?: Identifier | null;
  action?: FullTextStopListAction | null;
}

export interface AlterFunctionStatement extends FunctionStatementBody {
  $type: "AlterFunctionStatement";
}

export interface AlterIndexStatement extends IndexStatement {
  $type: "AlterIndexStatement";
  all?: boolean;
  alterIndexType?: AlterIndexType;
  partition?: PartitionSpecifier | null;
  promotedPaths?: SelectiveXmlIndexPromotedPath[];
  xmlNamespaces?: XmlNamespaces | null;
}

export interface AlterLoginAddDropCredentialStatement extends AlterLoginStatement {
  $type: "AlterLoginAddDropCredentialStatement";
  isAdd?: boolean;
  credentialName?: Identifier | null;
}

export interface AlterLoginEnableDisableStatement extends AlterLoginStatement {
  $type: "AlterLoginEnableDisableStatement";
  isEnable?: boolean;
}

export interface AlterLoginOptionsStatement extends AlterLoginStatement {
  $type: "AlterLoginOptionsStatement";
  options?: PrincipalOption[];
}

export interface AlterLoginStatement extends TSqlStatement {
  name?: Identifier | null;
}

export interface AlterMasterKeyStatement extends MasterKeyStatement {
  $type: "AlterMasterKeyStatement";
  option?: AlterMasterKeyOption;
}

export interface AlterMessageTypeStatement extends MessageTypeStatementBase {
  $type: "AlterMessageTypeStatement";
}

export interface AlterPartitionFunctionStatement extends TSqlStatement {
  $type: "AlterPartitionFunctionStatement";
  name?: Identifier | null;
  isSplit?: boolean;
  boundary?: ScalarExpression | null;
}

export interface AlterPartitionSchemeStatement extends TSqlStatement {
  $type: "AlterPartitionSchemeStatement";
  name?: Identifier | null;
  fileGroup?: IdentifierOrValueExpression | null;
}

export interface AlterProcedureStatement extends ProcedureStatementBody {
  $type: "AlterProcedureStatement";
}

export interface AlterQueueStatement extends QueueStatement {
  $type: "AlterQueueStatement";
}

export interface AlterRemoteServiceBindingStatement extends RemoteServiceBindingStatementBase {
  $type: "AlterRemoteServiceBindingStatement";
}

export interface AlterResourceGovernorStatement extends TSqlStatement {
  $type: "AlterResourceGovernorStatement";
  command?: AlterResourceGovernorCommandType;
  classifierFunction?: SchemaObjectName | null;
}

export interface AlterResourcePoolStatement extends Omit<ResourcePoolStatement, "$type"> {
  $type: "AlterResourcePoolStatement";
}

export interface AlterRoleAction extends TSqlFragmentBase {
}

export interface AlterRoleStatement extends RoleStatement {
  $type: "AlterRoleStatement";
  action?: AlterRoleAction | null;
}

export interface AlterRouteStatement extends RouteStatement {
  $type: "AlterRouteStatement";
}

export interface AlterSchemaStatement extends TSqlStatement {
  $type: "AlterSchemaStatement";
  name?: Identifier | null;
  objectName?: SchemaObjectName | null;
  objectKind?: SecurityObjectKind;
}

export interface AlterSearchPropertyListStatement extends TSqlStatement {
  $type: "AlterSearchPropertyListStatement";
  name?: Identifier | null;
  action?: SearchPropertyListAction | null;
}

export interface AlterSecurityPolicyStatement extends SecurityPolicyStatement {
  $type: "AlterSecurityPolicyStatement";
}

export interface AlterSequenceStatement extends SequenceStatement {
  $type: "AlterSequenceStatement";
}

export interface AlterServerAuditSpecificationStatement extends AuditSpecificationStatement {
  $type: "AlterServerAuditSpecificationStatement";
}

export interface AlterServerAuditStatement extends ServerAuditStatement {
  $type: "AlterServerAuditStatement";
  newName?: Identifier | null;
  removeWhere?: boolean;
}

export interface AlterServerConfigurationBufferPoolExtensionContainerOption extends Omit<AlterServerConfigurationBufferPoolExtensionOption, "$type"> {
  $type: "AlterServerConfigurationBufferPoolExtensionContainerOption";
  suboptions?: AlterServerConfigurationBufferPoolExtensionOption[];
}

export interface AlterServerConfigurationBufferPoolExtensionOption extends TSqlFragmentBase {
  $type: "AlterServerConfigurationBufferPoolExtensionOption";
  optionKind?: AlterServerConfigurationBufferPoolExtensionOptionKind;
  optionValue?: OptionValue | null;
}

export interface AlterServerConfigurationBufferPoolExtensionSizeOption extends Omit<AlterServerConfigurationBufferPoolExtensionOption, "$type"> {
  $type: "AlterServerConfigurationBufferPoolExtensionSizeOption";
  sizeUnit?: MemoryUnit;
}

export interface AlterServerConfigurationDiagnosticsLogMaxSizeOption extends Omit<AlterServerConfigurationDiagnosticsLogOption, "$type"> {
  $type: "AlterServerConfigurationDiagnosticsLogMaxSizeOption";
  sizeUnit?: MemoryUnit;
}

export interface AlterServerConfigurationDiagnosticsLogOption extends TSqlFragmentBase {
  $type: "AlterServerConfigurationDiagnosticsLogOption";
  optionKind?: AlterServerConfigurationDiagnosticsLogOptionKind;
  optionValue?: OptionValue | null;
}

export interface AlterServerConfigurationExternalAuthenticationContainerOption extends Omit<AlterServerConfigurationExternalAuthenticationOption, "$type"> {
  $type: "AlterServerConfigurationExternalAuthenticationContainerOption";
  suboptions?: AlterServerConfigurationExternalAuthenticationOption[];
}

export interface AlterServerConfigurationExternalAuthenticationOption extends TSqlFragmentBase {
  $type: "AlterServerConfigurationExternalAuthenticationOption";
  optionKind?: AlterServerConfigurationExternalAuthenticationOptionKind;
  optionValue?: OptionValue | null;
}

export interface AlterServerConfigurationFailoverClusterPropertyOption extends TSqlFragmentBase {
  $type: "AlterServerConfigurationFailoverClusterPropertyOption";
  optionKind?: AlterServerConfigurationFailoverClusterPropertyOptionKind;
  optionValue?: OptionValue | null;
}

export interface AlterServerConfigurationHadrClusterOption extends TSqlFragmentBase {
  $type: "AlterServerConfigurationHadrClusterOption";
  optionKind?: AlterServerConfigurationHadrClusterOptionKind;
  optionValue?: OptionValue | null;
  isLocal?: boolean;
}

export interface AlterServerConfigurationSetBufferPoolExtensionStatement extends TSqlStatement {
  $type: "AlterServerConfigurationSetBufferPoolExtensionStatement";
  options?: AlterServerConfigurationBufferPoolExtensionOption[];
}

export interface AlterServerConfigurationSetDiagnosticsLogStatement extends TSqlStatement {
  $type: "AlterServerConfigurationSetDiagnosticsLogStatement";
  options?: AlterServerConfigurationDiagnosticsLogOption[];
}

export interface AlterServerConfigurationSetExternalAuthenticationStatement extends TSqlStatement {
  $type: "AlterServerConfigurationSetExternalAuthenticationStatement";
  options?: AlterServerConfigurationExternalAuthenticationOption[];
}

export interface AlterServerConfigurationSetFailoverClusterPropertyStatement extends TSqlStatement {
  $type: "AlterServerConfigurationSetFailoverClusterPropertyStatement";
  options?: AlterServerConfigurationFailoverClusterPropertyOption[];
}

export interface AlterServerConfigurationSetHadrClusterStatement extends TSqlStatement {
  $type: "AlterServerConfigurationSetHadrClusterStatement";
  options?: AlterServerConfigurationHadrClusterOption[];
}

export interface AlterServerConfigurationSetSoftNumaStatement extends TSqlStatement {
  $type: "AlterServerConfigurationSetSoftNumaStatement";
  options?: AlterServerConfigurationSoftNumaOption[];
}

export interface AlterServerConfigurationSoftNumaOption extends TSqlFragmentBase {
  $type: "AlterServerConfigurationSoftNumaOption";
  optionKind?: AlterServerConfigurationSoftNumaOptionKind;
  optionValue?: OptionValue | null;
}

export interface AlterServerConfigurationStatement extends TSqlStatement {
  $type: "AlterServerConfigurationStatement";
  processAffinity?: ProcessAffinityType;
  processAffinityRanges?: ProcessAffinityRange[];
}

export interface AlterServerRoleStatement extends Omit<AlterRoleStatement, "$type"> {
  $type: "AlterServerRoleStatement";
}

export interface AlterServiceMasterKeyStatement extends TSqlStatement {
  $type: "AlterServiceMasterKeyStatement";
  account?: Literal | null;
  password?: Literal | null;
  kind?: AlterServiceMasterKeyOption;
}

export interface AlterServiceStatement extends AlterCreateServiceStatementBase {
  $type: "AlterServiceStatement";
}

export interface AlterSymmetricKeyStatement extends SymmetricKeyStatement {
  $type: "AlterSymmetricKeyStatement";
  isAdd?: boolean;
}

export interface AlterTableAddClusterByStatement extends AlterTableStatement {
  $type: "AlterTableAddClusterByStatement";
  clusterByOption?: ClusterByTableOption | null;
}

export interface AlterTableAddTableElementStatement extends AlterTableStatement {
  $type: "AlterTableAddTableElementStatement";
  existingRowsCheckEnforcement?: ConstraintEnforcement;
  definition?: TableDefinition | null;
}

export interface AlterTableAlterColumnStatement extends AlterTableStatement {
  $type: "AlterTableAlterColumnStatement";
  columnIdentifier?: Identifier | null;
  dataType?: DataTypeReference | null;
  alterTableAlterColumnOption?: AlterTableAlterColumnOption;
  storageOptions?: ColumnStorageOptions | null;
  options?: IndexOption[];
  generatedAlways?: unknown;
  isHidden?: boolean;
  encryption?: ColumnEncryptionDefinition | null;
  collation?: Identifier | null;
  isMasked?: boolean;
  maskingFunction?: StringLiteral | null;
}

export interface AlterTableAlterIndexStatement extends AlterTableStatement {
  $type: "AlterTableAlterIndexStatement";
  indexIdentifier?: Identifier | null;
  alterIndexType?: AlterIndexType;
  indexOptions?: IndexOption[];
}

export interface AlterTableAlterPartitionStatement extends AlterTableStatement {
  $type: "AlterTableAlterPartitionStatement";
  boundaryValue?: ScalarExpression | null;
  isSplit?: boolean;
}

export interface AlterTableChangeTrackingModificationStatement extends AlterTableStatement {
  $type: "AlterTableChangeTrackingModificationStatement";
  isEnable?: boolean;
  trackColumnsUpdated?: OptionState;
}

export interface AlterTableConstraintModificationStatement extends AlterTableStatement {
  $type: "AlterTableConstraintModificationStatement";
  existingRowsCheckEnforcement?: ConstraintEnforcement;
  constraintEnforcement?: ConstraintEnforcement;
  all?: boolean;
  constraintNames?: Identifier[];
}

export interface AlterTableDropTableElement extends TSqlFragmentBase {
  $type: "AlterTableDropTableElement";
  tableElementType?: TableElementType;
  name?: Identifier | null;
  dropClusteredConstraintOptions?: DropClusteredConstraintOption[];
  isIfExists?: boolean;
}

export interface AlterTableDropTableElementStatement extends AlterTableStatement {
  $type: "AlterTableDropTableElementStatement";
  alterTableDropTableElements?: AlterTableDropTableElement[];
}

export interface AlterTableFileTableNamespaceStatement extends AlterTableStatement {
  $type: "AlterTableFileTableNamespaceStatement";
  isEnable?: boolean;
}

export interface AlterTableRebuildStatement extends AlterTableStatement {
  $type: "AlterTableRebuildStatement";
  partition?: PartitionSpecifier | null;
  indexOptions?: IndexOption[];
}

export interface AlterTableSetStatement extends AlterTableStatement {
  $type: "AlterTableSetStatement";
  options?: TableOption[];
}

export interface AlterTableStatement extends TSqlStatement {
  schemaObjectName?: SchemaObjectName | null;
}

export interface AlterTableSwitchStatement extends AlterTableStatement {
  $type: "AlterTableSwitchStatement";
  sourcePartitionNumber?: ScalarExpression | null;
  targetPartitionNumber?: ScalarExpression | null;
  targetTable?: SchemaObjectName | null;
  options?: TableSwitchOption[];
}

export interface AlterTableTriggerModificationStatement extends AlterTableStatement {
  $type: "AlterTableTriggerModificationStatement";
  triggerEnforcement?: TriggerEnforcement;
  all?: boolean;
  triggerNames?: Identifier[];
}

export interface AlterTriggerStatement extends TriggerStatementBody {
  $type: "AlterTriggerStatement";
}

export interface AlterUserStatement extends UserStatement {
  $type: "AlterUserStatement";
}

export interface AlterViewStatement extends ViewStatementBody {
  $type: "AlterViewStatement";
  isRebuild?: boolean;
  isDisable?: boolean;
}

export interface AlterWorkloadGroupStatement extends WorkloadGroupStatement {
  $type: "AlterWorkloadGroupStatement";
}

export interface AlterXmlSchemaCollectionStatement extends TSqlStatement {
  $type: "AlterXmlSchemaCollectionStatement";
  name?: SchemaObjectName | null;
  expression?: ScalarExpression | null;
}

export interface ApplicationRoleOption extends TSqlFragmentBase {
  $type: "ApplicationRoleOption";
  optionKind?: ApplicationRoleOptionKind;
  value?: IdentifierOrValueExpression | null;
}

export interface ApplicationRoleStatement extends TSqlStatement {
  name?: Identifier | null;
  applicationRoleOptions?: ApplicationRoleOption[];
}

export interface AssemblyEncryptionSource extends EncryptionSource {
  $type: "AssemblyEncryptionSource";
  assembly?: Identifier | null;
}

export interface AssemblyName extends TSqlFragmentBase {
  $type: "AssemblyName";
  name?: Identifier | null;
  className?: Identifier | null;
}

export interface AssemblyOption extends TSqlFragmentBase {
  $type: "AssemblyOption";
  optionKind?: AssemblyOptionKind;
}

export interface AssemblyStatement extends TSqlStatement {
  name?: Identifier | null;
  parameters?: ScalarExpression[];
  options?: AssemblyOption[];
}

export interface AssignmentSetClause extends SetClause {
  $type: "AssignmentSetClause";
  variable?: VariableReference | null;
  column?: ColumnReferenceExpression | null;
  newValue?: ScalarExpression | null;
  assignmentKind?: AssignmentKind;
}

export interface AsymmetricKeyCreateLoginSource extends CreateLoginSource {
  $type: "AsymmetricKeyCreateLoginSource";
  key?: Identifier | null;
  credential?: Identifier | null;
}

export interface AtTimeZoneCall extends PrimaryExpression {
  $type: "AtTimeZoneCall";
  dateValue?: ScalarExpression | null;
  timeZone?: ScalarExpression | null;
}

export interface AtomicBlockOption extends TSqlFragmentBase {
  optionKind?: AtomicBlockOptionKind;
}

export interface AuditActionGroupReference extends AuditSpecificationDetail {
  $type: "AuditActionGroupReference";
  group?: AuditActionGroup;
}

export interface AuditActionSpecification extends AuditSpecificationDetail {
  $type: "AuditActionSpecification";
  actions?: DatabaseAuditAction[];
  principals?: SecurityPrincipal[];
  targetObject?: SecurityTargetObject | null;
}

export interface AuditGuidAuditOption extends AuditOption {
  $type: "AuditGuidAuditOption";
  guid?: Literal | null;
}

export interface AuditOption extends TSqlFragmentBase {
  optionKind?: AuditOptionKind;
}

export interface AuditSpecificationDetail extends TSqlFragmentBase {
}

export interface AuditSpecificationPart extends TSqlFragmentBase {
  $type: "AuditSpecificationPart";
  isDrop?: boolean;
  details?: AuditSpecificationDetail | null;
}

export interface AuditSpecificationStatement extends TSqlStatement {
  auditState?: OptionState;
  parts?: AuditSpecificationPart[];
  specificationName?: Identifier | null;
  auditName?: Identifier | null;
}

export interface AuditTarget extends TSqlFragmentBase {
  $type: "AuditTarget";
  targetKind?: AuditTargetKind;
  targetOptions?: AuditTargetOption[];
}

export interface AuditTargetOption extends TSqlFragmentBase {
  optionKind?: AuditTargetOptionKind;
}

export interface AuthenticationEndpointProtocolOption extends EndpointProtocolOption {
  $type: "AuthenticationEndpointProtocolOption";
  authenticationTypes?: AuthenticationTypes;
}

export interface AuthenticationPayloadOption extends PayloadOption {
  $type: "AuthenticationPayloadOption";
  protocol?: AuthenticationProtocol;
  certificate?: Identifier | null;
  tryCertificateFirst?: boolean;
}

export interface AutoCleanupChangeTrackingOptionDetail extends ChangeTrackingOptionDetail {
  $type: "AutoCleanupChangeTrackingOptionDetail";
  isOn?: boolean;
}

export interface AutoCreateStatisticsDatabaseOption extends Omit<OnOffDatabaseOption, "$type"> {
  $type: "AutoCreateStatisticsDatabaseOption";
  hasIncremental?: boolean;
  incrementalState?: OptionState;
}

export interface AutomaticTuningCreateIndexOption extends Omit<AutomaticTuningOption, "$type"> {
  $type: "AutomaticTuningCreateIndexOption";
}

export interface AutomaticTuningDatabaseOption extends Omit<DatabaseOption, "$type"> {
  $type: "AutomaticTuningDatabaseOption";
  automaticTuningState?: AutomaticTuningState;
  options?: AutomaticTuningOption[];
}

export interface AutomaticTuningDropIndexOption extends Omit<AutomaticTuningOption, "$type"> {
  $type: "AutomaticTuningDropIndexOption";
}

export interface AutomaticTuningForceLastGoodPlanOption extends Omit<AutomaticTuningOption, "$type"> {
  $type: "AutomaticTuningForceLastGoodPlanOption";
}

export interface AutomaticTuningMaintainIndexOption extends Omit<AutomaticTuningOption, "$type"> {
  $type: "AutomaticTuningMaintainIndexOption";
}

export interface AutomaticTuningOption extends TSqlFragmentBase {
  $type: "AutomaticTuningOption";
  optionKind?: AutomaticTuningOptionKind;
  value?: AutomaticTuningOptionState;
}

export interface AvailabilityGroupOption extends TSqlFragmentBase {
  optionKind?: AvailabilityGroupOptionKind;
}

export interface AvailabilityGroupStatement extends TSqlStatement {
  name?: Identifier | null;
  options?: AvailabilityGroupOption[];
  databases?: Identifier[];
  replicas?: AvailabilityReplica[];
}

export interface AvailabilityModeReplicaOption extends AvailabilityReplicaOption {
  $type: "AvailabilityModeReplicaOption";
  value?: AvailabilityModeOptionKind;
}

export interface AvailabilityReplica extends TSqlFragmentBase {
  $type: "AvailabilityReplica";
  serverName?: StringLiteral | null;
  options?: AvailabilityReplicaOption[];
}

export interface AvailabilityReplicaOption extends TSqlFragmentBase {
  optionKind?: AvailabilityReplicaOptionKind;
}

export interface BackupCertificateStatement extends CertificateStatementBase {
  $type: "BackupCertificateStatement";
  file?: Literal | null;
}

export interface BackupDatabaseStatement extends BackupStatement {
  $type: "BackupDatabaseStatement";
  files?: BackupRestoreFileInfo[];
}

export interface BackupEncryptionOption extends Omit<BackupOption, "$type"> {
  $type: "BackupEncryptionOption";
  algorithm?: EncryptionAlgorithm;
  encryptor?: CryptoMechanism | null;
}

export interface BackupMasterKeyStatement extends BackupRestoreMasterKeyStatementBase {
  $type: "BackupMasterKeyStatement";
}

export interface BackupOption extends TSqlFragmentBase {
  $type: "BackupOption";
  optionKind?: BackupOptionKind;
  value?: ScalarExpression | null;
}

export interface BackupRestoreFileInfo extends TSqlFragmentBase {
  $type: "BackupRestoreFileInfo";
  items?: ValueExpression[];
  itemKind?: BackupRestoreItemKind;
}

export interface BackupRestoreMasterKeyStatementBase extends TSqlStatement {
  file?: Literal | null;
  password?: Literal | null;
}

export interface BackupServiceMasterKeyStatement extends BackupRestoreMasterKeyStatementBase {
  $type: "BackupServiceMasterKeyStatement";
}

export interface BackupStatement extends TSqlStatement {
  databaseName?: IdentifierOrValueExpression | null;
  options?: BackupOption[];
  mirrorToClauses?: MirrorToClause[];
  devices?: DeviceInfo[];
}

export interface BackupTransactionLogStatement extends BackupStatement {
  $type: "BackupTransactionLogStatement";
}

export interface BackwardsCompatibleDropIndexClause extends DropIndexClauseBase {
  $type: "BackwardsCompatibleDropIndexClause";
  index?: ChildObjectName | null;
}

export interface BeginConversationTimerStatement extends TSqlStatement {
  $type: "BeginConversationTimerStatement";
  handle?: ScalarExpression | null;
  timeout?: ScalarExpression | null;
}

export interface BeginDialogStatement extends TSqlStatement {
  $type: "BeginDialogStatement";
  isConversation?: boolean;
  handle?: VariableReference | null;
  initiatorServiceName?: IdentifierOrValueExpression | null;
  targetServiceName?: ValueExpression | null;
  instanceSpec?: ValueExpression | null;
  contractName?: IdentifierOrValueExpression | null;
  options?: DialogOption[];
}

export interface BeginEndAtomicBlockStatement extends Omit<BeginEndBlockStatement, "$type"> {
  $type: "BeginEndAtomicBlockStatement";
  options?: AtomicBlockOption[];
}

export interface BeginEndBlockStatement extends TSqlStatement {
  $type: "BeginEndBlockStatement";
  statementList?: StatementList | null;
}

export interface BeginTransactionStatement extends TransactionStatement {
  $type: "BeginTransactionStatement";
  distributed?: boolean;
  markDefined?: boolean;
  markDescription?: ValueExpression | null;
}

export interface BinaryExpression extends ScalarExpression {
  $type: "BinaryExpression";
  binaryExpressionType?: BinaryExpressionType;
  firstExpression?: ScalarExpression | null;
  secondExpression?: ScalarExpression | null;
}

export interface BinaryLiteral extends Literal {
  $type: "BinaryLiteral";
  literalType?: LiteralType;
  isLargeObject?: boolean;
}

export interface BinaryQueryExpression extends QueryExpression {
  $type: "BinaryQueryExpression";
  binaryQueryExpressionType?: BinaryQueryExpressionType;
  all?: boolean;
  firstQueryExpression?: QueryExpression | null;
  secondQueryExpression?: QueryExpression | null;
}

export interface BooleanBinaryExpression extends BooleanExpression {
  $type: "BooleanBinaryExpression";
  binaryExpressionType?: BooleanBinaryExpressionType;
  firstExpression?: BooleanExpression | null;
  secondExpression?: BooleanExpression | null;
}

export interface BooleanComparisonExpression extends BooleanExpression {
  $type: "BooleanComparisonExpression";
  comparisonType?: BooleanComparisonType;
  firstExpression?: ScalarExpression | null;
  secondExpression?: ScalarExpression | null;
}

export interface BooleanExpression extends TSqlFragmentBase {
}

export interface BooleanExpressionSnippet extends BooleanExpression {
  $type: "BooleanExpressionSnippet";
  script?: string | null;
}

export interface BooleanIsNullExpression extends BooleanExpression {
  $type: "BooleanIsNullExpression";
  isNot?: boolean;
  expression?: ScalarExpression | null;
}

export interface BooleanNotExpression extends BooleanExpression {
  $type: "BooleanNotExpression";
  expression?: BooleanExpression | null;
}

export interface BooleanParenthesisExpression extends BooleanExpression {
  $type: "BooleanParenthesisExpression";
  expression?: BooleanExpression | null;
}

export interface BooleanTernaryExpression extends BooleanExpression {
  $type: "BooleanTernaryExpression";
  ternaryExpressionType?: BooleanTernaryExpressionType;
  firstExpression?: ScalarExpression | null;
  secondExpression?: ScalarExpression | null;
  thirdExpression?: ScalarExpression | null;
}

export interface BoundingBoxParameter extends TSqlFragmentBase {
  $type: "BoundingBoxParameter";
  parameter?: BoundingBoxParameterType;
  value?: ScalarExpression | null;
}

export interface BoundingBoxSpatialIndexOption extends SpatialIndexOption {
  $type: "BoundingBoxSpatialIndexOption";
  boundingBoxParameters?: BoundingBoxParameter[];
}

export interface BreakStatement extends TSqlStatement {
  $type: "BreakStatement";
}

export interface BrokerPriorityParameter extends TSqlFragmentBase {
  $type: "BrokerPriorityParameter";
  isDefaultOrAny?: BrokerPriorityParameterSpecialType;
  parameterType?: BrokerPriorityParameterType;
  parameterValue?: IdentifierOrValueExpression | null;
}

export interface BrokerPriorityStatement extends TSqlStatement {
  name?: Identifier | null;
  brokerPriorityParameters?: BrokerPriorityParameter[];
}

export interface BrowseForClause extends ForClause {
  $type: "BrowseForClause";
}

export interface BuiltInFunctionTableReference extends TableReferenceWithAlias {
  $type: "BuiltInFunctionTableReference";
  name?: Identifier | null;
  parameters?: ScalarExpression[];
}

export interface BulkInsertBase extends TSqlStatement {
  to?: SchemaObjectName | null;
  options?: BulkInsertOption[];
}

export interface BulkInsertOption extends TSqlFragmentBase {
  $type: "BulkInsertOption";
  optionKind?: BulkInsertOptionKind;
}

export interface BulkInsertStatement extends BulkInsertBase {
  $type: "BulkInsertStatement";
  from?: IdentifierOrValueExpression | null;
}

export interface BulkOpenRowset extends TableReferenceWithAliasAndColumns {
  $type: "BulkOpenRowset";
  dataFiles?: StringLiteral[];
  options?: BulkInsertOption[];
  withColumns?: OpenRowsetColumnDefinition[];
}

export interface CallTarget extends TSqlFragmentBase {
}

export interface CaseExpression extends PrimaryExpression {
  elseExpression?: ScalarExpression | null;
}

export interface CastCall extends PrimaryExpression {
  $type: "CastCall";
  dataType?: DataTypeReference | null;
  parameter?: ScalarExpression | null;
}

export interface CatalogCollationOption extends Omit<DatabaseOption, "$type"> {
  $type: "CatalogCollationOption";
  catalogCollation?: unknown;
}

export interface CellsPerObjectSpatialIndexOption extends SpatialIndexOption {
  $type: "CellsPerObjectSpatialIndexOption";
  value?: Literal | null;
}

export interface CertificateCreateLoginSource extends CreateLoginSource {
  $type: "CertificateCreateLoginSource";
  certificate?: Identifier | null;
  credential?: Identifier | null;
}

export interface CertificateOption extends TSqlFragmentBase {
  $type: "CertificateOption";
  kind?: CertificateOptionKinds;
  value?: Literal | null;
}

export interface CertificateStatementBase extends TSqlStatement {
  name?: Identifier | null;
  activeForBeginDialog?: OptionState;
  privateKeyPath?: Literal | null;
  encryptionPassword?: Literal | null;
  decryptionPassword?: Literal | null;
}

export interface ChangeRetentionChangeTrackingOptionDetail extends ChangeTrackingOptionDetail {
  $type: "ChangeRetentionChangeTrackingOptionDetail";
  retentionPeriod?: Literal | null;
  unit?: TimeUnit;
}

export interface ChangeTableChangesTableReference extends TableReferenceWithAliasAndColumns {
  $type: "ChangeTableChangesTableReference";
  target?: SchemaObjectName | null;
  sinceVersion?: ValueExpression | null;
  forceSeek?: boolean;
}

export interface ChangeTableVersionTableReference extends TableReferenceWithAliasAndColumns {
  $type: "ChangeTableVersionTableReference";
  target?: SchemaObjectName | null;
  primaryKeyColumns?: Identifier[];
  primaryKeyValues?: ScalarExpression[];
  forceSeek?: boolean;
}

export interface ChangeTrackingDatabaseOption extends Omit<DatabaseOption, "$type"> {
  $type: "ChangeTrackingDatabaseOption";
  optionState?: OptionState;
  details?: ChangeTrackingOptionDetail[];
}

export interface ChangeTrackingFullTextIndexOption extends FullTextIndexOption {
  $type: "ChangeTrackingFullTextIndexOption";
  value?: ChangeTrackingOption;
}

export interface ChangeTrackingOptionDetail extends TSqlFragmentBase {
}

export interface CharacterSetPayloadOption extends PayloadOption {
  $type: "CharacterSetPayloadOption";
  isSql?: boolean;
}

export interface CheckConstraintDefinition extends ConstraintDefinition {
  $type: "CheckConstraintDefinition";
  checkCondition?: BooleanExpression | null;
  notForReplication?: boolean;
}

export interface CheckpointStatement extends TSqlStatement {
  $type: "CheckpointStatement";
  duration?: Literal | null;
}

export interface ChildObjectName extends Omit<SchemaObjectName, "$type"> {
  $type: "ChildObjectName";
}

export interface ClassifierEndTimeOption extends WorkloadClassifierOption {
  $type: "ClassifierEndTimeOption";
  time?: WlmTimeLiteral | null;
}

export interface ClassifierImportanceOption extends WorkloadClassifierOption {
  $type: "ClassifierImportanceOption";
  importance?: ImportanceParameterType;
}

export interface ClassifierMemberNameOption extends WorkloadClassifierOption {
  $type: "ClassifierMemberNameOption";
  memberName?: StringLiteral | null;
}

export interface ClassifierStartTimeOption extends WorkloadClassifierOption {
  $type: "ClassifierStartTimeOption";
  time?: WlmTimeLiteral | null;
}

export interface ClassifierWlmContextOption extends WorkloadClassifierOption {
  $type: "ClassifierWlmContextOption";
  wlmContext?: StringLiteral | null;
}

export interface ClassifierWlmLabelOption extends WorkloadClassifierOption {
  $type: "ClassifierWlmLabelOption";
  wlmLabel?: StringLiteral | null;
}

export interface ClassifierWorkloadGroupOption extends WorkloadClassifierOption {
  $type: "ClassifierWorkloadGroupOption";
  workloadGroupName?: StringLiteral | null;
}

export interface CloseCursorStatement extends CursorStatement {
  $type: "CloseCursorStatement";
}

export interface CloseMasterKeyStatement extends TSqlStatement {
  $type: "CloseMasterKeyStatement";
}

export interface CloseSymmetricKeyStatement extends TSqlStatement {
  $type: "CloseSymmetricKeyStatement";
  name?: Identifier | null;
  all?: boolean;
}

export interface ClusterByTableOption extends TableOption {
  $type: "ClusterByTableOption";
  columns?: ColumnReferenceExpression[];
}

export interface CoalesceExpression extends PrimaryExpression {
  $type: "CoalesceExpression";
  expressions?: ScalarExpression[];
}

export interface ColumnDefinition extends Omit<ColumnDefinitionBase, "$type"> {
  $type: "ColumnDefinition";
  computedColumnExpression?: ScalarExpression | null;
  isPersisted?: boolean;
  defaultConstraint?: DefaultConstraintDefinition | null;
  identityOptions?: IdentityOptions | null;
  isRowGuidCol?: boolean;
  constraints?: ConstraintDefinition[];
  storageOptions?: ColumnStorageOptions | null;
  index?: IndexDefinition | null;
  generatedAlways?: unknown;
  isHidden?: boolean;
  encryption?: ColumnEncryptionDefinition | null;
  isMasked?: boolean;
  maskingFunction?: StringLiteral | null;
}

export interface ColumnDefinitionBase extends TSqlFragmentBase {
  $type: "ColumnDefinitionBase";
  columnIdentifier?: Identifier | null;
  dataType?: DataTypeReference | null;
  collation?: Identifier | null;
}

export interface ColumnEncryptionAlgorithmNameParameter extends ColumnEncryptionKeyValueParameter {
  $type: "ColumnEncryptionAlgorithmNameParameter";
  algorithm?: StringLiteral | null;
}

export interface ColumnEncryptionAlgorithmParameter extends ColumnEncryptionDefinitionParameter {
  $type: "ColumnEncryptionAlgorithmParameter";
  encryptionAlgorithm?: StringLiteral | null;
}

export interface ColumnEncryptionDefinition extends TSqlFragmentBase {
  $type: "ColumnEncryptionDefinition";
  parameters?: ColumnEncryptionDefinitionParameter[];
}

export interface ColumnEncryptionDefinitionParameter extends TSqlFragmentBase {
  parameterKind?: ColumnEncryptionDefinitionParameterKind;
}

export interface ColumnEncryptionKeyNameParameter extends ColumnEncryptionDefinitionParameter {
  $type: "ColumnEncryptionKeyNameParameter";
  name?: Identifier | null;
}

export interface ColumnEncryptionKeyStatement extends TSqlStatement {
  name?: Identifier | null;
  columnEncryptionKeyValues?: ColumnEncryptionKeyValue[];
}

export interface ColumnEncryptionKeyValue extends TSqlFragmentBase {
  $type: "ColumnEncryptionKeyValue";
  parameters?: ColumnEncryptionKeyValueParameter[];
}

export interface ColumnEncryptionKeyValueParameter extends TSqlFragmentBase {
  parameterKind?: ColumnEncryptionKeyValueParameterKind;
}

export interface ColumnEncryptionTypeParameter extends ColumnEncryptionDefinitionParameter {
  $type: "ColumnEncryptionTypeParameter";
  encryptionType?: ColumnEncryptionType;
}

export interface ColumnMasterKeyEnclaveComputationsParameter extends ColumnMasterKeyParameter {
  $type: "ColumnMasterKeyEnclaveComputationsParameter";
  signature?: BinaryLiteral | null;
}

export interface ColumnMasterKeyNameParameter extends ColumnEncryptionKeyValueParameter {
  $type: "ColumnMasterKeyNameParameter";
  name?: Identifier | null;
}

export interface ColumnMasterKeyParameter extends TSqlFragmentBase {
  parameterKind?: ColumnMasterKeyParameterKind;
}

export interface ColumnMasterKeyPathParameter extends ColumnMasterKeyParameter {
  $type: "ColumnMasterKeyPathParameter";
  path?: StringLiteral | null;
}

export interface ColumnMasterKeyStoreProviderNameParameter extends ColumnMasterKeyParameter {
  $type: "ColumnMasterKeyStoreProviderNameParameter";
  name?: StringLiteral | null;
}

export interface ColumnReferenceExpression extends PrimaryExpression {
  $type: "ColumnReferenceExpression";
  columnType?: ColumnType;
  multiPartIdentifier?: MultiPartIdentifier | null;
}

export interface ColumnStorageOptions extends TSqlFragmentBase {
  $type: "ColumnStorageOptions";
  isFileStream?: boolean;
  sparseOption?: SparseColumnOption;
}

export interface ColumnWithSortOrder extends TSqlFragmentBase {
  $type: "ColumnWithSortOrder";
  column?: ColumnReferenceExpression | null;
  sortOrder?: SortOrder;
}

export interface CommandSecurityElement80 extends SecurityElement80 {
  $type: "CommandSecurityElement80";
  all?: boolean;
  commandOptions?: CommandOptions;
}

export interface CommitTransactionStatement extends TransactionStatement {
  $type: "CommitTransactionStatement";
  delayedDurabilityOption?: OptionState;
}

export interface CommonTableExpression extends TSqlFragmentBase {
  $type: "CommonTableExpression";
  expressionName?: Identifier | null;
  columns?: Identifier[];
  queryExpression?: QueryExpression | null;
  withCtesAndXmlNamespaces?: WithCtesAndXmlNamespaces | null;
}

export interface CompositeGroupingSpecification extends GroupingSpecification {
  $type: "CompositeGroupingSpecification";
  items?: GroupingSpecification[];
}

export interface CompressionDelayIndexOption extends IndexOption {
  $type: "CompressionDelayIndexOption";
  expression?: ScalarExpression | null;
  timeUnit?: CompressionDelayTimeUnit;
}

export interface CompressionEndpointProtocolOption extends EndpointProtocolOption {
  $type: "CompressionEndpointProtocolOption";
  isEnabled?: boolean;
}

export interface CompressionPartitionRange extends TSqlFragmentBase {
  $type: "CompressionPartitionRange";
  from?: ScalarExpression | null;
  to?: ScalarExpression | null;
}

export interface ComputeClause extends TSqlFragmentBase {
  $type: "ComputeClause";
  computeFunctions?: ComputeFunction[];
  byExpressions?: ScalarExpression[];
}

export interface ComputeFunction extends TSqlFragmentBase {
  $type: "ComputeFunction";
  computeFunctionType?: ComputeFunctionType;
  expression?: ScalarExpression | null;
}

export interface ConstraintDefinition extends TSqlFragmentBase {
  constraintIdentifier?: Identifier | null;
}

export interface ContainmentDatabaseOption extends Omit<DatabaseOption, "$type"> {
  $type: "ContainmentDatabaseOption";
  value?: ContainmentOptionKind;
}

export interface ContinueStatement extends TSqlStatement {
  $type: "ContinueStatement";
}

export interface ContractMessage extends TSqlFragmentBase {
  $type: "ContractMessage";
  name?: Identifier | null;
  sentBy?: MessageSender;
}

export interface ConvertCall extends PrimaryExpression {
  $type: "ConvertCall";
  dataType?: DataTypeReference | null;
  parameter?: ScalarExpression | null;
  style?: ScalarExpression | null;
}

export interface CopyColumnOption extends CopyStatementOptionBase {
  $type: "CopyColumnOption";
  columnName?: Identifier | null;
  defaultValue?: ScalarExpression | null;
  fieldNumber?: IntegerLiteral | null;
}

export interface CopyCredentialOption extends CopyStatementOptionBase {
  $type: "CopyCredentialOption";
  identity?: StringLiteral | null;
  secret?: StringLiteral | null;
}

export interface CopyOption extends TSqlFragmentBase {
  $type: "CopyOption";
  kind?: CopyOptionKind;
  value?: CopyStatementOptionBase | null;
}

export interface CopyStatement extends TSqlStatement {
  $type: "CopyStatement";
  from?: StringLiteral[];
  into?: SchemaObjectName | null;
  options?: CopyOption[];
  optimizerHints?: OptimizerHint[];
}

export interface CopyStatementOptionBase extends TSqlFragmentBase {
}

export interface CreateAggregateStatement extends TSqlStatement {
  $type: "CreateAggregateStatement";
  name?: SchemaObjectName | null;
  assemblyName?: AssemblyName | null;
  parameters?: ProcedureParameter[];
  returnType?: DataTypeReference | null;
}

export interface CreateApplicationRoleStatement extends ApplicationRoleStatement {
  $type: "CreateApplicationRoleStatement";
}

export interface CreateAssemblyStatement extends AssemblyStatement {
  $type: "CreateAssemblyStatement";
  owner?: Identifier | null;
}

export interface CreateAsymmetricKeyStatement extends TSqlStatement {
  $type: "CreateAsymmetricKeyStatement";
  name?: Identifier | null;
  keySource?: EncryptionSource | null;
  encryptionAlgorithm?: EncryptionAlgorithm;
  password?: Literal | null;
  owner?: Identifier | null;
}

export interface CreateAvailabilityGroupStatement extends AvailabilityGroupStatement {
  $type: "CreateAvailabilityGroupStatement";
}

export interface CreateBrokerPriorityStatement extends BrokerPriorityStatement {
  $type: "CreateBrokerPriorityStatement";
}

export interface CreateCertificateStatement extends CertificateStatementBase {
  $type: "CreateCertificateStatement";
  certificateSource?: EncryptionSource | null;
  certificateOptions?: CertificateOption[];
  owner?: Identifier | null;
}

export interface CreateColumnEncryptionKeyStatement extends ColumnEncryptionKeyStatement {
  $type: "CreateColumnEncryptionKeyStatement";
}

export interface CreateColumnMasterKeyStatement extends TSqlStatement {
  $type: "CreateColumnMasterKeyStatement";
  name?: Identifier | null;
  parameters?: ColumnMasterKeyParameter[];
}

export interface CreateColumnStoreIndexStatement extends TSqlStatement {
  $type: "CreateColumnStoreIndexStatement";
  name?: Identifier | null;
  clustered?: boolean;
  onName?: SchemaObjectName | null;
  columns?: ColumnReferenceExpression[];
  filterPredicate?: BooleanExpression | null;
  indexOptions?: IndexOption[];
  onFileGroupOrPartitionScheme?: FileGroupOrPartitionScheme | null;
  orderedColumns?: ColumnReferenceExpression[];
}

export interface CreateContractStatement extends TSqlStatement {
  $type: "CreateContractStatement";
  name?: Identifier | null;
  messages?: ContractMessage[];
  owner?: Identifier | null;
}

export interface CreateCredentialStatement extends CredentialStatement {
  $type: "CreateCredentialStatement";
  cryptographicProviderName?: Identifier | null;
}

export interface CreateCryptographicProviderStatement extends TSqlStatement {
  $type: "CreateCryptographicProviderStatement";
  name?: Identifier | null;
  file?: Literal | null;
}

export interface CreateDatabaseAuditSpecificationStatement extends AuditSpecificationStatement {
  $type: "CreateDatabaseAuditSpecificationStatement";
}

export interface CreateDatabaseEncryptionKeyStatement extends DatabaseEncryptionKeyStatement {
  $type: "CreateDatabaseEncryptionKeyStatement";
}

export interface CreateDatabaseStatement extends TSqlStatement {
  $type: "CreateDatabaseStatement";
  databaseName?: Identifier | null;
  containment?: ContainmentDatabaseOption | null;
  fileGroups?: FileGroupDefinition[];
  logOn?: FileDeclaration[];
  options?: DatabaseOption[];
  attachMode?: AttachMode;
  databaseSnapshot?: Identifier | null;
  copyOf?: MultiPartIdentifier | null;
  collation?: Identifier | null;
}

export interface CreateDefaultStatement extends TSqlStatement {
  $type: "CreateDefaultStatement";
  name?: SchemaObjectName | null;
  expression?: ScalarExpression | null;
}

export interface CreateEndpointStatement extends AlterCreateEndpointStatementBase {
  $type: "CreateEndpointStatement";
  owner?: Identifier | null;
}

export interface CreateEventNotificationStatement extends TSqlStatement {
  $type: "CreateEventNotificationStatement";
  name?: Identifier | null;
  scope?: EventNotificationObjectScope | null;
  withFanIn?: boolean;
  eventTypeGroups?: EventTypeGroupContainer[];
  brokerService?: Literal | null;
  brokerInstanceSpecifier?: Literal | null;
}

export interface CreateEventSessionStatement extends Omit<EventSessionStatement, "$type"> {
  $type: "CreateEventSessionStatement";
}

export interface CreateExternalDataSourceStatement extends ExternalDataSourceStatement {
  $type: "CreateExternalDataSourceStatement";
}

export interface CreateExternalFileFormatStatement extends ExternalFileFormatStatement {
  $type: "CreateExternalFileFormatStatement";
}

export interface CreateExternalFunctionStatement extends ExternalFunctionStatement {
  $type: "CreateExternalFunctionStatement";
}

export interface CreateExternalLanguageStatement extends ExternalLanguageStatement {
  $type: "CreateExternalLanguageStatement";
  owner?: Identifier | null;
}

export interface CreateExternalLibraryStatement extends ExternalLibraryStatement {
  $type: "CreateExternalLibraryStatement";
  owner?: Identifier | null;
}

export interface CreateExternalModelStatement extends ExternalModelStatement {
  $type: "CreateExternalModelStatement";
  owner?: Identifier | null;
}

export interface CreateExternalResourcePoolStatement extends Omit<ExternalResourcePoolStatement, "$type"> {
  $type: "CreateExternalResourcePoolStatement";
}

export interface CreateExternalStreamStatement extends ExternalStreamStatement {
  $type: "CreateExternalStreamStatement";
}

export interface CreateExternalStreamingJobStatement extends ExternalStreamingJobStatement {
  $type: "CreateExternalStreamingJobStatement";
}

export interface CreateExternalTableStatement extends ExternalTableStatement {
  $type: "CreateExternalTableStatement";
}

export interface CreateFederationStatement extends TSqlStatement {
  $type: "CreateFederationStatement";
  name?: Identifier | null;
  distributionName?: Identifier | null;
  dataType?: DataTypeReference | null;
}

export interface CreateFullTextCatalogStatement extends FullTextCatalogStatement {
  $type: "CreateFullTextCatalogStatement";
  fileGroup?: Identifier | null;
  path?: Literal | null;
  isDefault?: boolean;
  owner?: Identifier | null;
}

export interface CreateFullTextIndexStatement extends TSqlStatement {
  $type: "CreateFullTextIndexStatement";
  onName?: SchemaObjectName | null;
  fullTextIndexColumns?: FullTextIndexColumn[];
  keyIndexName?: Identifier | null;
  catalogAndFileGroup?: FullTextCatalogAndFileGroup | null;
  options?: FullTextIndexOption[];
}

export interface CreateFullTextStopListStatement extends TSqlStatement {
  $type: "CreateFullTextStopListStatement";
  name?: Identifier | null;
  isSystemStopList?: boolean;
  databaseName?: Identifier | null;
  sourceStopListName?: Identifier | null;
  owner?: Identifier | null;
}

export interface CreateFunctionStatement extends FunctionStatementBody {
  $type: "CreateFunctionStatement";
}

export interface CreateIndexStatement extends IndexStatement {
  $type: "CreateIndexStatement";
  translated80SyntaxTo90?: boolean;
  unique?: boolean;
  clustered?: boolean;
  columns?: ColumnWithSortOrder[];
  includeColumns?: ColumnReferenceExpression[];
  onFileGroupOrPartitionScheme?: FileGroupOrPartitionScheme | null;
  filterPredicate?: BooleanExpression | null;
  fileStreamOn?: IdentifierOrValueExpression | null;
}

export interface CreateJsonIndexStatement extends IndexStatement {
  $type: "CreateJsonIndexStatement";
  jsonColumn?: Identifier | null;
  forJsonPaths?: StringLiteral[];
}

export interface CreateLoginSource extends TSqlFragmentBase {
}

export interface CreateLoginStatement extends TSqlStatement {
  $type: "CreateLoginStatement";
  name?: Identifier | null;
  source?: CreateLoginSource | null;
}

export interface CreateMasterKeyStatement extends MasterKeyStatement {
  $type: "CreateMasterKeyStatement";
}

export interface CreateMessageTypeStatement extends MessageTypeStatementBase {
  $type: "CreateMessageTypeStatement";
  owner?: Identifier | null;
}

export interface CreateOrAlterExternalFunctionStatement extends ExternalFunctionStatement {
  $type: "CreateOrAlterExternalFunctionStatement";
}

export interface CreateOrAlterFunctionStatement extends FunctionStatementBody {
  $type: "CreateOrAlterFunctionStatement";
}

export interface CreateOrAlterProcedureStatement extends ProcedureStatementBody {
  $type: "CreateOrAlterProcedureStatement";
}

export interface CreateOrAlterTriggerStatement extends TriggerStatementBody {
  $type: "CreateOrAlterTriggerStatement";
}

export interface CreateOrAlterViewStatement extends ViewStatementBody {
  $type: "CreateOrAlterViewStatement";
}

export interface CreatePartitionFunctionStatement extends TSqlStatement {
  $type: "CreatePartitionFunctionStatement";
  name?: Identifier | null;
  parameterType?: PartitionParameterType | null;
  range?: PartitionFunctionRange;
  boundaryValues?: ScalarExpression[];
}

export interface CreatePartitionSchemeStatement extends TSqlStatement {
  $type: "CreatePartitionSchemeStatement";
  name?: Identifier | null;
  partitionFunction?: Identifier | null;
  isAll?: boolean;
  fileGroups?: IdentifierOrValueExpression[];
}

export interface CreateProcedureStatement extends ProcedureStatementBody {
  $type: "CreateProcedureStatement";
}

export interface CreateQueueStatement extends QueueStatement {
  $type: "CreateQueueStatement";
  onFileGroup?: IdentifierOrValueExpression | null;
}

export interface CreateRemoteServiceBindingStatement extends RemoteServiceBindingStatementBase {
  $type: "CreateRemoteServiceBindingStatement";
  service?: Literal | null;
  owner?: Identifier | null;
}

export interface CreateResourcePoolStatement extends Omit<ResourcePoolStatement, "$type"> {
  $type: "CreateResourcePoolStatement";
}

export interface CreateRoleStatement extends RoleStatement {
  $type: "CreateRoleStatement";
  owner?: Identifier | null;
}

export interface CreateRouteStatement extends RouteStatement {
  $type: "CreateRouteStatement";
  owner?: Identifier | null;
}

export interface CreateRuleStatement extends TSqlStatement {
  $type: "CreateRuleStatement";
  name?: SchemaObjectName | null;
  expression?: BooleanExpression | null;
}

export interface CreateSchemaStatement extends TSqlStatement {
  $type: "CreateSchemaStatement";
  name?: Identifier | null;
  statementList?: StatementList | null;
  owner?: Identifier | null;
}

export interface CreateSearchPropertyListStatement extends TSqlStatement {
  $type: "CreateSearchPropertyListStatement";
  name?: Identifier | null;
  sourceSearchPropertyList?: MultiPartIdentifier | null;
  owner?: Identifier | null;
}

export interface CreateSecurityPolicyStatement extends SecurityPolicyStatement {
  $type: "CreateSecurityPolicyStatement";
}

export interface CreateSelectiveXmlIndexStatement extends IndexStatement {
  $type: "CreateSelectiveXmlIndexStatement";
  isSecondary?: boolean;
  xmlColumn?: Identifier | null;
  promotedPaths?: SelectiveXmlIndexPromotedPath[];
  xmlNamespaces?: XmlNamespaces | null;
  usingXmlIndexName?: Identifier | null;
  pathName?: Identifier | null;
}

export interface CreateSemanticIndexStatement extends IndexStatement {
  $type: "CreateSemanticIndexStatement";
  columns?: SemanticIndexColumn[];
  externalModelName?: Identifier | null;
  externalModelParameters?: StringLiteral | null;
  vectorIndexOptions?: IndexOption[];
  fulltextStoplistOption?: StopListFullTextIndexOption | null;
  onFileGroupOrPartitionScheme?: FileGroupOrPartitionScheme | null;
}

export interface CreateSequenceStatement extends SequenceStatement {
  $type: "CreateSequenceStatement";
}

export interface CreateServerAuditSpecificationStatement extends AuditSpecificationStatement {
  $type: "CreateServerAuditSpecificationStatement";
}

export interface CreateServerAuditStatement extends ServerAuditStatement {
  $type: "CreateServerAuditStatement";
}

export interface CreateServerRoleStatement extends Omit<CreateRoleStatement, "$type"> {
  $type: "CreateServerRoleStatement";
}

export interface CreateServiceStatement extends AlterCreateServiceStatementBase {
  $type: "CreateServiceStatement";
  owner?: Identifier | null;
}

export interface CreateSpatialIndexStatement extends TSqlStatement {
  $type: "CreateSpatialIndexStatement";
  name?: Identifier | null;
  object?: SchemaObjectName | null;
  spatialColumnName?: Identifier | null;
  spatialIndexingScheme?: SpatialIndexingSchemeType;
  spatialIndexOptions?: SpatialIndexOption[];
  onFileGroup?: IdentifierOrValueExpression | null;
}

export interface CreateStatisticsStatement extends TSqlStatement {
  $type: "CreateStatisticsStatement";
  name?: Identifier | null;
  onName?: SchemaObjectName | null;
  columns?: ColumnReferenceExpression[];
  statisticsOptions?: StatisticsOption[];
  filterPredicate?: BooleanExpression | null;
}

export interface CreateSymmetricKeyStatement extends SymmetricKeyStatement {
  $type: "CreateSymmetricKeyStatement";
  keyOptions?: KeyOption[];
  provider?: Identifier | null;
  owner?: Identifier | null;
}

export interface CreateSynonymStatement extends TSqlStatement {
  $type: "CreateSynonymStatement";
  name?: SchemaObjectName | null;
  forName?: SchemaObjectName | null;
}

export interface CreateTableStatement extends TSqlStatement {
  $type: "CreateTableStatement";
  schemaObjectName?: SchemaObjectName | null;
  asEdge?: boolean;
  asFileTable?: boolean;
  asNode?: boolean;
  definition?: TableDefinition | null;
  onFileGroupOrPartitionScheme?: FileGroupOrPartitionScheme | null;
  federationScheme?: FederationScheme | null;
  textImageOn?: IdentifierOrValueExpression | null;
  options?: TableOption[];
  selectStatement?: SelectStatement | null;
  ctasColumns?: Identifier[];
  cloneSource?: SchemaObjectName | null;
  clonePointInTime?: ScalarExpression | null;
  fileStreamOn?: IdentifierOrValueExpression | null;
}

export interface CreateTriggerStatement extends TriggerStatementBody {
  $type: "CreateTriggerStatement";
}

export interface CreateTypeStatement extends TSqlStatement {
  name?: SchemaObjectName | null;
}

export interface CreateTypeTableStatement extends CreateTypeStatement {
  $type: "CreateTypeTableStatement";
  definition?: TableDefinition | null;
  options?: TableOption[];
}

export interface CreateTypeUddtStatement extends CreateTypeStatement {
  $type: "CreateTypeUddtStatement";
  dataType?: DataTypeReference | null;
  nullableConstraint?: NullableConstraintDefinition | null;
}

export interface CreateTypeUdtStatement extends CreateTypeStatement {
  $type: "CreateTypeUdtStatement";
  assemblyName?: AssemblyName | null;
}

export interface CreateUserStatement extends UserStatement {
  $type: "CreateUserStatement";
  userLoginOption?: UserLoginOption | null;
}

export interface CreateVectorIndexStatement extends IndexStatement {
  $type: "CreateVectorIndexStatement";
  vectorColumn?: Identifier | null;
  onFileGroupOrPartitionScheme?: FileGroupOrPartitionScheme | null;
}

export interface CreateViewStatement extends ViewStatementBody {
  $type: "CreateViewStatement";
}

export interface CreateWorkloadClassifierStatement extends WorkloadClassifierStatement {
  $type: "CreateWorkloadClassifierStatement";
}

export interface CreateWorkloadGroupStatement extends WorkloadGroupStatement {
  $type: "CreateWorkloadGroupStatement";
}

export interface CreateXmlIndexStatement extends IndexStatement {
  $type: "CreateXmlIndexStatement";
  primary?: boolean;
  xmlColumn?: Identifier | null;
  secondaryXmlIndexName?: Identifier | null;
  secondaryXmlIndexType?: SecondaryXmlIndexType;
  onFileGroupOrPartitionScheme?: FileGroupOrPartitionScheme | null;
}

export interface CreateXmlSchemaCollectionStatement extends TSqlStatement {
  $type: "CreateXmlSchemaCollectionStatement";
  name?: SchemaObjectName | null;
  expression?: ScalarExpression | null;
}

export interface CreationDispositionKeyOption extends KeyOption {
  $type: "CreationDispositionKeyOption";
  isCreateNew?: boolean;
}

export interface CredentialStatement extends TSqlStatement {
  name?: Identifier | null;
  identity?: Literal | null;
  secret?: Literal | null;
  isDatabaseScoped?: boolean;
}

export interface CryptoMechanism extends TSqlFragmentBase {
  $type: "CryptoMechanism";
  cryptoMechanismType?: CryptoMechanismType;
  identifier?: Identifier | null;
  passwordOrSignature?: Literal | null;
}

export interface CubeGroupingSpecification extends GroupingSpecification {
  $type: "CubeGroupingSpecification";
  arguments?: GroupingSpecification[];
}

export interface CursorDefaultDatabaseOption extends Omit<DatabaseOption, "$type"> {
  $type: "CursorDefaultDatabaseOption";
  isLocal?: boolean;
}

export interface CursorDefinition extends TSqlFragmentBase {
  $type: "CursorDefinition";
  options?: CursorOption[];
  select?: SelectStatement | null;
}

export interface CursorId extends TSqlFragmentBase {
  $type: "CursorId";
  isGlobal?: boolean;
  name?: IdentifierOrValueExpression | null;
}

export interface CursorOption extends TSqlFragmentBase {
  $type: "CursorOption";
  optionKind?: CursorOptionKind;
}

export interface CursorStatement extends TSqlStatement {
  cursor?: CursorId | null;
}

export interface DWCompatibilityLevelConfigurationOption extends Omit<DatabaseConfigurationSetOption, "$type"> {
  $type: "DWCompatibilityLevelConfigurationOption";
  value?: Literal | null;
}

export interface DataCompressionOption extends IndexOption {
  $type: "DataCompressionOption";
  compressionLevel?: DataCompressionLevel;
  partitionRanges?: CompressionPartitionRange[];
}

export interface DataModificationSpecification extends TSqlFragmentBase {
  target?: TableReference | null;
  topRowFilter?: TopRowFilter | null;
  outputIntoClause?: OutputIntoClause | null;
  outputClause?: OutputClause | null;
}

export interface DataModificationStatement extends StatementWithCtesAndXmlNamespaces {
}

export interface DataModificationTableReference extends TableReferenceWithAliasAndColumns {
  $type: "DataModificationTableReference";
  dataModificationSpecification?: DataModificationSpecification | null;
}

export interface DataRetentionTableOption extends TableOption {
  $type: "DataRetentionTableOption";
  optionState?: OptionState;
  filterColumn?: Identifier | null;
  retentionPeriod?: RetentionPeriodDefinition | null;
}

export interface DataTypeReference extends TSqlFragmentBase {
  name?: SchemaObjectName | null;
}

export interface DataTypeSequenceOption extends Omit<SequenceOption, "$type"> {
  $type: "DataTypeSequenceOption";
  dataType?: DataTypeReference | null;
}

export interface DatabaseAuditAction extends TSqlFragmentBase {
  $type: "DatabaseAuditAction";
  actionKind?: DatabaseAuditActionKind;
}

export interface DatabaseConfigurationClearOption extends TSqlFragmentBase {
  $type: "DatabaseConfigurationClearOption";
  optionKind?: DatabaseConfigClearOptionKind;
  planHandle?: BinaryLiteral | null;
}

export interface DatabaseConfigurationSetOption extends TSqlFragmentBase {
  $type: "DatabaseConfigurationSetOption";
  optionKind?: DatabaseConfigSetOptionKind;
  genericOptionKind?: Identifier | null;
}

export interface DatabaseEncryptionKeyStatement extends TSqlStatement {
  encryptor?: CryptoMechanism | null;
  algorithm?: DatabaseEncryptionKeyAlgorithm;
}

export interface DatabaseOption extends TSqlFragmentBase {
  $type: "DatabaseOption";
  optionKind?: DatabaseOptionKind;
}

export interface DbccNamedLiteral extends TSqlFragmentBase {
  $type: "DbccNamedLiteral";
  name?: string | null;
  value?: ScalarExpression | null;
}

export interface DbccOption extends TSqlFragmentBase {
  $type: "DbccOption";
  optionKind?: DbccOptionKind;
}

export interface DbccStatement extends TSqlStatement {
  $type: "DbccStatement";
  dllName?: string | null;
  command?: DbccCommand;
  parenthesisRequired?: boolean;
  literals?: DbccNamedLiteral[];
  options?: DbccOption[];
  optionsUseJoin?: boolean;
}

export interface DeallocateCursorStatement extends CursorStatement {
  $type: "DeallocateCursorStatement";
}

export interface DeclareCursorStatement extends TSqlStatement {
  $type: "DeclareCursorStatement";
  name?: Identifier | null;
  cursorDefinition?: CursorDefinition | null;
}

export interface DeclareTableVariableBody extends TSqlFragmentBase {
  $type: "DeclareTableVariableBody";
  variableName?: Identifier | null;
  asDefined?: boolean;
  definition?: TableDefinition | null;
}

export interface DeclareTableVariableStatement extends TSqlStatement {
  $type: "DeclareTableVariableStatement";
  body?: DeclareTableVariableBody | null;
}

export interface DeclareVariableElement extends TSqlFragmentBase {
  $type: "DeclareVariableElement";
  variableName?: Identifier | null;
  dataType?: DataTypeReference | null;
  nullable?: NullableConstraintDefinition | null;
  value?: ScalarExpression | null;
}

export interface DeclareVariableStatement extends TSqlStatement {
  $type: "DeclareVariableStatement";
  declarations?: DeclareVariableElement[];
}

export interface DefaultConstraintDefinition extends ConstraintDefinition {
  $type: "DefaultConstraintDefinition";
  expression?: ScalarExpression | null;
  withValues?: boolean;
  column?: Identifier | null;
}

export interface DefaultLiteral extends Literal {
  $type: "DefaultLiteral";
  literalType?: LiteralType;
}

export interface DelayedDurabilityDatabaseOption extends Omit<DatabaseOption, "$type"> {
  $type: "DelayedDurabilityDatabaseOption";
  value?: DelayedDurabilityOptionKind;
}

export interface DeleteMergeAction extends MergeAction {
  $type: "DeleteMergeAction";
}

export interface DeleteSpecification extends UpdateDeleteSpecificationBase {
  $type: "DeleteSpecification";
}

export interface DeleteStatement extends DataModificationStatement {
  $type: "DeleteStatement";
  deleteSpecification?: DeleteSpecification | null;
}

export interface DenyStatement extends SecurityStatement {
  $type: "DenyStatement";
  cascadeOption?: boolean;
}

export interface DenyStatement80 extends SecurityStatementBody80 {
  $type: "DenyStatement80";
  cascadeOption?: boolean;
}

export interface DeviceInfo extends TSqlFragmentBase {
  $type: "DeviceInfo";
  logicalDevice?: IdentifierOrValueExpression | null;
  physicalDevice?: ValueExpression | null;
  deviceType?: DeviceType;
}

export interface DialogOption extends TSqlFragmentBase {
  optionKind?: DialogOptionKind;
}

export interface DiskStatement extends TSqlStatement {
  $type: "DiskStatement";
  diskStatementType?: DiskStatementType;
  options?: DiskStatementOption[];
}

export interface DiskStatementOption extends TSqlFragmentBase {
  $type: "DiskStatementOption";
  optionKind?: DiskStatementOptionKind;
  value?: IdentifierOrValueExpression | null;
}

export interface DistinctPredicate extends BooleanExpression {
  $type: "DistinctPredicate";
  firstExpression?: ScalarExpression | null;
  secondExpression?: ScalarExpression | null;
  isNot?: boolean;
}

export interface DropAggregateStatement extends DropObjectsStatement {
  $type: "DropAggregateStatement";
}

export interface DropAlterFullTextIndexAction extends AlterFullTextIndexAction {
  $type: "DropAlterFullTextIndexAction";
  columns?: Identifier[];
  withNoPopulation?: boolean;
}

export interface DropApplicationRoleStatement extends DropUnownedObjectStatement {
  $type: "DropApplicationRoleStatement";
}

export interface DropAssemblyStatement extends DropObjectsStatement {
  $type: "DropAssemblyStatement";
  withNoDependents?: boolean;
}

export interface DropAsymmetricKeyStatement extends DropUnownedObjectStatement {
  $type: "DropAsymmetricKeyStatement";
  removeProviderKey?: boolean;
}

export interface DropAvailabilityGroupStatement extends DropUnownedObjectStatement {
  $type: "DropAvailabilityGroupStatement";
}

export interface DropBrokerPriorityStatement extends DropUnownedObjectStatement {
  $type: "DropBrokerPriorityStatement";
}

export interface DropCertificateStatement extends DropUnownedObjectStatement {
  $type: "DropCertificateStatement";
}

export interface DropChildObjectsStatement extends TSqlStatement {
  objects?: ChildObjectName[];
}

export interface DropClusteredConstraintMoveOption extends DropClusteredConstraintOption {
  $type: "DropClusteredConstraintMoveOption";
  optionValue?: FileGroupOrPartitionScheme | null;
}

export interface DropClusteredConstraintOption extends TSqlFragmentBase {
  optionKind?: DropClusteredConstraintOptionKind;
}

export interface DropClusteredConstraintStateOption extends DropClusteredConstraintOption {
  $type: "DropClusteredConstraintStateOption";
  optionState?: OptionState;
}

export interface DropClusteredConstraintValueOption extends DropClusteredConstraintOption {
  $type: "DropClusteredConstraintValueOption";
  optionValue?: Literal | null;
}

export interface DropClusteredConstraintWaitAtLowPriorityLockOption extends DropClusteredConstraintOption {
  $type: "DropClusteredConstraintWaitAtLowPriorityLockOption";
  options?: LowPriorityLockWaitOption[];
}

export interface DropColumnEncryptionKeyStatement extends DropUnownedObjectStatement {
  $type: "DropColumnEncryptionKeyStatement";
}

export interface DropColumnMasterKeyStatement extends DropUnownedObjectStatement {
  $type: "DropColumnMasterKeyStatement";
}

export interface DropContractStatement extends DropUnownedObjectStatement {
  $type: "DropContractStatement";
}

export interface DropCredentialStatement extends DropUnownedObjectStatement {
  $type: "DropCredentialStatement";
  isDatabaseScoped?: boolean;
}

export interface DropCryptographicProviderStatement extends DropUnownedObjectStatement {
  $type: "DropCryptographicProviderStatement";
}

export interface DropDatabaseAuditSpecificationStatement extends DropUnownedObjectStatement {
  $type: "DropDatabaseAuditSpecificationStatement";
}

export interface DropDatabaseEncryptionKeyStatement extends TSqlStatement {
  $type: "DropDatabaseEncryptionKeyStatement";
}

export interface DropDatabaseStatement extends TSqlStatement {
  $type: "DropDatabaseStatement";
  databases?: Identifier[];
  isIfExists?: boolean;
}

export interface DropDefaultStatement extends DropObjectsStatement {
  $type: "DropDefaultStatement";
}

export interface DropEndpointStatement extends DropUnownedObjectStatement {
  $type: "DropEndpointStatement";
}

export interface DropEventNotificationStatement extends TSqlStatement {
  $type: "DropEventNotificationStatement";
  notifications?: Identifier[];
  scope?: EventNotificationObjectScope | null;
}

export interface DropEventSessionStatement extends DropUnownedObjectStatement {
  $type: "DropEventSessionStatement";
  sessionScope?: EventSessionScope;
}

export interface DropExternalDataSourceStatement extends DropUnownedObjectStatement {
  $type: "DropExternalDataSourceStatement";
}

export interface DropExternalFileFormatStatement extends DropUnownedObjectStatement {
  $type: "DropExternalFileFormatStatement";
}

export interface DropExternalLanguageStatement extends TSqlStatement {
  $type: "DropExternalLanguageStatement";
  name?: Identifier | null;
  owner?: Identifier | null;
}

export interface DropExternalLibraryStatement extends TSqlStatement {
  $type: "DropExternalLibraryStatement";
  name?: Identifier | null;
  owner?: Identifier | null;
}

export interface DropExternalModelStatement extends DropUnownedObjectStatement {
  $type: "DropExternalModelStatement";
}

export interface DropExternalResourcePoolStatement extends DropUnownedObjectStatement {
  $type: "DropExternalResourcePoolStatement";
}

export interface DropExternalStreamStatement extends DropUnownedObjectStatement {
  $type: "DropExternalStreamStatement";
}

export interface DropExternalStreamingJobStatement extends DropUnownedObjectStatement {
  $type: "DropExternalStreamingJobStatement";
}

export interface DropExternalTableStatement extends DropObjectsStatement {
  $type: "DropExternalTableStatement";
}

export interface DropFederationStatement extends DropUnownedObjectStatement {
  $type: "DropFederationStatement";
}

export interface DropFullTextCatalogStatement extends DropUnownedObjectStatement {
  $type: "DropFullTextCatalogStatement";
}

export interface DropFullTextIndexStatement extends TSqlStatement {
  $type: "DropFullTextIndexStatement";
  tableName?: SchemaObjectName | null;
}

export interface DropFullTextStopListStatement extends DropUnownedObjectStatement {
  $type: "DropFullTextStopListStatement";
}

export interface DropFunctionStatement extends DropObjectsStatement {
  $type: "DropFunctionStatement";
}

export interface DropIndexClause extends DropIndexClauseBase {
  $type: "DropIndexClause";
  index?: Identifier | null;
  object?: SchemaObjectName | null;
  options?: IndexOption[];
}

export interface DropIndexClauseBase extends TSqlFragmentBase {
}

export interface DropIndexStatement extends TSqlStatement {
  $type: "DropIndexStatement";
  dropIndexClauses?: DropIndexClauseBase[];
  isIfExists?: boolean;
}

export interface DropLoginStatement extends DropUnownedObjectStatement {
  $type: "DropLoginStatement";
}

export interface DropMasterKeyStatement extends TSqlStatement {
  $type: "DropMasterKeyStatement";
}

export interface DropMemberAlterRoleAction extends AlterRoleAction {
  $type: "DropMemberAlterRoleAction";
  member?: Identifier | null;
}

export interface DropMessageTypeStatement extends DropUnownedObjectStatement {
  $type: "DropMessageTypeStatement";
}

export interface DropObjectsStatement extends TSqlStatement {
  objects?: SchemaObjectName[];
  isIfExists?: boolean;
}

export interface DropPartitionFunctionStatement extends DropUnownedObjectStatement {
  $type: "DropPartitionFunctionStatement";
}

export interface DropPartitionSchemeStatement extends DropUnownedObjectStatement {
  $type: "DropPartitionSchemeStatement";
}

export interface DropProcedureStatement extends DropObjectsStatement {
  $type: "DropProcedureStatement";
}

export interface DropQueueStatement extends TSqlStatement {
  $type: "DropQueueStatement";
  name?: SchemaObjectName | null;
}

export interface DropRemoteServiceBindingStatement extends DropUnownedObjectStatement {
  $type: "DropRemoteServiceBindingStatement";
}

export interface DropResourcePoolStatement extends DropUnownedObjectStatement {
  $type: "DropResourcePoolStatement";
}

export interface DropRoleStatement extends DropUnownedObjectStatement {
  $type: "DropRoleStatement";
}

export interface DropRouteStatement extends DropUnownedObjectStatement {
  $type: "DropRouteStatement";
}

export interface DropRuleStatement extends DropObjectsStatement {
  $type: "DropRuleStatement";
}

export interface DropSchemaStatement extends TSqlStatement {
  $type: "DropSchemaStatement";
  schema?: SchemaObjectName | null;
  dropBehavior?: DropSchemaBehavior;
  isIfExists?: boolean;
}

export interface DropSearchPropertyListAction extends SearchPropertyListAction {
  $type: "DropSearchPropertyListAction";
  propertyName?: StringLiteral | null;
}

export interface DropSearchPropertyListStatement extends DropUnownedObjectStatement {
  $type: "DropSearchPropertyListStatement";
}

export interface DropSecurityPolicyStatement extends DropObjectsStatement {
  $type: "DropSecurityPolicyStatement";
}

export interface DropSensitivityClassificationStatement extends SensitivityClassificationStatement {
  $type: "DropSensitivityClassificationStatement";
}

export interface DropSequenceStatement extends DropObjectsStatement {
  $type: "DropSequenceStatement";
}

export interface DropServerAuditSpecificationStatement extends DropUnownedObjectStatement {
  $type: "DropServerAuditSpecificationStatement";
}

export interface DropServerAuditStatement extends DropUnownedObjectStatement {
  $type: "DropServerAuditStatement";
}

export interface DropServerRoleStatement extends DropUnownedObjectStatement {
  $type: "DropServerRoleStatement";
}

export interface DropServiceStatement extends DropUnownedObjectStatement {
  $type: "DropServiceStatement";
}

export interface DropSignatureStatement extends SignatureStatementBase {
  $type: "DropSignatureStatement";
}

export interface DropStatisticsStatement extends DropChildObjectsStatement {
  $type: "DropStatisticsStatement";
}

export interface DropSymmetricKeyStatement extends DropUnownedObjectStatement {
  $type: "DropSymmetricKeyStatement";
  removeProviderKey?: boolean;
}

export interface DropSynonymStatement extends DropObjectsStatement {
  $type: "DropSynonymStatement";
}

export interface DropTableStatement extends DropObjectsStatement {
  $type: "DropTableStatement";
}

export interface DropTriggerStatement extends DropObjectsStatement {
  $type: "DropTriggerStatement";
  triggerScope?: TriggerScope;
}

export interface DropTypeStatement extends TSqlStatement {
  $type: "DropTypeStatement";
  name?: SchemaObjectName | null;
  isIfExists?: boolean;
}

export interface DropUnownedObjectStatement extends TSqlStatement {
  name?: Identifier | null;
  isIfExists?: boolean;
}

export interface DropUserStatement extends DropUnownedObjectStatement {
  $type: "DropUserStatement";
}

export interface DropViewStatement extends DropObjectsStatement {
  $type: "DropViewStatement";
}

export interface DropWorkloadClassifierStatement extends DropUnownedObjectStatement {
  $type: "DropWorkloadClassifierStatement";
}

export interface DropWorkloadGroupStatement extends DropUnownedObjectStatement {
  $type: "DropWorkloadGroupStatement";
}

export interface DropXmlSchemaCollectionStatement extends TSqlStatement {
  $type: "DropXmlSchemaCollectionStatement";
  name?: SchemaObjectName | null;
}

export interface DurabilityTableOption extends TableOption {
  $type: "DurabilityTableOption";
  durabilityTableOptionKind?: DurabilityTableOptionKind;
}

export interface ElasticPoolSpecification extends Omit<DatabaseOption, "$type"> {
  $type: "ElasticPoolSpecification";
  elasticPoolName?: Identifier | null;
}

export interface EnableDisableTriggerStatement extends TSqlStatement {
  $type: "EnableDisableTriggerStatement";
  triggerEnforcement?: TriggerEnforcement;
  all?: boolean;
  triggerNames?: SchemaObjectName[];
  triggerObject?: TriggerObject | null;
}

export interface EnabledDisabledPayloadOption extends PayloadOption {
  $type: "EnabledDisabledPayloadOption";
  isEnabled?: boolean;
}

export interface EncryptedValueParameter extends ColumnEncryptionKeyValueParameter {
  $type: "EncryptedValueParameter";
  value?: BinaryLiteral | null;
}

export interface EncryptionPayloadOption extends PayloadOption {
  $type: "EncryptionPayloadOption";
  encryptionSupport?: EndpointEncryptionSupport;
  algorithmPartOne?: EncryptionAlgorithmPreference;
  algorithmPartTwo?: EncryptionAlgorithmPreference;
}

export interface EncryptionSource extends TSqlFragmentBase {
}

export interface EndConversationStatement extends TSqlStatement {
  $type: "EndConversationStatement";
  conversation?: ScalarExpression | null;
  withCleanup?: boolean;
  errorCode?: ValueExpression | null;
  errorDescription?: ValueExpression | null;
}

export interface EndpointAffinity extends TSqlFragmentBase {
  $type: "EndpointAffinity";
  kind?: AffinityKind;
  value?: Literal | null;
}

export interface EndpointProtocolOption extends TSqlFragmentBase {
  kind?: EndpointProtocolOptions;
}

export interface EventDeclaration extends TSqlFragmentBase {
  $type: "EventDeclaration";
  objectName?: EventSessionObjectName | null;
  eventDeclarationSetParameters?: EventDeclarationSetParameter[];
  eventDeclarationActionParameters?: EventSessionObjectName[];
  eventDeclarationPredicateParameter?: BooleanExpression | null;
}

export interface EventDeclarationCompareFunctionParameter extends BooleanExpression {
  $type: "EventDeclarationCompareFunctionParameter";
  name?: EventSessionObjectName | null;
  sourceDeclaration?: SourceDeclaration | null;
  eventValue?: ScalarExpression | null;
}

export interface EventDeclarationSetParameter extends TSqlFragmentBase {
  $type: "EventDeclarationSetParameter";
  eventField?: Identifier | null;
  eventValue?: ScalarExpression | null;
}

export interface EventGroupContainer extends EventTypeGroupContainer {
  $type: "EventGroupContainer";
  eventGroup?: EventNotificationEventGroup;
}

export interface EventNotificationObjectScope extends TSqlFragmentBase {
  $type: "EventNotificationObjectScope";
  target?: EventNotificationTarget;
  queueName?: SchemaObjectName | null;
}

export interface EventRetentionSessionOption extends SessionOption {
  $type: "EventRetentionSessionOption";
  value?: EventSessionEventRetentionModeType;
}

export interface EventSessionObjectName extends TSqlFragmentBase {
  $type: "EventSessionObjectName";
  multiPartIdentifier?: MultiPartIdentifier | null;
}

export interface EventSessionStatement extends TSqlStatement {
  $type: "EventSessionStatement";
  name?: Identifier | null;
  sessionScope?: EventSessionScope;
  eventDeclarations?: EventDeclaration[];
  targetDeclarations?: TargetDeclaration[];
  sessionOptions?: SessionOption[];
}

export interface EventTypeContainer extends EventTypeGroupContainer {
  $type: "EventTypeContainer";
  eventType?: EventNotificationEventType;
}

export interface EventTypeGroupContainer extends TSqlFragmentBase {
}

export interface ExecutableEntity extends TSqlFragmentBase {
  parameters?: ExecuteParameter[];
}

export interface ExecutableProcedureReference extends ExecutableEntity {
  $type: "ExecutableProcedureReference";
  procedureReference?: ProcedureReferenceName | null;
  adHocDataSource?: AdHocDataSource | null;
}

export interface ExecutableStringList extends ExecutableEntity {
  $type: "ExecutableStringList";
  strings?: ValueExpression[];
}

export interface ExecuteAsClause extends TSqlFragmentBase {
  $type: "ExecuteAsClause";
  executeAsOption?: ExecuteAsOption;
  literal?: Literal | null;
}

export interface ExecuteAsFunctionOption extends Omit<FunctionOption, "$type"> {
  $type: "ExecuteAsFunctionOption";
  executeAs?: ExecuteAsClause | null;
}

export interface ExecuteAsProcedureOption extends Omit<ProcedureOption, "$type"> {
  $type: "ExecuteAsProcedureOption";
  executeAs?: ExecuteAsClause | null;
}

export interface ExecuteAsStatement extends TSqlStatement {
  $type: "ExecuteAsStatement";
  withNoRevert?: boolean;
  cookie?: VariableReference | null;
  executeContext?: ExecuteContext | null;
}

export interface ExecuteAsTriggerOption extends Omit<TriggerOption, "$type"> {
  $type: "ExecuteAsTriggerOption";
  executeAsClause?: ExecuteAsClause | null;
}

export interface ExecuteContext extends TSqlFragmentBase {
  $type: "ExecuteContext";
  principal?: ScalarExpression | null;
  kind?: ExecuteAsOption;
}

export interface ExecuteInsertSource extends InsertSource {
  $type: "ExecuteInsertSource";
  execute?: ExecuteSpecification | null;
}

export interface ExecuteOption extends TSqlFragmentBase {
  $type: "ExecuteOption";
  optionKind?: ExecuteOptionKind;
}

export interface ExecuteParameter extends TSqlFragmentBase {
  $type: "ExecuteParameter";
  variable?: VariableReference | null;
  parameterValue?: ScalarExpression | null;
  isOutput?: boolean;
}

export interface ExecuteSpecification extends TSqlFragmentBase {
  $type: "ExecuteSpecification";
  variable?: VariableReference | null;
  linkedServer?: Identifier | null;
  executeContext?: ExecuteContext | null;
  executableEntity?: ExecutableEntity | null;
}

export interface ExecuteStatement extends TSqlStatement {
  $type: "ExecuteStatement";
  executeSpecification?: ExecuteSpecification | null;
  options?: ExecuteOption[];
}

export interface ExistsPredicate extends BooleanExpression {
  $type: "ExistsPredicate";
  subquery?: ScalarSubquery | null;
}

export interface ExpressionCallTarget extends CallTarget {
  $type: "ExpressionCallTarget";
  expression?: ScalarExpression | null;
}

export interface ExpressionGroupingSpecification extends GroupingSpecification {
  $type: "ExpressionGroupingSpecification";
  expression?: ScalarExpression | null;
  distributedAggregation?: boolean;
}

export interface ExpressionWithSortOrder extends TSqlFragmentBase {
  $type: "ExpressionWithSortOrder";
  sortOrder?: SortOrder;
  expression?: ScalarExpression | null;
}

export interface ExternalCreateLoginSource extends CreateLoginSource {
  $type: "ExternalCreateLoginSource";
  options?: PrincipalOption[];
}

export interface ExternalDataSourceLiteralOrIdentifierOption extends ExternalDataSourceOption {
  $type: "ExternalDataSourceLiteralOrIdentifierOption";
  value?: IdentifierOrValueExpression | null;
}

export interface ExternalDataSourceOption extends TSqlFragmentBase {
  optionKind?: ExternalDataSourceOptionKind;
}

export interface ExternalDataSourceStatement extends TSqlStatement {
  name?: Identifier | null;
  dataSourceType?: ExternalDataSourceType;
  location?: Literal | null;
  pushdownOption?: unknown;
  externalDataSourceOptions?: ExternalDataSourceOption[];
}

export interface ExternalFileFormatContainerOption extends ExternalFileFormatOption {
  $type: "ExternalFileFormatContainerOption";
  suboptions?: ExternalFileFormatOption[];
}

export interface ExternalFileFormatLiteralOption extends ExternalFileFormatOption {
  $type: "ExternalFileFormatLiteralOption";
  value?: Literal | null;
}

export interface ExternalFileFormatOption extends TSqlFragmentBase {
  optionKind?: ExternalFileFormatOptionKind;
}

export interface ExternalFileFormatStatement extends TSqlStatement {
  name?: Identifier | null;
  formatType?: ExternalFileFormatType;
  externalFileFormatOptions?: ExternalFileFormatOption[];
}

export interface ExternalFileFormatUseDefaultTypeOption extends ExternalFileFormatOption {
  $type: "ExternalFileFormatUseDefaultTypeOption";
  externalFileFormatUseDefaultType?: ExternalFileFormatUseDefaultType;
}

export interface ExternalFunctionStatement extends TSqlStatement {
  name?: SchemaObjectName | null;
  parameters?: ProcedureParameter[];
  returnType?: DataTypeReference | null;
  externalName?: SchemaObjectName | null;
}

export interface ExternalLanguageFileOption extends TSqlFragmentBase {
  $type: "ExternalLanguageFileOption";
  content?: ScalarExpression | null;
  fileName?: StringLiteral | null;
  path?: StringLiteral | null;
  platform?: Identifier | null;
  parameters?: StringLiteral | null;
  environmentVariables?: StringLiteral | null;
}

export interface ExternalLanguageStatement extends TSqlStatement {
  name?: Identifier | null;
  externalLanguageFiles?: ExternalLanguageFileOption[];
}

export interface ExternalLibraryFileOption extends TSqlFragmentBase {
  $type: "ExternalLibraryFileOption";
  content?: ScalarExpression | null;
  path?: StringLiteral | null;
  platform?: Identifier | null;
}

export interface ExternalLibraryStatement extends TSqlStatement {
  name?: Identifier | null;
  language?: StringLiteral | null;
  externalLibraryFiles?: ExternalLibraryFileOption[];
}

export interface ExternalModelStatement extends TSqlStatement {
  name?: Identifier | null;
  location?: Literal | null;
  apiFormat?: Literal | null;
  modelType?: unknown;
  modelTypeSpecification?: ExternalModelTypeSpecification | null;
  modelName?: Literal | null;
  credential?: Identifier | null;
  parameters?: Literal | null;
  localRuntimePath?: Literal | null;
}

export interface ExternalModelTypeSpecification extends TSqlFragmentBase {
  $type: "ExternalModelTypeSpecification";
  optionKind?: ExternalModelTypeOption;
}

export interface ExternalResourcePoolAffinitySpecification extends TSqlFragmentBase {
  $type: "ExternalResourcePoolAffinitySpecification";
  affinityType?: ExternalResourcePoolAffinityType;
  parameterValue?: Literal | null;
  isAuto?: boolean;
  poolAffinityRanges?: LiteralRange[];
}

export interface ExternalResourcePoolParameter extends TSqlFragmentBase {
  $type: "ExternalResourcePoolParameter";
  parameterType?: ExternalResourcePoolParameterType;
  parameterValue?: Literal | null;
  affinitySpecification?: ExternalResourcePoolAffinitySpecification | null;
}

export interface ExternalResourcePoolStatement extends TSqlStatement {
  $type: "ExternalResourcePoolStatement";
  name?: Identifier | null;
  externalResourcePoolParameters?: ExternalResourcePoolParameter[];
}

export interface ExternalStreamLiteralOrIdentifierOption extends ExternalStreamOption {
  $type: "ExternalStreamLiteralOrIdentifierOption";
  value?: IdentifierOrValueExpression | null;
}

export interface ExternalStreamOption extends TSqlFragmentBase {
  optionKind?: ExternalStreamOptionKind;
}

export interface ExternalStreamStatement extends TSqlStatement {
  name?: Identifier | null;
  location?: Literal | null;
  inputOptions?: Literal | null;
  outputOptions?: Literal | null;
  externalStreamOptions?: ExternalStreamOption[];
}

export interface ExternalStreamingJobStatement extends TSqlStatement {
  name?: StringLiteral | null;
  statement?: StringLiteral | null;
}

export interface ExternalTableColumnDefinition extends TSqlFragmentBase {
  $type: "ExternalTableColumnDefinition";
  columnDefinition?: ColumnDefinitionBase | null;
  nullableConstraint?: NullableConstraintDefinition | null;
}

export interface ExternalTableDistributionOption extends ExternalTableOption {
  $type: "ExternalTableDistributionOption";
  value?: ExternalTableDistributionPolicy | null;
}

export interface ExternalTableDistributionPolicy extends TSqlFragmentBase {
}

export interface ExternalTableLiteralOrIdentifierOption extends ExternalTableOption {
  $type: "ExternalTableLiteralOrIdentifierOption";
  value?: IdentifierOrValueExpression | null;
}

export interface ExternalTableOption extends TSqlFragmentBase {
  optionKind?: ExternalTableOptionKind;
}

export interface ExternalTableRejectTypeOption extends ExternalTableOption {
  $type: "ExternalTableRejectTypeOption";
  value?: ExternalTableRejectType;
}

export interface ExternalTableReplicatedDistributionPolicy extends ExternalTableDistributionPolicy {
  $type: "ExternalTableReplicatedDistributionPolicy";
}

export interface ExternalTableRoundRobinDistributionPolicy extends ExternalTableDistributionPolicy {
  $type: "ExternalTableRoundRobinDistributionPolicy";
}

export interface ExternalTableShardedDistributionPolicy extends ExternalTableDistributionPolicy {
  $type: "ExternalTableShardedDistributionPolicy";
  shardingColumn?: Identifier | null;
}

export interface ExternalTableStatement extends TSqlStatement {
  schemaObjectName?: SchemaObjectName | null;
  columnDefinitions?: ExternalTableColumnDefinition[];
  dataSource?: Identifier | null;
  externalTableOptions?: ExternalTableOption[];
  selectStatement?: SelectStatement | null;
}

export interface ExtractFromExpression extends ScalarExpression {
  $type: "ExtractFromExpression";
  expression?: ScalarExpression | null;
  extractedElement?: Identifier | null;
}

export interface FailoverModeReplicaOption extends AvailabilityReplicaOption {
  $type: "FailoverModeReplicaOption";
  value?: FailoverModeOptionKind;
}

export interface FederationScheme extends TSqlFragmentBase {
  $type: "FederationScheme";
  distributionName?: Identifier | null;
  columnName?: Identifier | null;
}

export interface FetchCursorStatement extends CursorStatement {
  $type: "FetchCursorStatement";
  fetchType?: FetchType | null;
  intoVariables?: VariableReference[];
}

export interface FetchType extends TSqlFragmentBase {
  $type: "FetchType";
  orientation?: FetchOrientation;
  rowOffset?: ScalarExpression | null;
}

export interface FileDeclaration extends TSqlFragmentBase {
  $type: "FileDeclaration";
  options?: FileDeclarationOption[];
  isPrimary?: boolean;
}

export interface FileDeclarationOption extends TSqlFragmentBase {
  $type: "FileDeclarationOption";
  optionKind?: FileDeclarationOptionKind;
}

export interface FileEncryptionSource extends EncryptionSource {
  $type: "FileEncryptionSource";
  isExecutable?: boolean;
  file?: Literal | null;
}

export interface FileGroupDefinition extends TSqlFragmentBase {
  $type: "FileGroupDefinition";
  name?: Identifier | null;
  fileDeclarations?: FileDeclaration[];
  isDefault?: boolean;
  containsFileStream?: boolean;
  containsMemoryOptimizedData?: boolean;
}

export interface FileGroupOrPartitionScheme extends TSqlFragmentBase {
  $type: "FileGroupOrPartitionScheme";
  name?: IdentifierOrValueExpression | null;
  partitionSchemeColumns?: Identifier[];
}

export interface FileGrowthFileDeclarationOption extends Omit<FileDeclarationOption, "$type"> {
  $type: "FileGrowthFileDeclarationOption";
  growthIncrement?: Literal | null;
  units?: MemoryUnit;
}

export interface FileNameFileDeclarationOption extends Omit<FileDeclarationOption, "$type"> {
  $type: "FileNameFileDeclarationOption";
  oSFileName?: Literal | null;
}

export interface FileStreamDatabaseOption extends Omit<DatabaseOption, "$type"> {
  $type: "FileStreamDatabaseOption";
  nonTransactedAccess?: unknown;
  directoryName?: Literal | null;
}

export interface FileStreamOnDropIndexOption extends IndexOption {
  $type: "FileStreamOnDropIndexOption";
  fileStreamOn?: IdentifierOrValueExpression | null;
}

export interface FileStreamOnTableOption extends TableOption {
  $type: "FileStreamOnTableOption";
  value?: IdentifierOrValueExpression | null;
}

export interface FileStreamRestoreOption extends Omit<RestoreOption, "$type"> {
  $type: "FileStreamRestoreOption";
  fileStreamOption?: FileStreamDatabaseOption | null;
}

export interface FileTableCollateFileNameTableOption extends TableOption {
  $type: "FileTableCollateFileNameTableOption";
  value?: Identifier | null;
}

export interface FileTableConstraintNameTableOption extends TableOption {
  $type: "FileTableConstraintNameTableOption";
  value?: Identifier | null;
}

export interface FileTableDirectoryTableOption extends TableOption {
  $type: "FileTableDirectoryTableOption";
  value?: Literal | null;
}

export interface ForClause extends TSqlFragmentBase {
}

export interface ForceSeekTableHint extends Omit<TableHint, "$type"> {
  $type: "ForceSeekTableHint";
  indexValue?: IdentifierOrValueExpression | null;
  columnValues?: ColumnReferenceExpression[];
}

export interface ForeignKeyConstraintDefinition extends ConstraintDefinition {
  $type: "ForeignKeyConstraintDefinition";
  columns?: Identifier[];
  referenceTableName?: SchemaObjectName | null;
  referencedTableColumns?: Identifier[];
  deleteAction?: DeleteUpdateAction;
  updateAction?: DeleteUpdateAction;
  notForReplication?: boolean;
  isEnforced?: boolean;
}

export interface FromClause extends TSqlFragmentBase {
  $type: "FromClause";
  tableReferences?: TableReference[];
  predictTableReference?: PredictTableReference[];
}

export interface FullTextCatalogAndFileGroup extends TSqlFragmentBase {
  $type: "FullTextCatalogAndFileGroup";
  catalogName?: Identifier | null;
  fileGroupName?: Identifier | null;
  fileGroupIsFirst?: boolean;
}

export interface FullTextCatalogOption extends TSqlFragmentBase {
  optionKind?: FullTextCatalogOptionKind;
}

export interface FullTextCatalogStatement extends TSqlStatement {
  name?: Identifier | null;
  options?: FullTextCatalogOption[];
}

export interface FullTextIndexColumn extends TSqlFragmentBase {
  $type: "FullTextIndexColumn";
  name?: Identifier | null;
  typeColumn?: Identifier | null;
  languageTerm?: IdentifierOrValueExpression | null;
  statisticalSemantics?: boolean;
}

export interface FullTextIndexOption extends TSqlFragmentBase {
  optionKind?: FullTextIndexOptionKind;
}

export interface FullTextPredicate extends BooleanExpression {
  $type: "FullTextPredicate";
  fullTextFunctionType?: FullTextFunctionType;
  columns?: ColumnReferenceExpression[];
  value?: ValueExpression | null;
  languageTerm?: ValueExpression | null;
  propertyName?: StringLiteral | null;
}

export interface FullTextStopListAction extends TSqlFragmentBase {
  $type: "FullTextStopListAction";
  isAdd?: boolean;
  isAll?: boolean;
  stopWord?: Literal | null;
  languageTerm?: IdentifierOrValueExpression | null;
}

export interface FullTextTableReference extends TableReferenceWithAlias {
  $type: "FullTextTableReference";
  fullTextFunctionType?: FullTextFunctionType;
  tableName?: SchemaObjectName | null;
  columns?: ColumnReferenceExpression[];
  searchCondition?: ValueExpression | null;
  topN?: ValueExpression | null;
  language?: ValueExpression | null;
  propertyName?: StringLiteral | null;
}

export interface FunctionCall extends PrimaryExpression {
  $type: "FunctionCall";
  callTarget?: CallTarget | null;
  functionName?: Identifier | null;
  parameters?: ScalarExpression[];
  uniqueRowFilter?: UniqueRowFilter;
  overClause?: OverClause | null;
  withinGroupClause?: WithinGroupClause | null;
  ignoreRespectNulls?: Identifier[];
  trimOptions?: Identifier | null;
  jsonParameters?: JsonKeyValue[];
  jsonOrderByClause?: OrderByClause | null;
  absentOrNullOnNull?: Identifier[];
  returnType?: DataTypeReference[];
  withArrayWrapper?: boolean;
}

export interface FunctionCallSetClause extends SetClause {
  $type: "FunctionCallSetClause";
  mutatorFunction?: FunctionCall | null;
}

export interface FunctionOption extends TSqlFragmentBase {
  $type: "FunctionOption";
  optionKind?: FunctionOptionKind;
}

export interface FunctionReturnType extends TSqlFragmentBase {
}

export interface FunctionStatementBody extends ProcedureStatementBodyBase {
  name?: SchemaObjectName | null;
  returnType?: FunctionReturnType | null;
  options?: FunctionOption[];
  orderHint?: OrderBulkInsertOption | null;
}

export interface GeneralSetCommand extends SetCommand {
  $type: "GeneralSetCommand";
  commandType?: GeneralSetCommandType;
  parameter?: ScalarExpression | null;
}

export interface GenericConfigurationOption extends Omit<DatabaseConfigurationSetOption, "$type"> {
  $type: "GenericConfigurationOption";
  genericOptionState?: IdentifierOrScalarExpression | null;
}

export interface GetConversationGroupStatement extends WaitForSupportedStatement {
  $type: "GetConversationGroupStatement";
  groupId?: VariableReference | null;
  queue?: SchemaObjectName | null;
}

export interface GlobalFunctionTableReference extends TableReferenceWithAlias {
  $type: "GlobalFunctionTableReference";
  name?: Identifier | null;
  parameters?: ScalarExpression[];
}

export interface GlobalVariableExpression extends ValueExpression {
  $type: "GlobalVariableExpression";
  name?: string | null;
}

export interface GoToStatement extends TSqlStatement {
  $type: "GoToStatement";
  labelName?: Identifier | null;
}

export interface GrandTotalGroupingSpecification extends GroupingSpecification {
  $type: "GrandTotalGroupingSpecification";
}

export interface GrantStatement extends SecurityStatement {
  $type: "GrantStatement";
  withGrantOption?: boolean;
}

export interface GrantStatement80 extends SecurityStatementBody80 {
  $type: "GrantStatement80";
  withGrantOption?: boolean;
  asClause?: Identifier | null;
}

export interface GraphConnectionBetweenNodes extends TSqlFragmentBase {
  $type: "GraphConnectionBetweenNodes";
  fromNode?: SchemaObjectName | null;
  toNode?: SchemaObjectName | null;
}

export interface GraphConnectionConstraintDefinition extends ConstraintDefinition {
  $type: "GraphConnectionConstraintDefinition";
  fromNodeToNodeList?: GraphConnectionBetweenNodes[];
  deleteAction?: DeleteUpdateAction;
}

export interface GraphMatchCompositeExpression extends BooleanExpression {
  $type: "GraphMatchCompositeExpression";
  leftNode?: GraphMatchNodeExpression | null;
  edge?: Identifier | null;
  rightNode?: GraphMatchNodeExpression | null;
  arrowOnRight?: boolean;
}

export interface GraphMatchExpression extends BooleanExpression {
  $type: "GraphMatchExpression";
  leftNode?: Identifier | null;
  edge?: Identifier | null;
  rightNode?: Identifier | null;
  arrowOnRight?: boolean;
}

export interface GraphMatchLastNodePredicate extends BooleanExpression {
  $type: "GraphMatchLastNodePredicate";
  leftExpression?: GraphMatchNodeExpression | null;
  rightExpression?: GraphMatchNodeExpression | null;
}

export interface GraphMatchNodeExpression extends BooleanExpression {
  $type: "GraphMatchNodeExpression";
  node?: Identifier | null;
  usesLastNode?: boolean;
}

export interface GraphMatchPredicate extends BooleanExpression {
  $type: "GraphMatchPredicate";
  expression?: BooleanExpression | null;
}

export interface GraphMatchRecursivePredicate extends BooleanExpression {
  $type: "GraphMatchRecursivePredicate";
  function?: GraphMatchRecursivePredicateKind;
  outerNodeExpression?: GraphMatchNodeExpression | null;
  expression?: BooleanExpression[];
  recursiveQuantifier?: GraphRecursiveMatchQuantifier | null;
  anchorOnLeft?: boolean;
}

export interface GraphRecursiveMatchQuantifier extends BooleanExpression {
  $type: "GraphRecursiveMatchQuantifier";
  isPlusSign?: boolean;
  lowerLimit?: Literal | null;
  upperLimit?: Literal | null;
}

export interface GridParameter extends TSqlFragmentBase {
  $type: "GridParameter";
  parameter?: GridParameterType;
  value?: ImportanceParameterType;
}

export interface GridsSpatialIndexOption extends SpatialIndexOption {
  $type: "GridsSpatialIndexOption";
  gridParameters?: GridParameter[];
}

export interface GroupByClause extends TSqlFragmentBase {
  $type: "GroupByClause";
  groupByOption?: GroupByOption;
  all?: boolean;
  groupingSpecifications?: GroupingSpecification[];
}

export interface GroupingSetsGroupingSpecification extends GroupingSpecification {
  $type: "GroupingSetsGroupingSpecification";
  sets?: GroupingSpecification[];
}

export interface GroupingSpecification extends TSqlFragmentBase {
}

export interface HadrAvailabilityGroupDatabaseOption extends Omit<HadrDatabaseOption, "$type"> {
  $type: "HadrAvailabilityGroupDatabaseOption";
  groupName?: Identifier | null;
}

export interface HadrDatabaseOption extends Omit<DatabaseOption, "$type"> {
  $type: "HadrDatabaseOption";
  hadrOption?: HadrDatabaseOptionKind;
}

export interface HavingClause extends TSqlFragmentBase {
  $type: "HavingClause";
  searchCondition?: BooleanExpression | null;
}

export interface IIfCall extends PrimaryExpression {
  $type: "IIfCall";
  predicate?: BooleanExpression | null;
  thenExpression?: ScalarExpression | null;
  elseExpression?: ScalarExpression | null;
}

export interface IPv4 extends TSqlFragmentBase {
  $type: "IPv4";
  octetOne?: Literal | null;
  octetTwo?: Literal | null;
  octetThree?: Literal | null;
  octetFour?: Literal | null;
}

export interface Identifier extends TSqlFragmentBase {
  $type: "Identifier";
  value?: string | null;
  quoteType?: QuoteType;
}

export interface IdentifierAtomicBlockOption extends AtomicBlockOption {
  $type: "IdentifierAtomicBlockOption";
  value?: Identifier | null;
}

export interface IdentifierDatabaseOption extends Omit<DatabaseOption, "$type"> {
  $type: "IdentifierDatabaseOption";
  value?: Identifier | null;
}

export interface IdentifierLiteral extends Literal {
  $type: "IdentifierLiteral";
  literalType?: LiteralType;
  quoteType?: QuoteType;
}

export interface IdentifierOrScalarExpression extends TSqlFragmentBase {
  $type: "IdentifierOrScalarExpression";
  identifier?: Identifier | null;
  scalarExpression?: ScalarExpression | null;
}

export interface IdentifierOrValueExpression extends TSqlFragmentBase {
  $type: "IdentifierOrValueExpression";
  value?: string | null;
  identifier?: Identifier | null;
  valueExpression?: ValueExpression | null;
}

export interface IdentifierPrincipalOption extends Omit<PrincipalOption, "$type"> {
  $type: "IdentifierPrincipalOption";
  identifier?: Identifier | null;
}

export interface IdentifierSnippet extends Omit<Identifier, "$type"> {
  $type: "IdentifierSnippet";
  script?: string | null;
}

export interface IdentityFunctionCall extends ScalarExpression {
  $type: "IdentityFunctionCall";
  dataType?: DataTypeReference | null;
  seed?: ScalarExpression | null;
  increment?: ScalarExpression | null;
}

export interface IdentityOptions extends TSqlFragmentBase {
  $type: "IdentityOptions";
  identitySeed?: ScalarExpression | null;
  identityIncrement?: ScalarExpression | null;
  isIdentityNotForReplication?: boolean;
}

export interface IdentityValueKeyOption extends KeyOption {
  $type: "IdentityValueKeyOption";
  identityPhrase?: Literal | null;
}

export interface IfStatement extends TSqlStatement {
  $type: "IfStatement";
  predicate?: BooleanExpression | null;
  thenStatement?: TSqlStatement | null;
  elseStatement?: TSqlStatement | null;
}

export interface IgnoreDupKeyIndexOption extends Omit<IndexStateOption, "$type"> {
  $type: "IgnoreDupKeyIndexOption";
  suppressMessagesOption?: boolean;
}

export interface InPredicate extends BooleanExpression {
  $type: "InPredicate";
  expression?: ScalarExpression | null;
  subquery?: ScalarSubquery | null;
  notDefined?: boolean;
  values?: ScalarExpression[];
}

export interface IndexDefinition extends TSqlStatement {
  $type: "IndexDefinition";
  name?: Identifier | null;
  unique?: boolean;
  indexType?: IndexType | null;
  indexOptions?: IndexOption[];
  columns?: ColumnWithSortOrder[];
  includeColumns?: ColumnReferenceExpression[];
  onFileGroupOrPartitionScheme?: FileGroupOrPartitionScheme | null;
  filterPredicate?: BooleanExpression | null;
  fileStreamOn?: IdentifierOrValueExpression | null;
}

export interface IndexExpressionOption extends IndexOption {
  $type: "IndexExpressionOption";
  expression?: ScalarExpression | null;
}

export interface IndexOption extends TSqlFragmentBase {
  optionKind?: IndexOptionKind;
}

export interface IndexStateOption extends IndexOption {
  $type: "IndexStateOption";
  optionState?: OptionState;
}

export interface IndexStatement extends TSqlStatement {
  name?: Identifier | null;
  onName?: SchemaObjectName | null;
  indexOptions?: IndexOption[];
}

export interface IndexTableHint extends Omit<TableHint, "$type"> {
  $type: "IndexTableHint";
  indexValues?: IdentifierOrValueExpression[];
}

export interface IndexType extends TSqlFragmentBase {
  $type: "IndexType";
  indexTypeKind?: unknown;
}

export interface InlineDerivedTable extends TableReferenceWithAliasAndColumns {
  $type: "InlineDerivedTable";
  rowValues?: RowValue[];
}

export interface InlineFunctionOption extends Omit<FunctionOption, "$type"> {
  $type: "InlineFunctionOption";
  optionState?: OptionState;
}

export interface InlineResultSetDefinition extends Omit<ResultSetDefinition, "$type"> {
  $type: "InlineResultSetDefinition";
  resultColumnDefinitions?: ResultColumnDefinition[];
}

export interface InsertBulkColumnDefinition extends TSqlFragmentBase {
  $type: "InsertBulkColumnDefinition";
  column?: ColumnDefinitionBase | null;
  nullNotNull?: NullNotNull;
}

export interface InsertBulkStatement extends BulkInsertBase {
  $type: "InsertBulkStatement";
  columnDefinitions?: InsertBulkColumnDefinition[];
}

export interface InsertMergeAction extends MergeAction {
  $type: "InsertMergeAction";
  columns?: ColumnReferenceExpression[];
  source?: ValuesInsertSource | null;
}

export interface InsertSource extends TSqlFragmentBase {
}

export interface InsertSpecification extends DataModificationSpecification {
  $type: "InsertSpecification";
  insertOption?: InsertOption;
  insertSource?: InsertSource | null;
  columns?: ColumnReferenceExpression[];
}

export interface InsertStatement extends DataModificationStatement {
  $type: "InsertStatement";
  insertSpecification?: InsertSpecification | null;
}

export interface IntegerLiteral extends Literal {
  $type: "IntegerLiteral";
  literalType?: LiteralType;
}

export interface InternalOpenRowset extends TableReferenceWithAlias {
  $type: "InternalOpenRowset";
  identifier?: Identifier | null;
  varArgs?: ScalarExpression[];
}

export interface InvokeExternalApiFunctionCall extends PrimaryExpression {
  $type: "InvokeExternalApiFunctionCall";
  functionSetName?: StringLiteral | null;
  functionName?: StringLiteral | null;
  arguments?: ScalarExpression[];
}

export interface JoinParenthesisTableReference extends TableReference {
  $type: "JoinParenthesisTableReference";
  join?: TableReference | null;
}

export interface JoinTableReference extends TableReference {
  firstTableReference?: TableReference | null;
  secondTableReference?: TableReference | null;
}

export interface JsonForClause extends ForClause {
  $type: "JsonForClause";
  options?: JsonForClauseOption[];
}

export interface JsonForClauseOption extends ForClause {
  $type: "JsonForClauseOption";
  optionKind?: JsonForClauseOptions;
  value?: Literal | null;
}

export interface JsonKeyValue extends ScalarExpression {
  $type: "JsonKeyValue";
  jsonKeyName?: ScalarExpression | null;
  jsonValue?: ScalarExpression | null;
}

export interface KeyOption extends TSqlFragmentBase {
  optionKind?: KeyOptionKind;
}

export interface KeySourceKeyOption extends KeyOption {
  $type: "KeySourceKeyOption";
  passPhrase?: Literal | null;
}

export interface KillQueryNotificationSubscriptionStatement extends TSqlStatement {
  $type: "KillQueryNotificationSubscriptionStatement";
  subscriptionId?: Literal | null;
  all?: boolean;
}

export interface KillStatement extends TSqlStatement {
  $type: "KillStatement";
  parameter?: ScalarExpression | null;
  withStatusOnly?: boolean;
}

export interface KillStatsJobStatement extends TSqlStatement {
  $type: "KillStatsJobStatement";
  jobId?: ScalarExpression | null;
}

export interface LabelStatement extends TSqlStatement {
  $type: "LabelStatement";
  value?: string | null;
}

export interface LedgerOption extends Omit<DatabaseOption, "$type"> {
  $type: "LedgerOption";
  optionState?: OptionState;
}

export interface LedgerTableOption extends TableOption {
  $type: "LedgerTableOption";
  optionState?: OptionState;
  appendOnly?: OptionState;
  ledgerViewOption?: LedgerViewOption | null;
}

export interface LedgerViewOption extends TableOption {
  $type: "LedgerViewOption";
  viewName?: SchemaObjectName | null;
  transactionIdColumnName?: Identifier | null;
  sequenceNumberColumnName?: Identifier | null;
  operationTypeColumnName?: Identifier | null;
  operationTypeDescColumnName?: Identifier | null;
}

export interface LeftFunctionCall extends PrimaryExpression {
  $type: "LeftFunctionCall";
  parameters?: ScalarExpression[];
}

export interface LikePredicate extends BooleanExpression {
  $type: "LikePredicate";
  firstExpression?: ScalarExpression | null;
  secondExpression?: ScalarExpression | null;
  notDefined?: boolean;
  odbcEscape?: boolean;
  escapeExpression?: ScalarExpression | null;
}

export interface LineNoStatement extends TSqlStatement {
  $type: "LineNoStatement";
  lineNo?: IntegerLiteral | null;
}

export interface ListTypeCopyOption extends CopyStatementOptionBase {
  $type: "ListTypeCopyOption";
  options?: CopyStatementOptionBase[];
}

export interface ListenerIPEndpointProtocolOption extends EndpointProtocolOption {
  $type: "ListenerIPEndpointProtocolOption";
  isAll?: boolean;
  iPv6?: Literal | null;
  iPv4PartOne?: IPv4 | null;
  iPv4PartTwo?: IPv4 | null;
}

export interface Literal extends ValueExpression {
  literalType?: LiteralType;
  value?: string | null;
}

export interface LiteralAtomicBlockOption extends AtomicBlockOption {
  $type: "LiteralAtomicBlockOption";
  value?: Literal | null;
}

export interface LiteralAuditTargetOption extends AuditTargetOption {
  $type: "LiteralAuditTargetOption";
  value?: Literal | null;
}

export interface LiteralAvailabilityGroupOption extends AvailabilityGroupOption {
  $type: "LiteralAvailabilityGroupOption";
  value?: Literal | null;
}

export interface LiteralBulkInsertOption extends Omit<BulkInsertOption, "$type"> {
  $type: "LiteralBulkInsertOption";
  value?: Literal | null;
}

export interface LiteralDatabaseOption extends Omit<DatabaseOption, "$type"> {
  $type: "LiteralDatabaseOption";
  value?: Literal | null;
}

export interface LiteralEndpointProtocolOption extends EndpointProtocolOption {
  $type: "LiteralEndpointProtocolOption";
  value?: Literal | null;
}

export interface LiteralOpenRowsetCosmosOption extends Omit<OpenRowsetCosmosOption, "$type"> {
  $type: "LiteralOpenRowsetCosmosOption";
  value?: Literal | null;
}

export interface LiteralOptimizerHint extends Omit<OptimizerHint, "$type"> {
  $type: "LiteralOptimizerHint";
  value?: Literal | null;
}

export interface LiteralOptionValue extends OptionValue {
  $type: "LiteralOptionValue";
  value?: Literal | null;
}

export interface LiteralPayloadOption extends PayloadOption {
  $type: "LiteralPayloadOption";
  value?: Literal | null;
}

export interface LiteralPrincipalOption extends Omit<PrincipalOption, "$type"> {
  $type: "LiteralPrincipalOption";
  value?: Literal | null;
}

export interface LiteralRange extends TSqlFragmentBase {
  $type: "LiteralRange";
  from?: Literal | null;
  to?: Literal | null;
}

export interface LiteralReplicaOption extends AvailabilityReplicaOption {
  $type: "LiteralReplicaOption";
  value?: Literal | null;
}

export interface LiteralSessionOption extends SessionOption {
  $type: "LiteralSessionOption";
  value?: Literal | null;
  unit?: MemoryUnit;
}

export interface LiteralStatisticsOption extends Omit<StatisticsOption, "$type"> {
  $type: "LiteralStatisticsOption";
  literal?: Literal | null;
}

export interface LiteralTableHint extends Omit<TableHint, "$type"> {
  $type: "LiteralTableHint";
  value?: Literal | null;
}

export interface LocationOption extends TableOption {
  $type: "LocationOption";
  locationValue?: Identifier | null;
}

export interface LockEscalationTableOption extends TableOption {
  $type: "LockEscalationTableOption";
  value?: LockEscalationMethod;
}

export interface LoginTypePayloadOption extends PayloadOption {
  $type: "LoginTypePayloadOption";
  isWindows?: boolean;
}

export interface LowPriorityLockWaitAbortAfterWaitOption extends LowPriorityLockWaitOption {
  $type: "LowPriorityLockWaitAbortAfterWaitOption";
  abortAfterWait?: AbortAfterWaitType;
}

export interface LowPriorityLockWaitMaxDurationOption extends LowPriorityLockWaitOption {
  $type: "LowPriorityLockWaitMaxDurationOption";
  maxDuration?: Literal | null;
  unit?: unknown;
}

export interface LowPriorityLockWaitOption extends TSqlFragmentBase {
  optionKind?: LowPriorityLockWaitOptionKind;
}

export interface LowPriorityLockWaitTableSwitchOption extends TableSwitchOption {
  $type: "LowPriorityLockWaitTableSwitchOption";
  options?: LowPriorityLockWaitOption[];
}

export interface MasterKeyStatement extends TSqlStatement {
  password?: Literal | null;
}

export interface MaxDispatchLatencySessionOption extends SessionOption {
  $type: "MaxDispatchLatencySessionOption";
  isInfinite?: boolean;
  value?: Literal | null;
}

export interface MaxDopConfigurationOption extends Omit<DatabaseConfigurationSetOption, "$type"> {
  $type: "MaxDopConfigurationOption";
  value?: Literal | null;
  primary?: boolean;
}

export interface MaxDurationOption extends IndexOption {
  $type: "MaxDurationOption";
  maxDuration?: Literal | null;
  unit?: unknown;
}

export interface MaxLiteral extends Literal {
  $type: "MaxLiteral";
  literalType?: LiteralType;
}

export interface MaxRolloverFilesAuditTargetOption extends AuditTargetOption {
  $type: "MaxRolloverFilesAuditTargetOption";
  value?: Literal | null;
  isUnlimited?: boolean;
}

export interface MaxSizeAuditTargetOption extends AuditTargetOption {
  $type: "MaxSizeAuditTargetOption";
  isUnlimited?: boolean;
  size?: Literal | null;
  unit?: MemoryUnit;
}

export interface MaxSizeDatabaseOption extends Omit<DatabaseOption, "$type"> {
  $type: "MaxSizeDatabaseOption";
  maxSize?: Literal | null;
  units?: MemoryUnit;
}

export interface MaxSizeFileDeclarationOption extends Omit<FileDeclarationOption, "$type"> {
  $type: "MaxSizeFileDeclarationOption";
  maxSize?: Literal | null;
  units?: MemoryUnit;
  unlimited?: boolean;
}

export interface MemoryOptimizedTableOption extends TableOption {
  $type: "MemoryOptimizedTableOption";
  optionState?: OptionState;
}

export interface MemoryPartitionSessionOption extends SessionOption {
  $type: "MemoryPartitionSessionOption";
  value?: EventSessionMemoryPartitionModeType;
}

export interface MergeAction extends TSqlFragmentBase {
}

export interface MergeActionClause extends TSqlFragmentBase {
  $type: "MergeActionClause";
  condition?: MergeCondition;
  searchCondition?: BooleanExpression | null;
  action?: MergeAction | null;
}

export interface MergeSpecification extends DataModificationSpecification {
  $type: "MergeSpecification";
  tableAlias?: Identifier | null;
  tableReference?: TableReference | null;
  searchCondition?: BooleanExpression | null;
  actionClauses?: MergeActionClause[];
}

export interface MergeStatement extends DataModificationStatement {
  $type: "MergeStatement";
  mergeSpecification?: MergeSpecification | null;
}

export interface MessageTypeStatementBase extends TSqlStatement {
  name?: Identifier | null;
  validationMethod?: MessageValidationMethod;
  xmlSchemaCollectionName?: SchemaObjectName | null;
}

export interface MethodSpecifier extends TSqlFragmentBase {
  $type: "MethodSpecifier";
  assemblyName?: Identifier | null;
  className?: Identifier | null;
  methodName?: Identifier | null;
}

export interface MirrorToClause extends TSqlFragmentBase {
  $type: "MirrorToClause";
  devices?: DeviceInfo[];
}

export interface MoneyLiteral extends Literal {
  $type: "MoneyLiteral";
  literalType?: LiteralType;
}

export interface MoveConversationStatement extends TSqlStatement {
  $type: "MoveConversationStatement";
  conversation?: ScalarExpression | null;
  group?: ScalarExpression | null;
}

export interface MoveRestoreOption extends Omit<RestoreOption, "$type"> {
  $type: "MoveRestoreOption";
  logicalFileName?: ValueExpression | null;
  oSFileName?: ValueExpression | null;
}

export interface MoveToDropIndexOption extends IndexOption {
  $type: "MoveToDropIndexOption";
  moveTo?: FileGroupOrPartitionScheme | null;
}

export interface MultiPartIdentifier extends TSqlFragmentBase {
  $type: "MultiPartIdentifier";
  identifiers?: Identifier[];
}

export interface MultiPartIdentifierCallTarget extends CallTarget {
  $type: "MultiPartIdentifierCallTarget";
  multiPartIdentifier?: MultiPartIdentifier | null;
}

export interface NameFileDeclarationOption extends Omit<FileDeclarationOption, "$type"> {
  $type: "NameFileDeclarationOption";
  logicalFileName?: IdentifierOrValueExpression | null;
  isNewName?: boolean;
}

export interface NamedTableReference extends TableReferenceWithAlias {
  $type: "NamedTableReference";
  schemaObject?: SchemaObjectName | null;
  tableHints?: TableHint[];
  tableSampleClause?: TableSampleClause | null;
  temporalClause?: TemporalClause | null;
}

export interface NextValueForExpression extends PrimaryExpression {
  $type: "NextValueForExpression";
  sequenceName?: SchemaObjectName | null;
  overClause?: OverClause | null;
}

export interface NullIfExpression extends PrimaryExpression {
  $type: "NullIfExpression";
  firstExpression?: ScalarExpression | null;
  secondExpression?: ScalarExpression | null;
}

export interface NullLiteral extends Literal {
  $type: "NullLiteral";
  literalType?: LiteralType;
}

export interface NullableConstraintDefinition extends ConstraintDefinition {
  $type: "NullableConstraintDefinition";
  nullable?: boolean;
}

export interface NumericLiteral extends Literal {
  $type: "NumericLiteral";
  literalType?: LiteralType;
}

export interface OdbcConvertSpecification extends ScalarExpression {
  $type: "OdbcConvertSpecification";
  identifier?: Identifier | null;
}

export interface OdbcFunctionCall extends PrimaryExpression {
  $type: "OdbcFunctionCall";
  name?: Identifier | null;
  parametersUsed?: boolean;
  parameters?: ScalarExpression[];
}

export interface OdbcLiteral extends Literal {
  $type: "OdbcLiteral";
  literalType?: LiteralType;
  odbcLiteralType?: OdbcLiteralType;
  isNational?: boolean;
}

export interface OdbcQualifiedJoinTableReference extends TableReference {
  $type: "OdbcQualifiedJoinTableReference";
  tableReference?: TableReference | null;
}

export interface OffsetClause extends TSqlFragmentBase {
  $type: "OffsetClause";
  offsetExpression?: ScalarExpression | null;
  fetchExpression?: ScalarExpression | null;
  withApproximate?: boolean;
}

export interface OnFailureAuditOption extends AuditOption {
  $type: "OnFailureAuditOption";
  onFailureAction?: AuditFailureActionType;
}

export interface OnOffAssemblyOption extends Omit<AssemblyOption, "$type"> {
  $type: "OnOffAssemblyOption";
  optionState?: OptionState;
}

export interface OnOffAtomicBlockOption extends AtomicBlockOption {
  $type: "OnOffAtomicBlockOption";
  optionState?: OptionState;
}

export interface OnOffAuditTargetOption extends AuditTargetOption {
  $type: "OnOffAuditTargetOption";
  value?: OptionState;
}

export interface OnOffDatabaseOption extends Omit<DatabaseOption, "$type"> {
  $type: "OnOffDatabaseOption";
  optionState?: OptionState;
}

export interface OnOffDialogOption extends DialogOption {
  $type: "OnOffDialogOption";
  optionState?: OptionState;
}

export interface OnOffFullTextCatalogOption extends FullTextCatalogOption {
  $type: "OnOffFullTextCatalogOption";
  optionState?: OptionState;
}

export interface OnOffOptionValue extends OptionValue {
  $type: "OnOffOptionValue";
  optionState?: OptionState;
}

export interface OnOffPrimaryConfigurationOption extends Omit<DatabaseConfigurationSetOption, "$type"> {
  $type: "OnOffPrimaryConfigurationOption";
  optionState?: DatabaseConfigurationOptionState;
}

export interface OnOffPrincipalOption extends Omit<PrincipalOption, "$type"> {
  $type: "OnOffPrincipalOption";
  optionState?: OptionState;
}

export interface OnOffRemoteServiceBindingOption extends RemoteServiceBindingOption {
  $type: "OnOffRemoteServiceBindingOption";
  optionState?: OptionState;
}

export interface OnOffSessionOption extends SessionOption {
  $type: "OnOffSessionOption";
  optionState?: OptionState;
}

export interface OnOffStatisticsOption extends Omit<StatisticsOption, "$type"> {
  $type: "OnOffStatisticsOption";
  optionState?: OptionState;
}

export interface OnlineIndexLowPriorityLockWaitOption extends TSqlFragmentBase {
  $type: "OnlineIndexLowPriorityLockWaitOption";
  options?: LowPriorityLockWaitOption[];
}

export interface OnlineIndexOption extends Omit<IndexStateOption, "$type"> {
  $type: "OnlineIndexOption";
  lowPriorityLockWaitOption?: OnlineIndexLowPriorityLockWaitOption | null;
}

export interface OpenCursorStatement extends CursorStatement {
  $type: "OpenCursorStatement";
}

export interface OpenJsonTableReference extends TableReferenceWithAlias {
  $type: "OpenJsonTableReference";
  variable?: ScalarExpression | null;
  rowPattern?: ScalarExpression | null;
  schemaDeclarationItems?: SchemaDeclarationItemOpenjson[];
}

export interface OpenMasterKeyStatement extends TSqlStatement {
  $type: "OpenMasterKeyStatement";
  password?: Literal | null;
}

export interface OpenQueryTableReference extends TableReferenceWithAlias {
  $type: "OpenQueryTableReference";
  linkedServer?: Identifier | null;
  query?: StringLiteral | null;
}

export interface OpenRowsetColumnDefinition extends Omit<ColumnDefinitionBase, "$type"> {
  $type: "OpenRowsetColumnDefinition";
  columnOrdinal?: IntegerLiteral | null;
  jsonPath?: StringLiteral | null;
}

export interface OpenRowsetCosmos extends TableReferenceWithAliasAndColumns {
  $type: "OpenRowsetCosmos";
  options?: OpenRowsetCosmosOption[];
  withColumns?: OpenRowsetColumnDefinition[];
}

export interface OpenRowsetCosmosOption extends TSqlFragmentBase {
  $type: "OpenRowsetCosmosOption";
  optionKind?: OpenRowsetCosmosOptionKind;
}

export interface OpenRowsetTableReference extends TableReferenceWithAliasAndColumns {
  $type: "OpenRowsetTableReference";
  providerName?: StringLiteral | null;
  dataSource?: StringLiteral | null;
  userId?: StringLiteral | null;
  password?: StringLiteral | null;
  providerString?: StringLiteral | null;
  query?: StringLiteral | null;
  object?: SchemaObjectName | null;
  withColumns?: OpenRowsetColumnDefinition[];
}

export interface OpenSymmetricKeyStatement extends TSqlStatement {
  $type: "OpenSymmetricKeyStatement";
  name?: Identifier | null;
  decryptionMechanism?: CryptoMechanism | null;
}

export interface OpenXmlTableReference extends TableReferenceWithAlias {
  $type: "OpenXmlTableReference";
  variable?: VariableReference | null;
  rowPattern?: ValueExpression | null;
  flags?: ValueExpression | null;
  schemaDeclarationItems?: SchemaDeclarationItem[];
  tableName?: SchemaObjectName | null;
}

export interface OperatorAuditOption extends AuditOption {
  $type: "OperatorAuditOption";
  value?: OptionState;
}

export interface OptimizeForOptimizerHint extends Omit<OptimizerHint, "$type"> {
  $type: "OptimizeForOptimizerHint";
  pairs?: VariableValuePair[];
  isForUnknown?: boolean;
}

export interface OptimizedLockingDatabaseOption extends Omit<DatabaseOption, "$type"> {
  $type: "OptimizedLockingDatabaseOption";
  optionState?: OptionState;
}

export interface OptimizerHint extends TSqlFragmentBase {
  $type: "OptimizerHint";
  hintKind?: OptimizerHintKind;
}

export interface OptionValue extends TSqlFragmentBase {
}

export interface OrderBulkInsertOption extends Omit<BulkInsertOption, "$type"> {
  $type: "OrderBulkInsertOption";
  columns?: ColumnWithSortOrder[];
  isUnique?: boolean;
}

export interface OrderByClause extends TSqlFragmentBase {
  $type: "OrderByClause";
  orderByElements?: ExpressionWithSortOrder[];
  all?: boolean;
  allSortOrder?: SortOrder;
}

export interface OrderIndexOption extends IndexOption {
  $type: "OrderIndexOption";
  columns?: ColumnReferenceExpression[];
}

export interface OutputClause extends TSqlFragmentBase {
  $type: "OutputClause";
  selectColumns?: SelectElement[];
}

export interface OutputIntoClause extends TSqlFragmentBase {
  $type: "OutputIntoClause";
  selectColumns?: SelectElement[];
  intoTable?: TableReference | null;
  intoTableColumns?: ColumnReferenceExpression[];
}

export interface OverClause extends TSqlFragmentBase {
  $type: "OverClause";
  windowName?: Identifier | null;
  partitions?: ScalarExpression[];
  orderByClause?: OrderByClause | null;
  windowFrameClause?: WindowFrameClause | null;
}

export interface PageVerifyDatabaseOption extends Omit<DatabaseOption, "$type"> {
  $type: "PageVerifyDatabaseOption";
  value?: PageVerifyDatabaseOptionKind;
}

export interface ParameterizationDatabaseOption extends Omit<DatabaseOption, "$type"> {
  $type: "ParameterizationDatabaseOption";
  isSimple?: boolean;
}

export interface ParameterizedDataTypeReference extends DataTypeReference {
  parameters?: Literal[];
}

export interface ParameterlessCall extends PrimaryExpression {
  $type: "ParameterlessCall";
  parameterlessCallType?: ParameterlessCallType;
}

export interface ParenthesisExpression extends PrimaryExpression {
  $type: "ParenthesisExpression";
  expression?: ScalarExpression | null;
}

export interface ParseCall extends PrimaryExpression {
  $type: "ParseCall";
  stringValue?: ScalarExpression | null;
  dataType?: DataTypeReference | null;
  culture?: ScalarExpression | null;
}

export interface PartitionFunctionCall extends PrimaryExpression {
  $type: "PartitionFunctionCall";
  databaseName?: Identifier | null;
  functionName?: Identifier | null;
  parameters?: ScalarExpression[];
}

export interface PartitionParameterType extends TSqlFragmentBase {
  $type: "PartitionParameterType";
  dataType?: DataTypeReference | null;
  collation?: Identifier | null;
}

export interface PartitionSpecifications extends TSqlFragmentBase {
}

export interface PartitionSpecifier extends TSqlFragmentBase {
  $type: "PartitionSpecifier";
  number?: ScalarExpression | null;
  all?: boolean;
}

export interface PartnerDatabaseOption extends Omit<DatabaseOption, "$type"> {
  $type: "PartnerDatabaseOption";
  partnerServer?: Literal | null;
  partnerOption?: PartnerDatabaseOptionKind;
  timeout?: Literal | null;
}

export interface PasswordAlterPrincipalOption extends Omit<PrincipalOption, "$type"> {
  $type: "PasswordAlterPrincipalOption";
  password?: Literal | null;
  oldPassword?: Literal | null;
  mustChange?: boolean;
  unlock?: boolean;
  hashed?: boolean;
}

export interface PasswordCreateLoginSource extends CreateLoginSource {
  $type: "PasswordCreateLoginSource";
  password?: Literal | null;
  hashed?: boolean;
  mustChange?: boolean;
  options?: PrincipalOption[];
}

export interface PayloadOption extends TSqlFragmentBase {
  kind?: PayloadOptionKinds;
}

export interface Permission extends TSqlFragmentBase {
  $type: "Permission";
  identifiers?: Identifier[];
  columns?: Identifier[];
}

export interface PermissionSetAssemblyOption extends Omit<AssemblyOption, "$type"> {
  $type: "PermissionSetAssemblyOption";
  permissionSetOption?: PermissionSetOption;
}

export interface PivotedTableReference extends TableReferenceWithAlias {
  $type: "PivotedTableReference";
  tableReference?: TableReference | null;
  inColumns?: Identifier[];
  pivotColumn?: ColumnReferenceExpression | null;
  valueColumns?: ColumnReferenceExpression[];
  aggregateFunctionIdentifier?: MultiPartIdentifier | null;
}

export interface PortsEndpointProtocolOption extends EndpointProtocolOption {
  $type: "PortsEndpointProtocolOption";
  portTypes?: PortTypes;
}

export interface PredicateSetStatement extends SetOnOffStatement {
  $type: "PredicateSetStatement";
  options?: SetOptions;
}

export interface PredictTableReference extends TableReferenceWithAlias {
  $type: "PredictTableReference";
  modelVariable?: ScalarExpression | null;
  modelSubquery?: ScalarSubquery | null;
  dataSource?: TableReferenceWithAlias | null;
  runTime?: Identifier | null;
  schemaDeclarationItems?: SchemaDeclarationItem[];
}

export interface PrimaryExpression extends ScalarExpression {
  collation?: Identifier | null;
}

export interface PrimaryRoleReplicaOption extends AvailabilityReplicaOption {
  $type: "PrimaryRoleReplicaOption";
  allowConnections?: AllowConnectionsOptionKind;
}

export interface PrincipalOption extends TSqlFragmentBase {
  $type: "PrincipalOption";
  optionKind?: PrincipalOptionKind;
}

export interface PrintStatement extends TSqlStatement {
  $type: "PrintStatement";
  expression?: ScalarExpression | null;
}

export interface Privilege80 extends TSqlFragmentBase {
  $type: "Privilege80";
  columns?: Identifier[];
  privilegeType80?: PrivilegeType80;
}

export interface PrivilegeSecurityElement80 extends SecurityElement80 {
  $type: "PrivilegeSecurityElement80";
  privileges?: Privilege80[];
  schemaObjectName?: SchemaObjectName | null;
  columns?: Identifier[];
}

export interface ProcedureOption extends TSqlFragmentBase {
  $type: "ProcedureOption";
  optionKind?: ProcedureOptionKind;
}

export interface ProcedureParameter extends Omit<DeclareVariableElement, "$type"> {
  $type: "ProcedureParameter";
  isVarying?: boolean;
  modifier?: ParameterModifier;
}

export interface ProcedureReference extends TSqlFragmentBase {
  $type: "ProcedureReference";
  name?: SchemaObjectName | null;
  number?: Literal | null;
}

export interface ProcedureReferenceName extends TSqlFragmentBase {
  $type: "ProcedureReferenceName";
  procedureReference?: ProcedureReference | null;
  procedureVariable?: VariableReference | null;
}

export interface ProcedureStatementBody extends ProcedureStatementBodyBase {
  procedureReference?: ProcedureReference | null;
  isForReplication?: boolean;
  options?: ProcedureOption[];
}

export interface ProcedureStatementBodyBase extends TSqlStatement {
  parameters?: ProcedureParameter[];
  statementList?: StatementList | null;
  methodSpecifier?: MethodSpecifier | null;
}

export interface ProcessAffinityRange extends Omit<LiteralRange, "$type"> {
  $type: "ProcessAffinityRange";
}

export interface ProviderEncryptionSource extends EncryptionSource {
  $type: "ProviderEncryptionSource";
  name?: Identifier | null;
  keyOptions?: KeyOption[];
}

export interface ProviderKeyNameKeyOption extends KeyOption {
  $type: "ProviderKeyNameKeyOption";
  keyName?: Literal | null;
}

export interface QualifiedJoin extends JoinTableReference {
  $type: "QualifiedJoin";
  searchCondition?: BooleanExpression | null;
  qualifiedJoinType?: QualifiedJoinType;
  joinHint?: JoinHint;
}

export interface QueryDerivedTable extends TableReferenceWithAliasAndColumns {
  $type: "QueryDerivedTable";
  queryExpression?: QueryExpression | null;
}

export interface QueryExpression extends TSqlFragmentBase {
  orderByClause?: OrderByClause | null;
  offsetClause?: OffsetClause | null;
  forClause?: ForClause | null;
}

export interface QueryParenthesisExpression extends QueryExpression {
  $type: "QueryParenthesisExpression";
  queryExpression?: QueryExpression | null;
}

export interface QuerySpecification extends QueryExpression {
  $type: "QuerySpecification";
  uniqueRowFilter?: UniqueRowFilter;
  topRowFilter?: TopRowFilter | null;
  selectElements?: SelectElement[];
  fromClause?: FromClause | null;
  whereClause?: WhereClause | null;
  groupByClause?: GroupByClause | null;
  havingClause?: HavingClause | null;
  windowClause?: WindowClause | null;
}

export interface QueryStoreCapturePolicyOption extends QueryStoreOption {
  $type: "QueryStoreCapturePolicyOption";
  value?: QueryStoreCapturePolicyOptionKind;
}

export interface QueryStoreDataFlushIntervalOption extends QueryStoreOption {
  $type: "QueryStoreDataFlushIntervalOption";
  flushInterval?: Literal | null;
}

export interface QueryStoreDatabaseOption extends Omit<DatabaseOption, "$type"> {
  $type: "QueryStoreDatabaseOption";
  clear?: boolean;
  clearAll?: boolean;
  optionState?: OptionState;
  options?: QueryStoreOption[];
}

export interface QueryStoreDesiredStateOption extends QueryStoreOption {
  $type: "QueryStoreDesiredStateOption";
  value?: QueryStoreDesiredStateOptionKind;
  operationModeSpecified?: boolean;
}

export interface QueryStoreIntervalLengthOption extends QueryStoreOption {
  $type: "QueryStoreIntervalLengthOption";
  statsIntervalLength?: Literal | null;
}

export interface QueryStoreMaxPlansPerQueryOption extends QueryStoreOption {
  $type: "QueryStoreMaxPlansPerQueryOption";
  maxPlansPerQuery?: Literal | null;
}

export interface QueryStoreMaxStorageSizeOption extends QueryStoreOption {
  $type: "QueryStoreMaxStorageSizeOption";
  maxQdsSize?: Literal | null;
}

export interface QueryStoreOption extends TSqlFragmentBase {
  optionKind?: QueryStoreOptionKind;
}

export interface QueryStoreSizeCleanupPolicyOption extends QueryStoreOption {
  $type: "QueryStoreSizeCleanupPolicyOption";
  value?: QueryStoreSizeCleanupPolicyOptionKind;
}

export interface QueryStoreTimeCleanupPolicyOption extends QueryStoreOption {
  $type: "QueryStoreTimeCleanupPolicyOption";
  staleQueryThreshold?: Literal | null;
}

export interface QueryStoreWaitStatsCaptureOption extends QueryStoreOption {
  $type: "QueryStoreWaitStatsCaptureOption";
  optionState?: OptionState;
}

export interface QueueDelayAuditOption extends AuditOption {
  $type: "QueueDelayAuditOption";
  delay?: Literal | null;
}

export interface QueueExecuteAsOption extends Omit<QueueOption, "$type"> {
  $type: "QueueExecuteAsOption";
  optionValue?: ExecuteAsClause | null;
}

export interface QueueOption extends TSqlFragmentBase {
  $type: "QueueOption";
  optionKind?: QueueOptionKind;
}

export interface QueueProcedureOption extends Omit<QueueOption, "$type"> {
  $type: "QueueProcedureOption";
  optionValue?: SchemaObjectName | null;
}

export interface QueueStateOption extends Omit<QueueOption, "$type"> {
  $type: "QueueStateOption";
  optionState?: OptionState;
}

export interface QueueStatement extends TSqlStatement {
  name?: SchemaObjectName | null;
  queueOptions?: QueueOption[];
}

export interface QueueValueOption extends Omit<QueueOption, "$type"> {
  $type: "QueueValueOption";
  optionValue?: ValueExpression | null;
}

export interface RaiseErrorLegacyStatement extends TSqlStatement {
  $type: "RaiseErrorLegacyStatement";
  firstParameter?: ScalarExpression | null;
  secondParameter?: ValueExpression | null;
}

export interface RaiseErrorStatement extends TSqlStatement {
  $type: "RaiseErrorStatement";
  firstParameter?: ScalarExpression | null;
  secondParameter?: ScalarExpression | null;
  thirdParameter?: ScalarExpression | null;
  optionalParameters?: ScalarExpression[];
  raiseErrorOptions?: RaiseErrorOptions;
}

export interface ReadOnlyForClause extends ForClause {
  $type: "ReadOnlyForClause";
}

export interface ReadTextStatement extends TSqlStatement {
  $type: "ReadTextStatement";
  column?: ColumnReferenceExpression | null;
  textPointer?: ValueExpression | null;
  offset?: ValueExpression | null;
  size?: ValueExpression | null;
  holdLock?: boolean;
}

export interface RealLiteral extends Literal {
  $type: "RealLiteral";
  literalType?: LiteralType;
}

export interface ReceiveStatement extends WaitForSupportedStatement {
  $type: "ReceiveStatement";
  top?: ScalarExpression | null;
  selectElements?: SelectElement[];
  queue?: SchemaObjectName | null;
  into?: VariableTableReference | null;
  where?: ValueExpression | null;
  isConversationGroupIdWhere?: boolean;
}

export interface ReconfigureStatement extends TSqlStatement {
  $type: "ReconfigureStatement";
  withOverride?: boolean;
}

export interface RecoveryDatabaseOption extends Omit<DatabaseOption, "$type"> {
  $type: "RecoveryDatabaseOption";
  value?: RecoveryDatabaseOptionKind;
}

export interface RegexpLikePredicate extends BooleanExpression {
  $type: "RegexpLikePredicate";
  text?: ScalarExpression | null;
  pattern?: ScalarExpression | null;
  flags?: ScalarExpression | null;
}

export interface RemoteDataArchiveAlterTableOption extends TableOption {
  $type: "RemoteDataArchiveAlterTableOption";
  rdaTableOption?: RdaTableOption;
  migrationState?: MigrationState;
  isMigrationStateSpecified?: boolean;
  isFilterPredicateSpecified?: boolean;
  filterPredicate?: FunctionCall | null;
}

export interface RemoteDataArchiveDatabaseOption extends Omit<DatabaseOption, "$type"> {
  $type: "RemoteDataArchiveDatabaseOption";
  optionState?: OptionState;
  settings?: RemoteDataArchiveDatabaseSetting[];
}

export interface RemoteDataArchiveDatabaseSetting extends TSqlFragmentBase {
  settingKind?: RemoteDataArchiveDatabaseSettingKind;
}

export interface RemoteDataArchiveDbCredentialSetting extends RemoteDataArchiveDatabaseSetting {
  $type: "RemoteDataArchiveDbCredentialSetting";
  credential?: Identifier | null;
}

export interface RemoteDataArchiveDbFederatedServiceAccountSetting extends RemoteDataArchiveDatabaseSetting {
  $type: "RemoteDataArchiveDbFederatedServiceAccountSetting";
  isOn?: boolean;
}

export interface RemoteDataArchiveDbServerSetting extends RemoteDataArchiveDatabaseSetting {
  $type: "RemoteDataArchiveDbServerSetting";
  server?: StringLiteral | null;
}

export interface RemoteDataArchiveTableOption extends TableOption {
  $type: "RemoteDataArchiveTableOption";
  rdaTableOption?: RdaTableOption;
  migrationState?: MigrationState;
}

export interface RemoteServiceBindingOption extends TSqlFragmentBase {
  optionKind?: RemoteServiceBindingOptionKind;
}

export interface RemoteServiceBindingStatementBase extends TSqlStatement {
  name?: Identifier | null;
  options?: RemoteServiceBindingOption[];
}

export interface RenameAlterRoleAction extends AlterRoleAction {
  $type: "RenameAlterRoleAction";
  newName?: Identifier | null;
}

export interface RenameEntityStatement extends TSqlStatement {
  $type: "RenameEntityStatement";
  renameEntityType?: SecurityObjectKind;
  separatorType?: unknown;
  oldName?: SchemaObjectName | null;
  newName?: Identifier | null;
}

export interface ResampleStatisticsOption extends Omit<StatisticsOption, "$type"> {
  $type: "ResampleStatisticsOption";
  partitions?: StatisticsPartitionRange[];
}

export interface ResourcePoolAffinitySpecification extends TSqlFragmentBase {
  $type: "ResourcePoolAffinitySpecification";
  affinityType?: ResourcePoolAffinityType;
  parameterValue?: Literal | null;
  isAuto?: boolean;
  poolAffinityRanges?: LiteralRange[];
}

export interface ResourcePoolParameter extends TSqlFragmentBase {
  $type: "ResourcePoolParameter";
  parameterType?: ResourcePoolParameterType;
  parameterValue?: Literal | null;
  affinitySpecification?: ResourcePoolAffinitySpecification | null;
}

export interface ResourcePoolStatement extends TSqlStatement {
  $type: "ResourcePoolStatement";
  name?: Identifier | null;
  resourcePoolParameters?: ResourcePoolParameter[];
}

export interface RestoreMasterKeyStatement extends BackupRestoreMasterKeyStatementBase {
  $type: "RestoreMasterKeyStatement";
  isForce?: boolean;
  encryptionPassword?: Literal | null;
}

export interface RestoreOption extends TSqlFragmentBase {
  $type: "RestoreOption";
  optionKind?: RestoreOptionKind;
}

export interface RestoreServiceMasterKeyStatement extends BackupRestoreMasterKeyStatementBase {
  $type: "RestoreServiceMasterKeyStatement";
  isForce?: boolean;
}

export interface RestoreStatement extends TSqlStatement {
  $type: "RestoreStatement";
  databaseName?: IdentifierOrValueExpression | null;
  devices?: DeviceInfo[];
  files?: BackupRestoreFileInfo[];
  options?: RestoreOption[];
  kind?: RestoreStatementKind;
}

export interface ResultColumnDefinition extends TSqlFragmentBase {
  $type: "ResultColumnDefinition";
  columnDefinition?: ColumnDefinitionBase | null;
  nullable?: NullableConstraintDefinition | null;
}

export interface ResultSetDefinition extends TSqlFragmentBase {
  $type: "ResultSetDefinition";
  resultSetType?: ResultSetType;
}

export interface ResultSetsExecuteOption extends Omit<ExecuteOption, "$type"> {
  $type: "ResultSetsExecuteOption";
  resultSetsOptionKind?: ResultSetsOptionKind;
  definitions?: ResultSetDefinition[];
}

export interface RetentionDaysAuditTargetOption extends AuditTargetOption {
  $type: "RetentionDaysAuditTargetOption";
  days?: Literal | null;
}

export interface RetentionPeriodDefinition extends TSqlFragmentBase {
  $type: "RetentionPeriodDefinition";
  duration?: IntegerLiteral | null;
  units?: TemporalRetentionPeriodUnit;
  isInfinity?: boolean;
}

export interface ReturnStatement extends TSqlStatement {
  $type: "ReturnStatement";
  expression?: ScalarExpression | null;
}

export interface RevertStatement extends TSqlStatement {
  $type: "RevertStatement";
  cookie?: ScalarExpression | null;
}

export interface RevokeStatement extends SecurityStatement {
  $type: "RevokeStatement";
  grantOptionFor?: boolean;
  cascadeOption?: boolean;
}

export interface RevokeStatement80 extends SecurityStatementBody80 {
  $type: "RevokeStatement80";
  grantOptionFor?: boolean;
  cascadeOption?: boolean;
  asClause?: Identifier | null;
}

export interface RightFunctionCall extends PrimaryExpression {
  $type: "RightFunctionCall";
  parameters?: ScalarExpression[];
}

export interface RolePayloadOption extends PayloadOption {
  $type: "RolePayloadOption";
  role?: DatabaseMirroringEndpointRole;
}

export interface RoleStatement extends TSqlStatement {
  name?: Identifier | null;
}

export interface RollbackTransactionStatement extends TransactionStatement {
  $type: "RollbackTransactionStatement";
}

export interface RollupGroupingSpecification extends GroupingSpecification {
  $type: "RollupGroupingSpecification";
  arguments?: GroupingSpecification[];
}

export interface RouteOption extends TSqlFragmentBase {
  $type: "RouteOption";
  optionKind?: RouteOptionKind;
  literal?: Literal | null;
}

export interface RouteStatement extends TSqlStatement {
  name?: Identifier | null;
  routeOptions?: RouteOption[];
}

export interface RowValue extends TSqlFragmentBase {
  $type: "RowValue";
  columnValues?: ScalarExpression[];
}

export interface SaveTransactionStatement extends TransactionStatement {
  $type: "SaveTransactionStatement";
}

export interface ScalarExpression extends TSqlFragmentBase {
}

export interface ScalarExpressionDialogOption extends DialogOption {
  $type: "ScalarExpressionDialogOption";
  value?: ScalarExpression | null;
}

export interface ScalarExpressionRestoreOption extends Omit<RestoreOption, "$type"> {
  $type: "ScalarExpressionRestoreOption";
  value?: ScalarExpression | null;
}

export interface ScalarExpressionSequenceOption extends Omit<SequenceOption, "$type"> {
  $type: "ScalarExpressionSequenceOption";
  optionValue?: ScalarExpression | null;
}

export interface ScalarExpressionSnippet extends ScalarExpression {
  $type: "ScalarExpressionSnippet";
  script?: string | null;
}

export interface ScalarFunctionReturnType extends FunctionReturnType {
  $type: "ScalarFunctionReturnType";
  dataType?: DataTypeReference | null;
}

export interface ScalarSubquery extends PrimaryExpression {
  $type: "ScalarSubquery";
  queryExpression?: QueryExpression | null;
}

export interface SchemaDeclarationItem extends TSqlFragmentBase {
  $type: "SchemaDeclarationItem";
  columnDefinition?: ColumnDefinitionBase | null;
  mapping?: ValueExpression | null;
}

export interface SchemaDeclarationItemOpenjson extends Omit<SchemaDeclarationItem, "$type"> {
  $type: "SchemaDeclarationItemOpenjson";
  asJson?: boolean;
}

export interface SchemaObjectFunctionTableReference extends TableReferenceWithAliasAndColumns {
  $type: "SchemaObjectFunctionTableReference";
  schemaObject?: SchemaObjectName | null;
  parameters?: ScalarExpression[];
}

export interface SchemaObjectName extends Omit<MultiPartIdentifier, "$type"> {
  $type: "SchemaObjectName";
}

export interface SchemaObjectNameOrValueExpression extends TSqlFragmentBase {
  $type: "SchemaObjectNameOrValueExpression";
  schemaObjectName?: SchemaObjectName | null;
  valueExpression?: ValueExpression | null;
}

export interface SchemaObjectNameSnippet extends Omit<SchemaObjectName, "$type"> {
  $type: "SchemaObjectNameSnippet";
  script?: string | null;
}

export interface SchemaObjectResultSetDefinition extends Omit<ResultSetDefinition, "$type"> {
  $type: "SchemaObjectResultSetDefinition";
  name?: SchemaObjectName | null;
}

export interface SchemaPayloadOption extends PayloadOption {
  $type: "SchemaPayloadOption";
  isStandard?: boolean;
}

export interface SearchPropertyListAction extends TSqlFragmentBase {
}

export interface SearchPropertyListFullTextIndexOption extends FullTextIndexOption {
  $type: "SearchPropertyListFullTextIndexOption";
  isOff?: boolean;
  propertyListName?: Identifier | null;
}

export interface SearchedCaseExpression extends CaseExpression {
  $type: "SearchedCaseExpression";
  whenClauses?: SearchedWhenClause[];
}

export interface SearchedWhenClause extends WhenClause {
  $type: "SearchedWhenClause";
  whenExpression?: BooleanExpression | null;
}

export interface SecondaryRoleReplicaOption extends AvailabilityReplicaOption {
  $type: "SecondaryRoleReplicaOption";
  allowConnections?: AllowConnectionsOptionKind;
}

export interface SecurityElement80 extends TSqlFragmentBase {
}

export interface SecurityPolicyOption extends TSqlFragmentBase {
  $type: "SecurityPolicyOption";
  optionKind?: SecurityPolicyOptionKind;
  optionState?: OptionState;
}

export interface SecurityPolicyStatement extends TSqlStatement {
  name?: SchemaObjectName | null;
  notForReplication?: boolean;
  securityPolicyOptions?: SecurityPolicyOption[];
  securityPredicateActions?: SecurityPredicateAction[];
  actionType?: SecurityPolicyActionType;
}

export interface SecurityPredicateAction extends TSqlFragmentBase {
  $type: "SecurityPredicateAction";
  actionType?: SecurityPredicateActionType;
  securityPredicateType?: SecurityPredicateType;
  functionCall?: FunctionCall | null;
  targetObjectName?: SchemaObjectName | null;
  securityPredicateOperation?: SecurityPredicateOperation;
}

export interface SecurityPrincipal extends TSqlFragmentBase {
  $type: "SecurityPrincipal";
  principalType?: PrincipalType;
  identifier?: Identifier | null;
}

export interface SecurityStatement extends TSqlStatement {
  permissions?: Permission[];
  securityTargetObject?: SecurityTargetObject | null;
  principals?: SecurityPrincipal[];
  asClause?: Identifier | null;
}

export interface SecurityStatementBody80 extends TSqlStatement {
  securityElement80?: SecurityElement80 | null;
  securityUserClause80?: SecurityUserClause80 | null;
}

export interface SecurityTargetObject extends TSqlFragmentBase {
  $type: "SecurityTargetObject";
  objectKind?: SecurityObjectKind;
  objectName?: SecurityTargetObjectName | null;
  columns?: Identifier[];
}

export interface SecurityTargetObjectName extends TSqlFragmentBase {
  $type: "SecurityTargetObjectName";
  multiPartIdentifier?: MultiPartIdentifier | null;
}

export interface SecurityUserClause80 extends TSqlFragmentBase {
  $type: "SecurityUserClause80";
  users?: Identifier[];
  userType80?: UserType80;
}

export interface SelectElement extends TSqlFragmentBase {
}

export interface SelectFunctionReturnType extends FunctionReturnType {
  $type: "SelectFunctionReturnType";
  selectStatement?: SelectStatement | null;
}

export interface SelectInsertSource extends InsertSource {
  $type: "SelectInsertSource";
  select?: QueryExpression | null;
}

export interface SelectScalarExpression extends SelectElement {
  $type: "SelectScalarExpression";
  expression?: ScalarExpression | null;
  columnName?: IdentifierOrValueExpression | null;
}

export interface SelectSetVariable extends SelectElement {
  $type: "SelectSetVariable";
  variable?: VariableReference | null;
  expression?: ScalarExpression | null;
  assignmentKind?: AssignmentKind;
}

export interface SelectStarExpression extends SelectElement {
  $type: "SelectStarExpression";
  qualifier?: MultiPartIdentifier | null;
}

export interface SelectStatement extends StatementWithCtesAndXmlNamespaces {
  $type: "SelectStatement";
  queryExpression?: QueryExpression | null;
  into?: SchemaObjectName | null;
  on?: Identifier | null;
  computeClauses?: ComputeClause[];
}

export interface SelectStatementSnippet extends Omit<SelectStatement, "$type"> {
  $type: "SelectStatementSnippet";
  script?: string | null;
}

export interface SelectiveXmlIndexPromotedPath extends TSqlFragmentBase {
  $type: "SelectiveXmlIndexPromotedPath";
  name?: Identifier | null;
  path?: Literal | null;
  sQLDataType?: DataTypeReference | null;
  xQueryDataType?: Literal | null;
  maxLength?: IntegerLiteral | null;
  isSingleton?: boolean;
}

export interface SemanticIndexChunkOption extends TSqlFragmentBase {
  $type: "SemanticIndexChunkOption";
  optionKind?: SemanticIndexChunkOptionKind;
  value?: IdentifierOrValueExpression | null;
}

export interface SemanticIndexColumn extends TSqlFragmentBase {
  $type: "SemanticIndexColumn";
  columnName?: Identifier | null;
  searchType?: SemanticIndexSearchType;
  typeColumnName?: Identifier | null;
  language?: IdentifierOrValueExpression | null;
  chunkOptions?: SemanticIndexChunkOption[];
}

export interface SemanticTableReference extends TableReferenceWithAlias {
  $type: "SemanticTableReference";
  semanticFunctionType?: SemanticFunctionType;
  tableName?: SchemaObjectName | null;
  columns?: ColumnReferenceExpression[];
  sourceKey?: ScalarExpression | null;
  matchedColumn?: ColumnReferenceExpression | null;
  matchedKey?: ScalarExpression | null;
}

export interface SendStatement extends TSqlStatement {
  $type: "SendStatement";
  conversationHandles?: ScalarExpression[];
  messageTypeName?: IdentifierOrValueExpression | null;
  messageBody?: ScalarExpression | null;
}

export interface SensitivityClassificationOption extends TSqlFragmentBase {
  $type: "SensitivityClassificationOption";
  type?: OptionType;
  value?: Literal | null;
}

export interface SensitivityClassificationStatement extends TSqlStatement {
  columns?: ColumnReferenceExpression[];
}

export interface SequenceOption extends TSqlFragmentBase {
  $type: "SequenceOption";
  optionKind?: SequenceOptionKind;
  noValue?: boolean;
}

export interface SequenceStatement extends TSqlStatement {
  name?: SchemaObjectName | null;
  sequenceOptions?: SequenceOption[];
}

export interface ServerAuditStatement extends TSqlStatement {
  auditName?: Identifier | null;
  auditTarget?: AuditTarget | null;
  options?: AuditOption[];
  predicateExpression?: BooleanExpression | null;
}

export interface ServiceContract extends TSqlFragmentBase {
  $type: "ServiceContract";
  name?: Identifier | null;
  action?: AlterAction;
}

export interface SessionOption extends TSqlFragmentBase {
  optionKind?: SessionOptionKind;
}

export interface SessionTimeoutPayloadOption extends PayloadOption {
  $type: "SessionTimeoutPayloadOption";
  isNever?: boolean;
  timeout?: Literal | null;
}

export interface SetClause extends TSqlFragmentBase {
}

export interface SetCommand extends TSqlFragmentBase {
}

export interface SetCommandStatement extends TSqlStatement {
  $type: "SetCommandStatement";
  commands?: SetCommand[];
}

export interface SetErrorLevelStatement extends TSqlStatement {
  $type: "SetErrorLevelStatement";
  level?: ScalarExpression | null;
}

export interface SetFipsFlaggerCommand extends SetCommand {
  $type: "SetFipsFlaggerCommand";
  complianceLevel?: FipsComplianceLevel;
}

export interface SetIdentityInsertStatement extends SetOnOffStatement {
  $type: "SetIdentityInsertStatement";
  table?: SchemaObjectName | null;
}

export interface SetOffsetsStatement extends SetOnOffStatement {
  $type: "SetOffsetsStatement";
  options?: SetOffsets;
}

export interface SetOnOffStatement extends TSqlStatement {
  isOn?: boolean;
}

export interface SetRowCountStatement extends TSqlStatement {
  $type: "SetRowCountStatement";
  numberRows?: ValueExpression | null;
}

export interface SetSearchPropertyListAlterFullTextIndexAction extends AlterFullTextIndexAction {
  $type: "SetSearchPropertyListAlterFullTextIndexAction";
  searchPropertyListOption?: SearchPropertyListFullTextIndexOption | null;
  withNoPopulation?: boolean;
}

export interface SetStatisticsStatement extends SetOnOffStatement {
  $type: "SetStatisticsStatement";
  options?: SetStatisticsOptions;
}

export interface SetStopListAlterFullTextIndexAction extends AlterFullTextIndexAction {
  $type: "SetStopListAlterFullTextIndexAction";
  stopListOption?: StopListFullTextIndexOption | null;
  withNoPopulation?: boolean;
}

export interface SetTextSizeStatement extends TSqlStatement {
  $type: "SetTextSizeStatement";
  textSize?: ScalarExpression | null;
}

export interface SetTransactionIsolationLevelStatement extends TSqlStatement {
  $type: "SetTransactionIsolationLevelStatement";
  level?: IsolationLevel;
}

export interface SetUserStatement extends TSqlStatement {
  $type: "SetUserStatement";
  userName?: ValueExpression | null;
  withNoReset?: boolean;
}

export interface SetVariableStatement extends TSqlStatement {
  $type: "SetVariableStatement";
  variable?: VariableReference | null;
  separatorType?: SeparatorType;
  identifier?: Identifier | null;
  functionCallExists?: boolean;
  parameters?: ScalarExpression[];
  expression?: ScalarExpression | null;
  cursorDefinition?: CursorDefinition | null;
  assignmentKind?: AssignmentKind;
}

export interface ShutdownStatement extends TSqlStatement {
  $type: "ShutdownStatement";
  withNoWait?: boolean;
}

export interface SignatureStatementBase extends TSqlStatement {
  isCounter?: boolean;
  elementKind?: SignableElementKind;
  element?: SchemaObjectName | null;
  cryptos?: CryptoMechanism[];
}

export interface SimpleAlterFullTextIndexAction extends AlterFullTextIndexAction {
  $type: "SimpleAlterFullTextIndexAction";
  actionKind?: SimpleAlterFullTextIndexActionKind;
}

export interface SimpleCaseExpression extends CaseExpression {
  $type: "SimpleCaseExpression";
  inputExpression?: ScalarExpression | null;
  whenClauses?: SimpleWhenClause[];
}

export interface SimpleWhenClause extends WhenClause {
  $type: "SimpleWhenClause";
  whenExpression?: ScalarExpression | null;
}

export interface SingleValueTypeCopyOption extends CopyStatementOptionBase {
  $type: "SingleValueTypeCopyOption";
  singleValue?: IdentifierOrValueExpression | null;
}

export interface SizeFileDeclarationOption extends Omit<FileDeclarationOption, "$type"> {
  $type: "SizeFileDeclarationOption";
  size?: Literal | null;
  units?: MemoryUnit;
}

export interface SoapMethod extends PayloadOption {
  $type: "SoapMethod";
  alias?: Literal | null;
  namespace?: Literal | null;
  action?: SoapMethodAction;
  name?: Literal | null;
  format?: SoapMethodFormat;
  schema?: SoapMethodSchemas;
}

export interface SourceDeclaration extends ScalarExpression {
  $type: "SourceDeclaration";
  value?: EventSessionObjectName | null;
}

export interface SpatialIndexOption extends TSqlFragmentBase {
}

export interface SpatialIndexRegularOption extends SpatialIndexOption {
  $type: "SpatialIndexRegularOption";
  option?: IndexOption | null;
}

export interface SqlCommandIdentifier extends Omit<Identifier, "$type"> {
  $type: "SqlCommandIdentifier";
}

export interface SqlDataTypeReference extends ParameterizedDataTypeReference {
  $type: "SqlDataTypeReference";
  sqlDataTypeOption?: SqlDataTypeOption;
}

export interface StateAuditOption extends AuditOption {
  $type: "StateAuditOption";
  value?: OptionState;
}

export interface StatementList extends TSqlFragmentBase {
  $type: "StatementList";
  statements?: TSqlStatement[];
}

export interface StatementListSnippet extends Omit<StatementList, "$type"> {
  $type: "StatementListSnippet";
  script?: string | null;
}

export interface StatementWithCtesAndXmlNamespaces extends TSqlStatement {
  withCtesAndXmlNamespaces?: WithCtesAndXmlNamespaces | null;
  optimizerHints?: OptimizerHint[];
}

export interface StatisticsOption extends TSqlFragmentBase {
  $type: "StatisticsOption";
  optionKind?: StatisticsOptionKind;
}

export interface StatisticsPartitionRange extends TSqlFragmentBase {
  $type: "StatisticsPartitionRange";
  from?: IntegerLiteral | null;
  to?: IntegerLiteral | null;
}

export interface StopListFullTextIndexOption extends FullTextIndexOption {
  $type: "StopListFullTextIndexOption";
  isOff?: boolean;
  stopListName?: Identifier | null;
}

export interface StopRestoreOption extends Omit<RestoreOption, "$type"> {
  $type: "StopRestoreOption";
  mark?: ValueExpression | null;
  after?: ValueExpression | null;
  isStopAt?: boolean;
}

export interface StringLiteral extends Literal {
  $type: "StringLiteral";
  literalType?: LiteralType;
  isNational?: boolean;
  isLargeObject?: boolean;
}

export interface SubqueryComparisonPredicate extends BooleanExpression {
  $type: "SubqueryComparisonPredicate";
  expression?: ScalarExpression | null;
  comparisonType?: BooleanComparisonType;
  subquery?: ScalarSubquery | null;
  subqueryComparisonPredicateType?: SubqueryComparisonPredicateType;
}

export interface SymmetricKeyStatement extends TSqlStatement {
  name?: Identifier | null;
  encryptingMechanisms?: CryptoMechanism[];
}

export interface SystemTimePeriodDefinition extends TSqlFragmentBase {
  $type: "SystemTimePeriodDefinition";
  startTimeColumn?: Identifier | null;
  endTimeColumn?: Identifier | null;
}

export interface SystemVersioningTableOption extends TableOption {
  $type: "SystemVersioningTableOption";
  optionState?: OptionState;
  consistencyCheckEnabled?: OptionState;
  historyTable?: SchemaObjectName | null;
  retentionPeriod?: RetentionPeriodDefinition | null;
}

export interface TSEqualCall extends BooleanExpression {
  $type: "TSEqualCall";
  firstExpression?: ScalarExpression | null;
  secondExpression?: ScalarExpression | null;
}

export interface TSqlBatch extends TSqlFragmentBase {
  $type: "TSqlBatch";
  statements?: TSqlStatement[];
}

export interface TSqlFragmentSnippet extends TSqlFragmentBase {
  $type: "TSqlFragmentSnippet";
  script?: string | null;
}

export interface TSqlScript extends TSqlFragmentBase {
  $type: "TSqlScript";
  batches?: TSqlBatch[];
  trailingGoCount?: number;
}

export interface TSqlStatement extends TSqlFragmentBase {
}

export interface TSqlStatementSnippet extends TSqlStatement {
  $type: "TSqlStatementSnippet";
  script?: string | null;
}

export interface TableClusteredIndexType extends TableIndexType {
  $type: "TableClusteredIndexType";
  columns?: ColumnWithSortOrder[];
  columnStore?: boolean;
  orderedColumns?: ColumnReferenceExpression[];
}

export interface TableDataCompressionOption extends TableOption {
  $type: "TableDataCompressionOption";
  dataCompressionOption?: DataCompressionOption | null;
}

export interface TableDefinition extends TSqlFragmentBase {
  $type: "TableDefinition";
  columnDefinitions?: ColumnDefinition[];
  tableConstraints?: ConstraintDefinition[];
  indexes?: IndexDefinition[];
  systemTimePeriod?: SystemTimePeriodDefinition | null;
}

export interface TableDistributionOption extends TableOption {
  $type: "TableDistributionOption";
  value?: TableDistributionPolicy | null;
}

export interface TableDistributionPolicy extends TSqlFragmentBase {
}

export interface TableHashDistributionPolicy extends TableDistributionPolicy {
  $type: "TableHashDistributionPolicy";
  distributionColumn?: Identifier | null;
  distributionColumns?: Identifier[];
}

export interface TableHint extends TSqlFragmentBase {
  $type: "TableHint";
  hintKind?: TableHintKind;
}

export interface TableHintsOptimizerHint extends Omit<OptimizerHint, "$type"> {
  $type: "TableHintsOptimizerHint";
  objectName?: SchemaObjectName | null;
  tableHints?: TableHint[];
}

export interface TableIndexOption extends TableOption {
  $type: "TableIndexOption";
  value?: TableIndexType | null;
}

export interface TableIndexType extends TSqlFragmentBase {
}

export interface TableNonClusteredIndexType extends TableIndexType {
  $type: "TableNonClusteredIndexType";
}

export interface TableOption extends TSqlFragmentBase {
  optionKind?: TableOptionKind;
}

export interface TablePartitionOption extends TableOption {
  $type: "TablePartitionOption";
  partitionColumn?: Identifier | null;
  partitionOptionSpecs?: TablePartitionOptionSpecifications | null;
}

export interface TablePartitionOptionSpecifications extends PartitionSpecifications {
  $type: "TablePartitionOptionSpecifications";
  range?: PartitionTableOptionRange;
  boundaryValues?: ScalarExpression[];
}

export interface TableReference extends TSqlFragmentBase {
}

export interface TableReferenceWithAlias extends TableReference {
  alias?: Identifier | null;
  forPath?: boolean;
}

export interface TableReferenceWithAliasAndColumns extends TableReferenceWithAlias {
  columns?: Identifier[];
}

export interface TableReplicateDistributionPolicy extends TableDistributionPolicy {
  $type: "TableReplicateDistributionPolicy";
}

export interface TableRoundRobinDistributionPolicy extends TableDistributionPolicy {
  $type: "TableRoundRobinDistributionPolicy";
}

export interface TableSampleClause extends TSqlFragmentBase {
  $type: "TableSampleClause";
  system?: boolean;
  sampleNumber?: ScalarExpression | null;
  tableSampleClauseOption?: TableSampleClauseOption;
  repeatSeed?: ScalarExpression | null;
}

export interface TableSwitchOption extends TSqlFragmentBase {
  optionKind?: TableSwitchOptionKind;
}

export interface TableValuedFunctionReturnType extends FunctionReturnType {
  $type: "TableValuedFunctionReturnType";
  declareTableVariableBody?: DeclareTableVariableBody | null;
}

export interface TableXmlCompressionOption extends TableOption {
  $type: "TableXmlCompressionOption";
  xmlCompressionOption?: XmlCompressionOption | null;
}

export interface TargetDeclaration extends TSqlFragmentBase {
  $type: "TargetDeclaration";
  objectName?: EventSessionObjectName | null;
  targetDeclarationParameters?: EventDeclarationSetParameter[];
}

export interface TargetRecoveryTimeDatabaseOption extends Omit<DatabaseOption, "$type"> {
  $type: "TargetRecoveryTimeDatabaseOption";
  recoveryTime?: Literal | null;
  unit?: TimeUnit;
}

export interface TemporalClause extends TSqlFragmentBase {
  $type: "TemporalClause";
  temporalClauseType?: TemporalClauseType;
  startTime?: ScalarExpression | null;
  endTime?: ScalarExpression | null;
}

export interface TextModificationStatement extends TSqlStatement {
  bulk?: boolean;
  column?: ColumnReferenceExpression | null;
  textId?: ValueExpression | null;
  timestamp?: Literal | null;
  withLog?: boolean;
}

export interface ThrowStatement extends TSqlStatement {
  $type: "ThrowStatement";
  errorNumber?: ValueExpression | null;
  message?: ValueExpression | null;
  state?: ValueExpression | null;
}

export interface TopRowFilter extends TSqlFragmentBase {
  $type: "TopRowFilter";
  expression?: ScalarExpression | null;
  percent?: boolean;
  withTies?: boolean;
  withApproximate?: boolean;
}

export interface TransactionStatement extends TSqlStatement {
  name?: IdentifierOrValueExpression | null;
}

export interface TriggerAction extends TSqlFragmentBase {
  $type: "TriggerAction";
  triggerActionType?: TriggerActionType;
  eventTypeGroup?: EventTypeGroupContainer | null;
}

export interface TriggerObject extends TSqlFragmentBase {
  $type: "TriggerObject";
  name?: SchemaObjectName | null;
  triggerScope?: TriggerScope;
}

export interface TriggerOption extends TSqlFragmentBase {
  $type: "TriggerOption";
  optionKind?: TriggerOptionKind;
}

export interface TriggerStatementBody extends TSqlStatement {
  name?: SchemaObjectName | null;
  triggerObject?: TriggerObject | null;
  options?: TriggerOption[];
  triggerType?: TriggerType;
  triggerActions?: TriggerAction[];
  withAppend?: boolean;
  isNotForReplication?: boolean;
  statementList?: StatementList | null;
  methodSpecifier?: MethodSpecifier | null;
}

export interface TruncateTableStatement extends TSqlStatement {
  $type: "TruncateTableStatement";
  tableName?: SchemaObjectName | null;
  partitionRanges?: CompressionPartitionRange[];
}

export interface TruncateTargetTableSwitchOption extends TableSwitchOption {
  $type: "TruncateTargetTableSwitchOption";
  truncateTarget?: boolean;
}

export interface TryCastCall extends PrimaryExpression {
  $type: "TryCastCall";
  dataType?: DataTypeReference | null;
  parameter?: ScalarExpression | null;
}

export interface TryCatchStatement extends TSqlStatement {
  $type: "TryCatchStatement";
  tryStatements?: StatementList | null;
  catchStatements?: StatementList | null;
}

export interface TryConvertCall extends PrimaryExpression {
  $type: "TryConvertCall";
  dataType?: DataTypeReference | null;
  parameter?: ScalarExpression | null;
  style?: ScalarExpression | null;
}

export interface TryParseCall extends PrimaryExpression {
  $type: "TryParseCall";
  stringValue?: ScalarExpression | null;
  dataType?: DataTypeReference | null;
  culture?: ScalarExpression | null;
}

export interface UnaryExpression extends ScalarExpression {
  $type: "UnaryExpression";
  unaryExpressionType?: UnaryExpressionType;
  expression?: ScalarExpression | null;
}

export interface UniqueConstraintDefinition extends ConstraintDefinition {
  $type: "UniqueConstraintDefinition";
  clustered?: boolean;
  isPrimaryKey?: boolean;
  isEnforced?: boolean;
  columns?: ColumnWithSortOrder[];
  indexOptions?: IndexOption[];
  onFileGroupOrPartitionScheme?: FileGroupOrPartitionScheme | null;
  indexType?: IndexType | null;
  fileStreamOn?: IdentifierOrValueExpression | null;
}

export interface UnpivotedTableReference extends TableReferenceWithAlias {
  $type: "UnpivotedTableReference";
  tableReference?: TableReference | null;
  inColumns?: ColumnReferenceExpression[];
  pivotColumn?: Identifier | null;
  valueColumn?: Identifier | null;
}

export interface UnqualifiedJoin extends JoinTableReference {
  $type: "UnqualifiedJoin";
  unqualifiedJoinType?: UnqualifiedJoinType;
}

export interface UpdateCall extends BooleanExpression {
  $type: "UpdateCall";
  identifier?: Identifier | null;
}

export interface UpdateDeleteSpecificationBase extends DataModificationSpecification {
  fromClause?: FromClause | null;
  whereClause?: WhereClause | null;
}

export interface UpdateForClause extends ForClause {
  $type: "UpdateForClause";
  columns?: ColumnReferenceExpression[];
}

export interface UpdateMergeAction extends MergeAction {
  $type: "UpdateMergeAction";
  setClauses?: SetClause[];
}

export interface UpdateSpecification extends UpdateDeleteSpecificationBase {
  $type: "UpdateSpecification";
  setClauses?: SetClause[];
}

export interface UpdateStatement extends DataModificationStatement {
  $type: "UpdateStatement";
  updateSpecification?: UpdateSpecification | null;
}

export interface UpdateStatisticsStatement extends TSqlStatement {
  $type: "UpdateStatisticsStatement";
  schemaObjectName?: SchemaObjectName | null;
  subElements?: Identifier[];
  statisticsOptions?: StatisticsOption[];
}

export interface UpdateTextStatement extends TextModificationStatement {
  $type: "UpdateTextStatement";
  insertOffset?: ScalarExpression | null;
  deleteLength?: ScalarExpression | null;
  sourceColumn?: ColumnReferenceExpression | null;
  sourceParameter?: ValueExpression | null;
}

export interface UseFederationStatement extends TSqlStatement {
  $type: "UseFederationStatement";
  federationName?: Identifier | null;
  distributionName?: Identifier | null;
  value?: ScalarExpression | null;
  filtering?: boolean;
}

export interface UseHintList extends Omit<OptimizerHint, "$type"> {
  $type: "UseHintList";
  hints?: StringLiteral[];
}

export interface UseStatement extends TSqlStatement {
  $type: "UseStatement";
  databaseName?: Identifier | null;
}

export interface UserDataTypeReference extends ParameterizedDataTypeReference {
  $type: "UserDataTypeReference";
}

export interface UserDefinedTypeCallTarget extends CallTarget {
  $type: "UserDefinedTypeCallTarget";
  schemaObjectName?: SchemaObjectName | null;
}

export interface UserDefinedTypePropertyAccess extends PrimaryExpression {
  $type: "UserDefinedTypePropertyAccess";
  callTarget?: CallTarget | null;
  propertyName?: Identifier | null;
}

export interface UserLoginOption extends TSqlFragmentBase {
  $type: "UserLoginOption";
  userLoginOptionType?: UserLoginOptionType;
  identifier?: Identifier | null;
}

export interface UserRemoteServiceBindingOption extends RemoteServiceBindingOption {
  $type: "UserRemoteServiceBindingOption";
  user?: Identifier | null;
}

export interface UserStatement extends TSqlStatement {
  name?: Identifier | null;
  userOptions?: PrincipalOption[];
}

export interface ValueExpression extends PrimaryExpression {
}

export interface ValuesInsertSource extends InsertSource {
  $type: "ValuesInsertSource";
  isDefaultValues?: boolean;
  rowValues?: RowValue[];
}

export interface VariableMethodCallTableReference extends TableReferenceWithAliasAndColumns {
  $type: "VariableMethodCallTableReference";
  variable?: VariableReference | null;
  methodName?: Identifier | null;
  parameters?: ScalarExpression[];
}

export interface VariableReference extends ValueExpression {
  $type: "VariableReference";
  name?: string | null;
}

export interface VariableTableReference extends TableReferenceWithAlias {
  $type: "VariableTableReference";
  variable?: VariableReference | null;
}

export interface VariableValuePair extends TSqlFragmentBase {
  $type: "VariableValuePair";
  variable?: VariableReference | null;
  value?: ScalarExpression | null;
  isForUnknown?: boolean;
}

export interface VectorDataTypeReference extends DataTypeReference {
  $type: "VectorDataTypeReference";
  dimension?: IntegerLiteral | null;
  baseType?: Identifier | null;
}

export interface VectorMetricIndexOption extends IndexOption {
  $type: "VectorMetricIndexOption";
  metricType?: VectorMetricType;
}

export interface VectorSearchTableReference extends TableReferenceWithAlias {
  $type: "VectorSearchTableReference";
  table?: TableReferenceWithAlias | null;
  column?: ColumnReferenceExpression | null;
  similarTo?: ScalarExpression | null;
  metric?: StringLiteral | null;
  topN?: ScalarExpression | null;
  forceAnnOnly?: boolean;
}

export interface VectorTypeIndexOption extends IndexOption {
  $type: "VectorTypeIndexOption";
  vectorType?: VectorIndexType;
}

export interface ViewDistributionOption extends Omit<ViewOption, "$type"> {
  $type: "ViewDistributionOption";
  value?: ViewDistributionPolicy | null;
}

export interface ViewDistributionPolicy extends TSqlFragmentBase {
}

export interface ViewForAppendOption extends Omit<ViewOption, "$type"> {
  $type: "ViewForAppendOption";
}

export interface ViewHashDistributionPolicy extends ViewDistributionPolicy {
  $type: "ViewHashDistributionPolicy";
  distributionColumn?: Identifier | null;
  distributionColumns?: Identifier[];
}

export interface ViewOption extends TSqlFragmentBase {
  $type: "ViewOption";
  optionKind?: ViewOptionKind;
}

export interface ViewRoundRobinDistributionPolicy extends ViewDistributionPolicy {
  $type: "ViewRoundRobinDistributionPolicy";
}

export interface ViewStatementBody extends TSqlStatement {
  schemaObjectName?: SchemaObjectName | null;
  columns?: Identifier[];
  viewOptions?: ViewOption[];
  selectStatement?: SelectStatement | null;
  withCheckOption?: boolean;
  isMaterialized?: boolean;
}

export interface WaitAtLowPriorityOption extends IndexOption {
  $type: "WaitAtLowPriorityOption";
  options?: LowPriorityLockWaitOption[];
}

export interface WaitForStatement extends TSqlStatement {
  $type: "WaitForStatement";
  waitForOption?: WaitForOption;
  parameter?: ValueExpression | null;
  timeout?: ScalarExpression | null;
  statement?: WaitForSupportedStatement | null;
}

export interface WaitForSupportedStatement extends TSqlStatement {
}

export interface WhenClause extends TSqlFragmentBase {
  thenExpression?: ScalarExpression | null;
}

export interface WhereClause extends TSqlFragmentBase {
  $type: "WhereClause";
  searchCondition?: BooleanExpression | null;
  cursor?: CursorId | null;
}

export interface WhileStatement extends TSqlStatement {
  $type: "WhileStatement";
  predicate?: BooleanExpression | null;
  statement?: TSqlStatement | null;
}

export interface WindowClause extends TSqlFragmentBase {
  $type: "WindowClause";
  windowDefinition?: WindowDefinition[];
}

export interface WindowDefinition extends TSqlFragmentBase {
  $type: "WindowDefinition";
  windowName?: Identifier | null;
  refWindowName?: Identifier | null;
  partitions?: ScalarExpression[];
  orderByClause?: OrderByClause | null;
  windowFrameClause?: WindowFrameClause | null;
}

export interface WindowDelimiter extends TSqlFragmentBase {
  $type: "WindowDelimiter";
  windowDelimiterType?: WindowDelimiterType;
  offsetValue?: ScalarExpression | null;
}

export interface WindowFrameClause extends TSqlFragmentBase {
  $type: "WindowFrameClause";
  top?: WindowDelimiter | null;
  bottom?: WindowDelimiter | null;
  windowFrameType?: WindowFrameType;
}

export interface WindowsCreateLoginSource extends CreateLoginSource {
  $type: "WindowsCreateLoginSource";
  options?: PrincipalOption[];
}

export interface WithCtesAndXmlNamespaces extends TSqlFragmentBase {
  $type: "WithCtesAndXmlNamespaces";
  xmlNamespaces?: XmlNamespaces | null;
  commonTableExpressions?: CommonTableExpression[];
  changeTrackingContext?: ValueExpression | null;
}

export interface WithinGroupClause extends TSqlFragmentBase {
  $type: "WithinGroupClause";
  orderByClause?: OrderByClause | null;
  hasGraphPath?: boolean;
}

export interface WitnessDatabaseOption extends Omit<DatabaseOption, "$type"> {
  $type: "WitnessDatabaseOption";
  witnessServer?: Literal | null;
  isOff?: boolean;
}

export interface WlmTimeLiteral extends TSqlFragmentBase {
  $type: "WlmTimeLiteral";
  timeString?: StringLiteral | null;
}

export interface WorkloadClassifierOption extends TSqlFragmentBase {
  optionType?: WorkloadClassifierOptionType;
}

export interface WorkloadClassifierStatement extends TSqlStatement {
  classifierName?: Identifier | null;
  options?: WorkloadClassifierOption[];
}

export interface WorkloadGroupImportanceParameter extends WorkloadGroupParameter {
  $type: "WorkloadGroupImportanceParameter";
  parameterValue?: ImportanceParameterType;
}

export interface WorkloadGroupParameter extends TSqlFragmentBase {
  parameterType?: WorkloadGroupParameterType;
}

export interface WorkloadGroupResourceParameter extends WorkloadGroupParameter {
  $type: "WorkloadGroupResourceParameter";
  parameterValue?: Literal | null;
}

export interface WorkloadGroupStatement extends TSqlStatement {
  name?: Identifier | null;
  workloadGroupParameters?: WorkloadGroupParameter[];
  poolName?: Identifier | null;
  externalPoolName?: Identifier | null;
}

export interface WriteTextStatement extends TextModificationStatement {
  $type: "WriteTextStatement";
  sourceParameter?: ValueExpression | null;
}

export interface WsdlPayloadOption extends PayloadOption {
  $type: "WsdlPayloadOption";
  isNone?: boolean;
  value?: Literal | null;
}

export interface XmlCompressionOption extends IndexOption {
  $type: "XmlCompressionOption";
  isCompressed?: XmlCompressionOptionState;
  partitionRanges?: CompressionPartitionRange[];
}

export interface XmlDataTypeReference extends DataTypeReference {
  $type: "XmlDataTypeReference";
  xmlDataTypeOption?: XmlDataTypeOption;
  xmlSchemaCollection?: SchemaObjectName | null;
}

export interface XmlForClause extends ForClause {
  $type: "XmlForClause";
  options?: XmlForClauseOption[];
}

export interface XmlForClauseOption extends ForClause {
  $type: "XmlForClauseOption";
  optionKind?: XmlForClauseOptions;
  value?: Literal | null;
}

export interface XmlNamespaces extends TSqlFragmentBase {
  $type: "XmlNamespaces";
  xmlNamespacesElements?: XmlNamespacesElement[];
}

export interface XmlNamespacesAliasElement extends XmlNamespacesElement {
  $type: "XmlNamespacesAliasElement";
  identifier?: Identifier | null;
}

export interface XmlNamespacesDefaultElement extends XmlNamespacesElement {
  $type: "XmlNamespacesDefaultElement";
}

export interface XmlNamespacesElement extends TSqlFragmentBase {
  string?: StringLiteral | null;
}

export type TSqlFragment = AIAnalyzeSentimentFunctionCall | AIClassifyFunctionCall | AIExtractFunctionCall | AIFixGrammarFunctionCall | AIGenerateChunksTableReference | AIGenerateEmbeddingsFunctionCall | AIGenerateFixedChunksTableReference | AIGenerateResponseFunctionCall | AISummarizeFunctionCall | AITranslateFunctionCall | AcceleratedDatabaseRecoveryDatabaseOption | AdHocDataSource | AdHocTableReference | AddAlterFullTextIndexAction | AddFileSpec | AddMemberAlterRoleAction | AddSearchPropertyListAction | AddSensitivityClassificationStatement | AddSignatureStatement | AlgorithmKeyOption | AlterApplicationRoleStatement | AlterAssemblyStatement | AlterAsymmetricKeyStatement | AlterAuthorizationStatement | AlterAvailabilityGroupAction | AlterAvailabilityGroupFailoverAction | AlterAvailabilityGroupFailoverOption | AlterAvailabilityGroupStatement | AlterBrokerPriorityStatement | AlterCertificateStatement | AlterColumnAlterFullTextIndexAction | AlterColumnEncryptionKeyStatement | AlterCredentialStatement | AlterCryptographicProviderStatement | AlterDatabaseAddFileGroupStatement | AlterDatabaseAddFileStatement | AlterDatabaseAuditSpecificationStatement | AlterDatabaseCollateStatement | AlterDatabaseEncryptionKeyStatement | AlterDatabaseModifyFileGroupStatement | AlterDatabaseModifyFileStatement | AlterDatabaseModifyNameStatement | AlterDatabasePerformCutoverStatement | AlterDatabaseRebuildLogStatement | AlterDatabaseRemoveFileGroupStatement | AlterDatabaseRemoveFileStatement | AlterDatabaseScopedConfigurationClearStatement | AlterDatabaseScopedConfigurationSetStatement | AlterDatabaseSetStatement | AlterDatabaseTermination | AlterEndpointStatement | AlterEventSessionStatement | AlterExternalDataSourceStatement | AlterExternalFunctionStatement | AlterExternalLanguageStatement | AlterExternalLibraryStatement | AlterExternalModelStatement | AlterExternalResourcePoolStatement | AlterFederationStatement | AlterFullTextCatalogStatement | AlterFullTextIndexStatement | AlterFullTextStopListStatement | AlterFunctionStatement | AlterIndexStatement | AlterLoginAddDropCredentialStatement | AlterLoginEnableDisableStatement | AlterLoginOptionsStatement | AlterMasterKeyStatement | AlterMessageTypeStatement | AlterPartitionFunctionStatement | AlterPartitionSchemeStatement | AlterProcedureStatement | AlterQueueStatement | AlterRemoteServiceBindingStatement | AlterResourceGovernorStatement | AlterResourcePoolStatement | AlterRoleStatement | AlterRouteStatement | AlterSchemaStatement | AlterSearchPropertyListStatement | AlterSecurityPolicyStatement | AlterSequenceStatement | AlterServerAuditSpecificationStatement | AlterServerAuditStatement | AlterServerConfigurationBufferPoolExtensionContainerOption | AlterServerConfigurationBufferPoolExtensionOption | AlterServerConfigurationBufferPoolExtensionSizeOption | AlterServerConfigurationDiagnosticsLogMaxSizeOption | AlterServerConfigurationDiagnosticsLogOption | AlterServerConfigurationExternalAuthenticationContainerOption | AlterServerConfigurationExternalAuthenticationOption | AlterServerConfigurationFailoverClusterPropertyOption | AlterServerConfigurationHadrClusterOption | AlterServerConfigurationSetBufferPoolExtensionStatement | AlterServerConfigurationSetDiagnosticsLogStatement | AlterServerConfigurationSetExternalAuthenticationStatement | AlterServerConfigurationSetFailoverClusterPropertyStatement | AlterServerConfigurationSetHadrClusterStatement | AlterServerConfigurationSetSoftNumaStatement | AlterServerConfigurationSoftNumaOption | AlterServerConfigurationStatement | AlterServerRoleStatement | AlterServiceMasterKeyStatement | AlterServiceStatement | AlterSymmetricKeyStatement | AlterTableAddClusterByStatement | AlterTableAddTableElementStatement | AlterTableAlterColumnStatement | AlterTableAlterIndexStatement | AlterTableAlterPartitionStatement | AlterTableChangeTrackingModificationStatement | AlterTableConstraintModificationStatement | AlterTableDropTableElement | AlterTableDropTableElementStatement | AlterTableFileTableNamespaceStatement | AlterTableRebuildStatement | AlterTableSetStatement | AlterTableSwitchStatement | AlterTableTriggerModificationStatement | AlterTriggerStatement | AlterUserStatement | AlterViewStatement | AlterWorkloadGroupStatement | AlterXmlSchemaCollectionStatement | ApplicationRoleOption | AssemblyEncryptionSource | AssemblyName | AssemblyOption | AssignmentSetClause | AsymmetricKeyCreateLoginSource | AtTimeZoneCall | AuditActionGroupReference | AuditActionSpecification | AuditGuidAuditOption | AuditSpecificationPart | AuditTarget | AuthenticationEndpointProtocolOption | AuthenticationPayloadOption | AutoCleanupChangeTrackingOptionDetail | AutoCreateStatisticsDatabaseOption | AutomaticTuningCreateIndexOption | AutomaticTuningDatabaseOption | AutomaticTuningDropIndexOption | AutomaticTuningForceLastGoodPlanOption | AutomaticTuningMaintainIndexOption | AutomaticTuningOption | AvailabilityModeReplicaOption | AvailabilityReplica | BackupCertificateStatement | BackupDatabaseStatement | BackupEncryptionOption | BackupMasterKeyStatement | BackupOption | BackupRestoreFileInfo | BackupServiceMasterKeyStatement | BackupTransactionLogStatement | BackwardsCompatibleDropIndexClause | BeginConversationTimerStatement | BeginDialogStatement | BeginEndAtomicBlockStatement | BeginEndBlockStatement | BeginTransactionStatement | BinaryExpression | BinaryLiteral | BinaryQueryExpression | BooleanBinaryExpression | BooleanComparisonExpression | BooleanExpressionSnippet | BooleanIsNullExpression | BooleanNotExpression | BooleanParenthesisExpression | BooleanTernaryExpression | BoundingBoxParameter | BoundingBoxSpatialIndexOption | BreakStatement | BrokerPriorityParameter | BrowseForClause | BuiltInFunctionTableReference | BulkInsertOption | BulkInsertStatement | BulkOpenRowset | CastCall | CatalogCollationOption | CellsPerObjectSpatialIndexOption | CertificateCreateLoginSource | CertificateOption | ChangeRetentionChangeTrackingOptionDetail | ChangeTableChangesTableReference | ChangeTableVersionTableReference | ChangeTrackingDatabaseOption | ChangeTrackingFullTextIndexOption | CharacterSetPayloadOption | CheckConstraintDefinition | CheckpointStatement | ChildObjectName | ClassifierEndTimeOption | ClassifierImportanceOption | ClassifierMemberNameOption | ClassifierStartTimeOption | ClassifierWlmContextOption | ClassifierWlmLabelOption | ClassifierWorkloadGroupOption | CloseCursorStatement | CloseMasterKeyStatement | CloseSymmetricKeyStatement | ClusterByTableOption | CoalesceExpression | ColumnDefinition | ColumnDefinitionBase | ColumnEncryptionAlgorithmNameParameter | ColumnEncryptionAlgorithmParameter | ColumnEncryptionDefinition | ColumnEncryptionKeyNameParameter | ColumnEncryptionKeyValue | ColumnEncryptionTypeParameter | ColumnMasterKeyEnclaveComputationsParameter | ColumnMasterKeyNameParameter | ColumnMasterKeyPathParameter | ColumnMasterKeyStoreProviderNameParameter | ColumnReferenceExpression | ColumnStorageOptions | ColumnWithSortOrder | CommandSecurityElement80 | CommitTransactionStatement | CommonTableExpression | CompositeGroupingSpecification | CompressionDelayIndexOption | CompressionEndpointProtocolOption | CompressionPartitionRange | ComputeClause | ComputeFunction | ContainmentDatabaseOption | ContinueStatement | ContractMessage | ConvertCall | CopyColumnOption | CopyCredentialOption | CopyOption | CopyStatement | CreateAggregateStatement | CreateApplicationRoleStatement | CreateAssemblyStatement | CreateAsymmetricKeyStatement | CreateAvailabilityGroupStatement | CreateBrokerPriorityStatement | CreateCertificateStatement | CreateColumnEncryptionKeyStatement | CreateColumnMasterKeyStatement | CreateColumnStoreIndexStatement | CreateContractStatement | CreateCredentialStatement | CreateCryptographicProviderStatement | CreateDatabaseAuditSpecificationStatement | CreateDatabaseEncryptionKeyStatement | CreateDatabaseStatement | CreateDefaultStatement | CreateEndpointStatement | CreateEventNotificationStatement | CreateEventSessionStatement | CreateExternalDataSourceStatement | CreateExternalFileFormatStatement | CreateExternalFunctionStatement | CreateExternalLanguageStatement | CreateExternalLibraryStatement | CreateExternalModelStatement | CreateExternalResourcePoolStatement | CreateExternalStreamStatement | CreateExternalStreamingJobStatement | CreateExternalTableStatement | CreateFederationStatement | CreateFullTextCatalogStatement | CreateFullTextIndexStatement | CreateFullTextStopListStatement | CreateFunctionStatement | CreateIndexStatement | CreateJsonIndexStatement | CreateLoginStatement | CreateMasterKeyStatement | CreateMessageTypeStatement | CreateOrAlterExternalFunctionStatement | CreateOrAlterFunctionStatement | CreateOrAlterProcedureStatement | CreateOrAlterTriggerStatement | CreateOrAlterViewStatement | CreatePartitionFunctionStatement | CreatePartitionSchemeStatement | CreateProcedureStatement | CreateQueueStatement | CreateRemoteServiceBindingStatement | CreateResourcePoolStatement | CreateRoleStatement | CreateRouteStatement | CreateRuleStatement | CreateSchemaStatement | CreateSearchPropertyListStatement | CreateSecurityPolicyStatement | CreateSelectiveXmlIndexStatement | CreateSemanticIndexStatement | CreateSequenceStatement | CreateServerAuditSpecificationStatement | CreateServerAuditStatement | CreateServerRoleStatement | CreateServiceStatement | CreateSpatialIndexStatement | CreateStatisticsStatement | CreateSymmetricKeyStatement | CreateSynonymStatement | CreateTableStatement | CreateTriggerStatement | CreateTypeTableStatement | CreateTypeUddtStatement | CreateTypeUdtStatement | CreateUserStatement | CreateVectorIndexStatement | CreateViewStatement | CreateWorkloadClassifierStatement | CreateWorkloadGroupStatement | CreateXmlIndexStatement | CreateXmlSchemaCollectionStatement | CreationDispositionKeyOption | CryptoMechanism | CubeGroupingSpecification | CursorDefaultDatabaseOption | CursorDefinition | CursorId | CursorOption | DWCompatibilityLevelConfigurationOption | DataCompressionOption | DataModificationTableReference | DataRetentionTableOption | DataTypeSequenceOption | DatabaseAuditAction | DatabaseConfigurationClearOption | DatabaseConfigurationSetOption | DatabaseOption | DbccNamedLiteral | DbccOption | DbccStatement | DeallocateCursorStatement | DeclareCursorStatement | DeclareTableVariableBody | DeclareTableVariableStatement | DeclareVariableElement | DeclareVariableStatement | DefaultConstraintDefinition | DefaultLiteral | DelayedDurabilityDatabaseOption | DeleteMergeAction | DeleteSpecification | DeleteStatement | DenyStatement | DenyStatement80 | DeviceInfo | DiskStatement | DiskStatementOption | DistinctPredicate | DropAggregateStatement | DropAlterFullTextIndexAction | DropApplicationRoleStatement | DropAssemblyStatement | DropAsymmetricKeyStatement | DropAvailabilityGroupStatement | DropBrokerPriorityStatement | DropCertificateStatement | DropClusteredConstraintMoveOption | DropClusteredConstraintStateOption | DropClusteredConstraintValueOption | DropClusteredConstraintWaitAtLowPriorityLockOption | DropColumnEncryptionKeyStatement | DropColumnMasterKeyStatement | DropContractStatement | DropCredentialStatement | DropCryptographicProviderStatement | DropDatabaseAuditSpecificationStatement | DropDatabaseEncryptionKeyStatement | DropDatabaseStatement | DropDefaultStatement | DropEndpointStatement | DropEventNotificationStatement | DropEventSessionStatement | DropExternalDataSourceStatement | DropExternalFileFormatStatement | DropExternalLanguageStatement | DropExternalLibraryStatement | DropExternalModelStatement | DropExternalResourcePoolStatement | DropExternalStreamStatement | DropExternalStreamingJobStatement | DropExternalTableStatement | DropFederationStatement | DropFullTextCatalogStatement | DropFullTextIndexStatement | DropFullTextStopListStatement | DropFunctionStatement | DropIndexClause | DropIndexStatement | DropLoginStatement | DropMasterKeyStatement | DropMemberAlterRoleAction | DropMessageTypeStatement | DropPartitionFunctionStatement | DropPartitionSchemeStatement | DropProcedureStatement | DropQueueStatement | DropRemoteServiceBindingStatement | DropResourcePoolStatement | DropRoleStatement | DropRouteStatement | DropRuleStatement | DropSchemaStatement | DropSearchPropertyListAction | DropSearchPropertyListStatement | DropSecurityPolicyStatement | DropSensitivityClassificationStatement | DropSequenceStatement | DropServerAuditSpecificationStatement | DropServerAuditStatement | DropServerRoleStatement | DropServiceStatement | DropSignatureStatement | DropStatisticsStatement | DropSymmetricKeyStatement | DropSynonymStatement | DropTableStatement | DropTriggerStatement | DropTypeStatement | DropUserStatement | DropViewStatement | DropWorkloadClassifierStatement | DropWorkloadGroupStatement | DropXmlSchemaCollectionStatement | DurabilityTableOption | ElasticPoolSpecification | EnableDisableTriggerStatement | EnabledDisabledPayloadOption | EncryptedValueParameter | EncryptionPayloadOption | EndConversationStatement | EndpointAffinity | EventDeclaration | EventDeclarationCompareFunctionParameter | EventDeclarationSetParameter | EventGroupContainer | EventNotificationObjectScope | EventRetentionSessionOption | EventSessionObjectName | EventSessionStatement | EventTypeContainer | ExecutableProcedureReference | ExecutableStringList | ExecuteAsClause | ExecuteAsFunctionOption | ExecuteAsProcedureOption | ExecuteAsStatement | ExecuteAsTriggerOption | ExecuteContext | ExecuteInsertSource | ExecuteOption | ExecuteParameter | ExecuteSpecification | ExecuteStatement | ExistsPredicate | ExpressionCallTarget | ExpressionGroupingSpecification | ExpressionWithSortOrder | ExternalCreateLoginSource | ExternalDataSourceLiteralOrIdentifierOption | ExternalFileFormatContainerOption | ExternalFileFormatLiteralOption | ExternalFileFormatUseDefaultTypeOption | ExternalLanguageFileOption | ExternalLibraryFileOption | ExternalModelTypeSpecification | ExternalResourcePoolAffinitySpecification | ExternalResourcePoolParameter | ExternalResourcePoolStatement | ExternalStreamLiteralOrIdentifierOption | ExternalTableColumnDefinition | ExternalTableDistributionOption | ExternalTableLiteralOrIdentifierOption | ExternalTableRejectTypeOption | ExternalTableReplicatedDistributionPolicy | ExternalTableRoundRobinDistributionPolicy | ExternalTableShardedDistributionPolicy | ExtractFromExpression | FailoverModeReplicaOption | FederationScheme | FetchCursorStatement | FetchType | FileDeclaration | FileDeclarationOption | FileEncryptionSource | FileGroupDefinition | FileGroupOrPartitionScheme | FileGrowthFileDeclarationOption | FileNameFileDeclarationOption | FileStreamDatabaseOption | FileStreamOnDropIndexOption | FileStreamOnTableOption | FileStreamRestoreOption | FileTableCollateFileNameTableOption | FileTableConstraintNameTableOption | FileTableDirectoryTableOption | ForceSeekTableHint | ForeignKeyConstraintDefinition | FromClause | FullTextCatalogAndFileGroup | FullTextIndexColumn | FullTextPredicate | FullTextStopListAction | FullTextTableReference | FunctionCall | FunctionCallSetClause | FunctionOption | GeneralSetCommand | GenericConfigurationOption | GetConversationGroupStatement | GlobalFunctionTableReference | GlobalVariableExpression | GoToStatement | GrandTotalGroupingSpecification | GrantStatement | GrantStatement80 | GraphConnectionBetweenNodes | GraphConnectionConstraintDefinition | GraphMatchCompositeExpression | GraphMatchExpression | GraphMatchLastNodePredicate | GraphMatchNodeExpression | GraphMatchPredicate | GraphMatchRecursivePredicate | GraphRecursiveMatchQuantifier | GridParameter | GridsSpatialIndexOption | GroupByClause | GroupingSetsGroupingSpecification | HadrAvailabilityGroupDatabaseOption | HadrDatabaseOption | HavingClause | IIfCall | IPv4 | Identifier | IdentifierAtomicBlockOption | IdentifierDatabaseOption | IdentifierLiteral | IdentifierOrScalarExpression | IdentifierOrValueExpression | IdentifierPrincipalOption | IdentifierSnippet | IdentityFunctionCall | IdentityOptions | IdentityValueKeyOption | IfStatement | IgnoreDupKeyIndexOption | InPredicate | IndexDefinition | IndexExpressionOption | IndexStateOption | IndexTableHint | IndexType | InlineDerivedTable | InlineFunctionOption | InlineResultSetDefinition | InsertBulkColumnDefinition | InsertBulkStatement | InsertMergeAction | InsertSpecification | InsertStatement | IntegerLiteral | InternalOpenRowset | InvokeExternalApiFunctionCall | JoinParenthesisTableReference | JsonForClause | JsonForClauseOption | JsonKeyValue | KeySourceKeyOption | KillQueryNotificationSubscriptionStatement | KillStatement | KillStatsJobStatement | LabelStatement | LedgerOption | LedgerTableOption | LedgerViewOption | LeftFunctionCall | LikePredicate | LineNoStatement | ListTypeCopyOption | ListenerIPEndpointProtocolOption | LiteralAtomicBlockOption | LiteralAuditTargetOption | LiteralAvailabilityGroupOption | LiteralBulkInsertOption | LiteralDatabaseOption | LiteralEndpointProtocolOption | LiteralOpenRowsetCosmosOption | LiteralOptimizerHint | LiteralOptionValue | LiteralPayloadOption | LiteralPrincipalOption | LiteralRange | LiteralReplicaOption | LiteralSessionOption | LiteralStatisticsOption | LiteralTableHint | LocationOption | LockEscalationTableOption | LoginTypePayloadOption | LowPriorityLockWaitAbortAfterWaitOption | LowPriorityLockWaitMaxDurationOption | LowPriorityLockWaitTableSwitchOption | MaxDispatchLatencySessionOption | MaxDopConfigurationOption | MaxDurationOption | MaxLiteral | MaxRolloverFilesAuditTargetOption | MaxSizeAuditTargetOption | MaxSizeDatabaseOption | MaxSizeFileDeclarationOption | MemoryOptimizedTableOption | MemoryPartitionSessionOption | MergeActionClause | MergeSpecification | MergeStatement | MethodSpecifier | MirrorToClause | MoneyLiteral | MoveConversationStatement | MoveRestoreOption | MoveToDropIndexOption | MultiPartIdentifier | MultiPartIdentifierCallTarget | NameFileDeclarationOption | NamedTableReference | NextValueForExpression | NullIfExpression | NullLiteral | NullableConstraintDefinition | NumericLiteral | OdbcConvertSpecification | OdbcFunctionCall | OdbcLiteral | OdbcQualifiedJoinTableReference | OffsetClause | OnFailureAuditOption | OnOffAssemblyOption | OnOffAtomicBlockOption | OnOffAuditTargetOption | OnOffDatabaseOption | OnOffDialogOption | OnOffFullTextCatalogOption | OnOffOptionValue | OnOffPrimaryConfigurationOption | OnOffPrincipalOption | OnOffRemoteServiceBindingOption | OnOffSessionOption | OnOffStatisticsOption | OnlineIndexLowPriorityLockWaitOption | OnlineIndexOption | OpenCursorStatement | OpenJsonTableReference | OpenMasterKeyStatement | OpenQueryTableReference | OpenRowsetColumnDefinition | OpenRowsetCosmos | OpenRowsetCosmosOption | OpenRowsetTableReference | OpenSymmetricKeyStatement | OpenXmlTableReference | OperatorAuditOption | OptimizeForOptimizerHint | OptimizedLockingDatabaseOption | OptimizerHint | OrderBulkInsertOption | OrderByClause | OrderIndexOption | OutputClause | OutputIntoClause | OverClause | PageVerifyDatabaseOption | ParameterizationDatabaseOption | ParameterlessCall | ParenthesisExpression | ParseCall | PartitionFunctionCall | PartitionParameterType | PartitionSpecifier | PartnerDatabaseOption | PasswordAlterPrincipalOption | PasswordCreateLoginSource | Permission | PermissionSetAssemblyOption | PivotedTableReference | PortsEndpointProtocolOption | PredicateSetStatement | PredictTableReference | PrimaryRoleReplicaOption | PrincipalOption | PrintStatement | Privilege80 | PrivilegeSecurityElement80 | ProcedureOption | ProcedureParameter | ProcedureReference | ProcedureReferenceName | ProcessAffinityRange | ProviderEncryptionSource | ProviderKeyNameKeyOption | QualifiedJoin | QueryDerivedTable | QueryParenthesisExpression | QuerySpecification | QueryStoreCapturePolicyOption | QueryStoreDataFlushIntervalOption | QueryStoreDatabaseOption | QueryStoreDesiredStateOption | QueryStoreIntervalLengthOption | QueryStoreMaxPlansPerQueryOption | QueryStoreMaxStorageSizeOption | QueryStoreSizeCleanupPolicyOption | QueryStoreTimeCleanupPolicyOption | QueryStoreWaitStatsCaptureOption | QueueDelayAuditOption | QueueExecuteAsOption | QueueOption | QueueProcedureOption | QueueStateOption | QueueValueOption | RaiseErrorLegacyStatement | RaiseErrorStatement | ReadOnlyForClause | ReadTextStatement | RealLiteral | ReceiveStatement | ReconfigureStatement | RecoveryDatabaseOption | RegexpLikePredicate | RemoteDataArchiveAlterTableOption | RemoteDataArchiveDatabaseOption | RemoteDataArchiveDbCredentialSetting | RemoteDataArchiveDbFederatedServiceAccountSetting | RemoteDataArchiveDbServerSetting | RemoteDataArchiveTableOption | RenameAlterRoleAction | RenameEntityStatement | ResampleStatisticsOption | ResourcePoolAffinitySpecification | ResourcePoolParameter | ResourcePoolStatement | RestoreMasterKeyStatement | RestoreOption | RestoreServiceMasterKeyStatement | RestoreStatement | ResultColumnDefinition | ResultSetDefinition | ResultSetsExecuteOption | RetentionDaysAuditTargetOption | RetentionPeriodDefinition | ReturnStatement | RevertStatement | RevokeStatement | RevokeStatement80 | RightFunctionCall | RolePayloadOption | RollbackTransactionStatement | RollupGroupingSpecification | RouteOption | RowValue | SaveTransactionStatement | ScalarExpressionDialogOption | ScalarExpressionRestoreOption | ScalarExpressionSequenceOption | ScalarExpressionSnippet | ScalarFunctionReturnType | ScalarSubquery | SchemaDeclarationItem | SchemaDeclarationItemOpenjson | SchemaObjectFunctionTableReference | SchemaObjectName | SchemaObjectNameOrValueExpression | SchemaObjectNameSnippet | SchemaObjectResultSetDefinition | SchemaPayloadOption | SearchPropertyListFullTextIndexOption | SearchedCaseExpression | SearchedWhenClause | SecondaryRoleReplicaOption | SecurityPolicyOption | SecurityPredicateAction | SecurityPrincipal | SecurityTargetObject | SecurityTargetObjectName | SecurityUserClause80 | SelectFunctionReturnType | SelectInsertSource | SelectScalarExpression | SelectSetVariable | SelectStarExpression | SelectStatement | SelectStatementSnippet | SelectiveXmlIndexPromotedPath | SemanticIndexChunkOption | SemanticIndexColumn | SemanticTableReference | SendStatement | SensitivityClassificationOption | SequenceOption | ServiceContract | SessionTimeoutPayloadOption | SetCommandStatement | SetErrorLevelStatement | SetFipsFlaggerCommand | SetIdentityInsertStatement | SetOffsetsStatement | SetRowCountStatement | SetSearchPropertyListAlterFullTextIndexAction | SetStatisticsStatement | SetStopListAlterFullTextIndexAction | SetTextSizeStatement | SetTransactionIsolationLevelStatement | SetUserStatement | SetVariableStatement | ShutdownStatement | SimpleAlterFullTextIndexAction | SimpleCaseExpression | SimpleWhenClause | SingleValueTypeCopyOption | SizeFileDeclarationOption | SoapMethod | SourceDeclaration | SpatialIndexRegularOption | SqlCommandIdentifier | SqlDataTypeReference | StateAuditOption | StatementList | StatementListSnippet | StatisticsOption | StatisticsPartitionRange | StopListFullTextIndexOption | StopRestoreOption | StringLiteral | SubqueryComparisonPredicate | SystemTimePeriodDefinition | SystemVersioningTableOption | TSEqualCall | TSqlBatch | TSqlFragmentSnippet | TSqlScript | TSqlStatementSnippet | TableClusteredIndexType | TableDataCompressionOption | TableDefinition | TableDistributionOption | TableHashDistributionPolicy | TableHint | TableHintsOptimizerHint | TableIndexOption | TableNonClusteredIndexType | TablePartitionOption | TablePartitionOptionSpecifications | TableReplicateDistributionPolicy | TableRoundRobinDistributionPolicy | TableSampleClause | TableValuedFunctionReturnType | TableXmlCompressionOption | TargetDeclaration | TargetRecoveryTimeDatabaseOption | TemporalClause | ThrowStatement | TopRowFilter | TriggerAction | TriggerObject | TriggerOption | TruncateTableStatement | TruncateTargetTableSwitchOption | TryCastCall | TryCatchStatement | TryConvertCall | TryParseCall | UnaryExpression | UniqueConstraintDefinition | UnpivotedTableReference | UnqualifiedJoin | UpdateCall | UpdateForClause | UpdateMergeAction | UpdateSpecification | UpdateStatement | UpdateStatisticsStatement | UpdateTextStatement | UseFederationStatement | UseHintList | UseStatement | UserDataTypeReference | UserDefinedTypeCallTarget | UserDefinedTypePropertyAccess | UserLoginOption | UserRemoteServiceBindingOption | ValuesInsertSource | VariableMethodCallTableReference | VariableReference | VariableTableReference | VariableValuePair | VectorDataTypeReference | VectorMetricIndexOption | VectorSearchTableReference | VectorTypeIndexOption | ViewDistributionOption | ViewForAppendOption | ViewHashDistributionPolicy | ViewOption | ViewRoundRobinDistributionPolicy | WaitAtLowPriorityOption | WaitForStatement | WhereClause | WhileStatement | WindowClause | WindowDefinition | WindowDelimiter | WindowFrameClause | WindowsCreateLoginSource | WithCtesAndXmlNamespaces | WithinGroupClause | WitnessDatabaseOption | WlmTimeLiteral | WorkloadGroupImportanceParameter | WorkloadGroupResourceParameter | WriteTextStatement | WsdlPayloadOption | XmlCompressionOption | XmlDataTypeReference | XmlForClause | XmlForClauseOption | XmlNamespaces | XmlNamespacesAliasElement | XmlNamespacesDefaultElement;

export type ParseError = { number: number; offset: number; line: number; column: number; message: string };
export type Token = { type: string; text: string; offset: number; line: number; column: number };
