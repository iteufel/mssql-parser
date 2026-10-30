SELECT
    TRIM(LEADING 'x' FROM col) AS trimmed,
    SUBSTRING(col, 1) AS rest,
    REGEXP_REPLACE(col, N'\d+', N'#') AS replaced,
    REGEXP_SUBSTR(col, N'[A-Z]+') AS sub,
    REGEXP_INSTR(col, N'[0-9]') AS instr;
