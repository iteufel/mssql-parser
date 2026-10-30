SELECT a || b AS concat
FROM t
WHERE REGEXP_LIKE(a, N'x');
