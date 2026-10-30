import { describe, it, expect } from "bun:test";
/*
 * Copyright (C) 2026 MetaCarp GmbH and Allan Amstadt
 * SPDX-License-Identifier: MIT
 * Written by Allan Amstadt <a.amstadt@metacarp.de>, 2026
 */

import { sqlToViewGraph, viewDefinitionToPreviewSql, extractViewGraph } from "./view-graph-from-sql.js";
import {
  viewGraphToSql,
  renameViewGraphAlias,
  renameViewGraphCorrelations,
  appendViewGraphSource,
  connectViewGraphFromTemplate,
  refreshViewGraphFromTemplate,
  normalizeViewExpression,
  pruneViewGraphQueries,
} from "./view-graph-model.js";
import { isParseOk, parse } from "./mssql-parser.js";

describe("view graph", () => {
  it("extracts tables, joins and selected columns from a CREATE VIEW", () => {
    const sql = `
CREATE OR ALTER VIEW [custom].[KundenListe] AS
SELECT c.Id, c.Name, o.OrderNr
FROM dbo.Customer c
INNER JOIN sales.Orders o ON c.Id = o.CustomerId
WHERE c.Sperre = 0
`;
    const result = sqlToViewGraph(sql);
    expect(result.errors).toEqual([]);
    expect(result.supported).toBe(true);
    expect(result.graph.name).toBe("KundenListe");
    expect(result.graph.tables.map((table) => table.name)).toEqual(["Customer", "Orders"]);
    expect(result.graph.joins).toHaveLength(1);
    expect(result.graph.joins[0].type).toBe("Inner");
    expect(result.graph.select.map((column) => column.column)).toEqual(["Id", "Name", "OrderNr"]);
    expect(result.graph.where[0]?.column).toBe("Sperre");
  });

  it("extracts SELECT column aliases", () => {
    const result = sqlToViewGraph(`
CREATE VIEW dbo.v AS
SELECT a.Id AS KundenId
FROM dbo.A a
`);
    expect(result.supported).toBe(true);
    expect(result.graph.select[0].column).toBe("Id");
    expect(result.graph.select[0].alias).toBe("KundenId");
  });

  it("round-trips a simple joined view through SQL generation", () => {
    const sql = `
CREATE OR ALTER VIEW [custom].[v] AS
SELECT a.Id, b.Name
FROM dbo.A a
LEFT JOIN dbo.B b ON a.Id = b.AId
`;
    const parsed = sqlToViewGraph(sql);
    expect(resultSupported(parsed)).toBe(true);
    const generated = viewGraphToSql(parsed.graph);
    expect(isParseOk(parse(generated))).toBe(true);
    const again = sqlToViewGraph(generated);
    expect(again.graph.tables.map((table) => table.name)).toEqual(["A", "B"]);
    expect(again.graph.joins[0].type).toBe("LeftOuter");
  });

  it("extracts CROSS APPLY table-valued functions", () => {
    const result = sqlToViewGraph(`
CREATE VIEW dbo.v AS
SELECT a.Id, f.x
FROM dbo.A a
CROSS APPLY dbo.fnX(a.Id) f
`);
    expect(result.errors).toEqual([]);
    expect(result.supported).toBe(true);
    expect(result.graph.joins[0].type).toBe("CrossApply");
    expect(result.graph.tables[1].alias).toBe("f");
    expect(result.graph.tables[1].source).toMatch(/fnX/i);
    const generated = viewGraphToSql(result.graph);
    expect(generated.toUpperCase()).toContain("CROSS APPLY");
    expect(isParseOk(parse(generated))).toBe(true);
  });

  it("extracts CROSS APPLY derived tables", () => {
    const result = sqlToViewGraph(`
CREATE VIEW dbo.v AS
SELECT a.Id, x.n
FROM dbo.A a
CROSS APPLY (SELECT TOP 1 Id AS n FROM dbo.B WHERE B.AId = a.Id) x
`);
    expect(result.supported).toBe(true);
    expect(result.graph.joins[0].type).toBe("CrossApply");
    expect(result.graph.tables[1].alias).toBe("x");
    expect(result.graph.tables[1].source).toContain("SELECT");
  });

  it("exposes inner columns for OUTER APPLY SELECT * derived tables", () => {
    const result = sqlToViewGraph(`
CREATE VIEW dbo.v AS
SELECT a.Id, txt.n
FROM dbo.A a
OUTER APPLY (SELECT TOP 1 * FROM core.B) txt
`);
    expect(result.supported).toBe(true);
    expect(result.graph.tables[1].starFrom).toEqual({ schema: "core", name: "B" });
  });

  it("extracts OUTER APPLY", () => {
    const result = sqlToViewGraph(`
CREATE VIEW dbo.v AS
SELECT a.Id
FROM dbo.A a
OUTER APPLY dbo.B b
`);
    expect(result.supported).toBe(true);
    expect(result.graph.joins[0].type).toBe("OuterApply");
  });

  it("keeps TRY_CONVERT expressions in grafik mode", () => {
    const result = sqlToViewGraph(`
CREATE VIEW dbo.v AS
SELECT TRY_CONVERT(int, a.x) AS n
FROM dbo.A a
`);
    expect(result.errors).toEqual([]);
    expect(result.supported).toBe(true);
    expect(result.graph.select[0].expression?.toUpperCase()).toContain("TRY_CONVERT");
  });

  it("keeps unjoined sources as CROSS JOINs instead of silently losing tables", () => {
    const sql = viewGraphToSql({
      schema: "custom",
      name: "v",
      distinct: false,
      tables: [
        { id: "t1", schema: "dbo", name: "A", alias: "A", position: { x: 0, y: 0 } },
        { id: "t2", schema: "dbo", name: "B", alias: "B", position: { x: 0, y: 0 } },
      ],
      joins: [
        {
          id: "j1",
          type: "Inner",
          fromTableId: "t1",
          toTableId: "t2",
          on: [],
        },
      ],
      select: [{ id: "c1", tableId: "t1", column: "Id", alias: "" }],
      where: [],
    });
    expect(sql.toUpperCase()).not.toContain("1 = 1");
    expect(sql.toUpperCase()).toContain("CROSS JOIN");
    expect(sql.toUpperCase()).not.toContain("[ADRESSEN]");
    expect(sql).toContain("[A]");
    expect(sql).toContain("[B]");
  });

  it("does not force SQL-only mode for placeholder JOIN ON 1 = 1", () => {
    const result = sqlToViewGraph(`
CREATE VIEW dbo.v AS
SELECT a.Id
FROM dbo.A a
INNER JOIN dbo.B b ON 1 = 1
`);
    expect(result.supported).toBe(true);
    expect(result.graph.joins[0]?.on).toEqual([]);
  });

  it("keeps every UNION branch available in the graph", () => {
    const result = sqlToViewGraph("CREATE VIEW dbo.v AS SELECT 1 AS n UNION SELECT 2 AS n");
    expect(result.supported).toBe(true);
    expect(viewGraphToSql(result.graph)).toMatch(/UNION\s+SELECT/i);
  });

  it("round-trips grouped aggregates, DISTINCT arguments, HAVING, TOP and sorting", () => {
    const result = sqlToViewGraph(`CREATE VIEW dbo.totals AS
SELECT TOP (10) WITH TIES a.Category, SUM(a.Amount) AS Total,
AVG(a.Amount) AS Average, COUNT(DISTINCT a.CustomerId) AS Customers
FROM dbo.Sales a GROUP BY a.Category HAVING SUM(a.Amount) > 100
ORDER BY SUM(a.Amount) DESC`);
    expect(result.supported).toBe(true);
    const generated = viewGraphToSql(result.graph);
    expect(generated).toMatch(/COUNT\(DISTINCT/i);
    expect(generated).toMatch(/GROUP BY/i);
    expect(generated).toMatch(/HAVING\s+SUM/i);
    expect(generated).toMatch(/WITH TIES/i);
    expect(generated).toMatch(/ORDER BY/i);
    expect(isParseOk(parse(generated))).toBe(true);
  });

  it("preserves boolean grouping, LIKE, IN, BETWEEN, Unicode and window functions", () => {
    const result = sqlToViewGraph(`CREATE VIEW dbo.v AS
SELECT ROW_NUMBER() OVER (ORDER BY a.Id) AS n, N'Größe' AS label
FROM dbo.A a WHERE (a.Name LIKE N'A%' OR a.Id IN (1, 2))
AND a.Value BETWEEN 3 AND 8 AND NOT (a.Deleted = 1)`);
    expect(result.supported).toBe(true);
    const generated = viewGraphToSql(result.graph);
    expect(generated).toContain("OVER");
    expect(generated).toContain("N'Größe'");
    expect(generated).toContain("LIKE N'A%'");
    expect(generated).toContain("BETWEEN 3 AND 8");
    expect(generated).toContain("NOT");
    expect(isParseOk(parse(generated))).toBe(true);
  });

  it("opens ALTER VIEW and preserves explicit view columns and options", () => {
    const result = sqlToViewGraph(
      `ALTER VIEW dbo.v (Result) WITH SCHEMABINDING AS SELECT a.Id FROM dbo.A a WITH CHECK OPTION`,
    );
    expect(result.supported).toBe(true);
    expect(result.graph.name).toBe("v");
    const generated = viewGraphToSql(result.graph);
    expect(generated).toContain("SCHEMABINDING");
    expect(generated).toContain("CHECK OPTION");
    expect(generated).toContain("[Result]");
    expect(isParseOk(parse(generated))).toBe(true);
  });

  it("preserves CTEs, nested outer joins, table hints and all set-query sources", () => {
    const result = sqlToViewGraph(`CREATE VIEW dbo.v AS
WITH c AS (SELECT Id FROM dbo.A WITH (NOLOCK))
SELECT c.Id FROM c LEFT JOIN (dbo.B b INNER JOIN dbo.C x ON b.Id = x.Id)
ON c.Id = b.Id OR b.Id IS NULL
UNION ALL SELECT Id FROM dbo.D`);
    expect(result.supported).toBe(true);
    const generated = viewGraphToSql(result.graph);
    expect(generated).toContain("NOLOCK");
    expect(generated).toContain("UNION ALL");
    expect(generated).toMatch(/OR.*IS NULL/);
    expect(isParseOk(parse(generated))).toBe(true);
  });

  it("keeps EXISTS, XML, adjacent derived aliases and unaliased object references", () => {
    const result = sqlToViewGraph(`CREATE VIEW dbo.v AS
SELECT dbo.A.Id, (SELECT b.Id FROM dbo.B b FOR XML PATH(''), TYPE) AS xmlData
FROM dbo.A LEFT JOIN (SELECT Id FROM dbo.C)x ON dbo.A.Id = x.Id
WHERE EXISTS (SELECT 1 FROM dbo.D d WHERE d.Id = dbo.A.Id)`);
    const generated = viewGraphToSql(result.graph);
    expect(generated).toContain("FOR XML PATH");
    expect(generated).toContain("WHERE EXISTS");
    expect(generated).not.toContain("dbo.A AS");
    expect(generated).not.toContain(")x AS");
    expect(isParseOk(parse(generated))).toBe(true);
  });


  it("renames expressions and correlated subqueries without changing SQL literals or shadowed aliases", () => {
    const graph = sqlToViewGraph(`CREATE VIEW dbo.v AS SELECT dbo.A.Id,
(SELECT MAX(b.Id) FROM dbo.B b WHERE b.Id = dbo.A.Id) AS correlated,
(SELECT MAX(A.Id) FROM dbo.B A) AS shadowed, N'dbo.A.Id' AS literal
FROM dbo.A WHERE dbo.A.Id > 0`).graph;
    const original = structuredClone(graph.tables[0]);
    renameViewGraphCorrelations(graph, graph, original, "renamed");
    renameViewGraphAlias(graph, original.id, "renamed");
    const generated = viewGraphToSql(graph);
    expect(generated).toContain("dbo.A AS [renamed]");
    expect(generated).toContain("b.Id = [renamed].Id");
    expect(generated).toContain("MAX([A].[Id])");
    expect(generated).toContain("N'dbo.A.Id'");
    expect(generated).not.toContain("dbo.[renamed]");
    expect(isParseOk(parse(generated))).toBe(true);
  });

  it("previews CREATE/ALTER VIEW as a bounded SELECT with CTEs and explicit output names", () => {
    const generated = viewDefinitionToPreviewSql(`ALTER VIEW dbo.v (Output) AS
WITH c AS (SELECT 1 AS n) SELECT n FROM c UNION ALL SELECT 2`);
    expect(generated).not.toMatch(/ALTER VIEW/i);
    expect(generated).toContain("TOP (100)");
    expect(generated).toContain("([Output])");
    expect(generated).toContain("WITH c AS");
    expect(isParseOk(parse(generated))).toBe(true);
    expect(() => viewDefinitionToPreviewSql("DELETE FROM dbo.A")).toThrow();
    expect(() => viewDefinitionToPreviewSql("SELECT Id INTO dbo.Copy FROM dbo.A")).toThrow();
  });

  it("preserves nested outer-join association when adding, connecting and removing sources", () => {
    const graph = sqlToViewGraph(`CREATE VIEW dbo.v AS SELECT a.Id FROM dbo.A a
LEFT JOIN (dbo.B b INNER JOIN dbo.C c ON b.Id = c.Id) ON a.Id = b.Id`).graph;
    const originalJoins = structuredClone(graph.joins);
    const added = { id: "extra", schema: "dbo", name: "D", alias: "d", position: { x: 0, y: 0 } };
    graph.tables.push(added);
    appendViewGraphSource(graph, added.id);
    const connection = {
      id: "extra-join",
      type: "Inner" as const,
      fromTableId: graph.tables[0].id,
      toTableId: added.id,
      on: [
        {
          leftTableId: graph.tables[0].id,
          leftColumn: "Id",
          rightTableId: added.id,
          rightColumn: "Id",
          comparison: "Equals" as const,
        },
      ],
    };
    graph.joins.push(connection);
    connectViewGraphFromTemplate(graph, connection);
    let sql = viewGraphToSql(graph);
    expect(sql).toMatch(/LEFT JOIN\s+\(dbo.B/);
    expect(sql).toContain("INNER JOIN [dbo].[D]");
    expect(graph.joins.slice(0, 2)).toEqual(originalJoins);
    expect(isParseOk(parse(sql))).toBe(true);
    graph.joins = graph.joins.filter((join) => join.id !== connection.id);
    refreshViewGraphFromTemplate(graph);
    expect(viewGraphToSql(graph)).toContain("CROSS JOIN [dbo].[D]");
    graph.tables = graph.tables.filter((table) => table.id !== added.id);
    refreshViewGraphFromTemplate(graph, added.id);
    sql = viewGraphToSql(graph);
    expect(sql).not.toContain("[dbo].[D]");
    expect(sql).toMatch(/LEFT JOIN\s+\(dbo.B/);
    expect(isParseOk(parse(sql))).toBe(true);
  });

  it("keeps query tokens inside SQL strings and comments literal", () => {
    const graph = sqlToViewGraph(
      "CREATE VIEW dbo.v AS SELECT N'{{argon-query:q1}}' AS label -- {{argon-query:q1}}\n",
    ).graph;
    expect(viewGraphToSql(graph)).toContain("N'{{argon-query:q1}}'");
    expect(isParseOk(parse(viewGraphToSql(graph)))).toBe(true);
  });

  it("normalizes identifier spelling while distinguishing SQL string contents", () => {
    expect(normalizeViewExpression("[a].[Id]")).toBe(normalizeViewExpression("A.Id"));
    expect(normalizeViewExpression("N'A B'")).not.toBe(normalizeViewExpression("N'AB'"));
    expect(normalizeViewExpression("'A'")).not.toBe(normalizeViewExpression("'a'"));
  });

  it("keeps sorting added to a UNION branch inside that branch", () => {
    const graph = sqlToViewGraph("CREATE VIEW dbo.v AS SELECT Id FROM dbo.A UNION ALL SELECT Id FROM dbo.B").graph;
    graph.orderBy = [{ expression: "Id", direction: "Desc" }];
    graph.top = { expression: "5", percent: false, withTies: false };
    const generated = viewGraphToSql(graph);
    expect(generated).toMatch(/\(SELECT TOP/);
    expect(generated).toMatch(/ORDER BY Id DESC\)\s*UNION ALL/);
    expect(isParseOk(parse(generated))).toBe(true);
  });

  it("discards detached subqueries and can extract an AST without source text", () => {
    const parsed = parse("CREATE VIEW dbo.v AS SELECT a.Id, (SELECT MAX(Id) FROM dbo.B) AS n FROM dbo.A a");
    const result = extractViewGraph(parsed.ast!);
    expect(result.supported).toBe(true);
    expect(viewGraphToSql(result.graph)).toContain("MAX");
    result.graph.select = result.graph.select.slice(0, 1);
    pruneViewGraphQueries(result.graph);
    expect(result.graph.queryBlocks).toEqual([]);
    expect(isParseOk(parse(viewGraphToSql(result.graph)))).toBe(true);
  });
});

function resultSupported(result: { supported: boolean; errors: unknown[]; unsupportedReason: string | null }): boolean {
  expect(result.errors).toEqual([]);
  return result.supported;
}
