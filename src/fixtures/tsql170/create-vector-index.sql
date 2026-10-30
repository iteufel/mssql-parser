CREATE VECTOR INDEX ix_vector
    ON dbo.t (v)
    WITH (METRIC = 'cosine', TYPE = 'DiskANN');
