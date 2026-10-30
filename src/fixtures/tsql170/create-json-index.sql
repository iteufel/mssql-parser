CREATE JSON INDEX ix_json
    ON dbo.t (j)
    FOR ('$.a', '$.b');
