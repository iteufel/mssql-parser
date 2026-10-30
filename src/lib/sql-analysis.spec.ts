import { describe, expect, it } from "bun:test";
import { parse } from "./mssql-parser.js";
import { analyzeSqlReferences } from "./sql-analysis.js";

function analyze(sql: string) {
  const result = parse(sql);
  expect(result.errors).toEqual([]);
  return analyzeSqlReferences(result.ast);
}

describe("ScriptDOM SQL reference analysis", () => {
  it("distinguishes INSERT target writes from source reads and ignores comments and strings", () => {
    const result = analyze(
      "INSERT INTO sales.Target (id) SELECT id FROM dbo.Source; -- EXEC dbo.Fake\nSELECT 'FROM dbo.Fake';",
    );
    expect(result.tables.map(({ schema, name, operation }) => ({ schema, name, operation }))).toEqual([
      { schema: "sales", name: "Target", operation: "insert" },
      { schema: "dbo", name: "Source", operation: "select" },
    ]);
  });
  it("tracks EXEC calls without treating a procedure definition as an invocation", () => {
    const result = analyze("CREATE PROCEDURE custom.Run AS BEGIN EXEC reporting.Refresh; END;");
    expect(result.tables.map(({ schema, name, operation }) => ({ schema, name, operation }))).toEqual([
      { schema: "reporting", name: "Refresh", operation: "exec" },
    ]);
  });
  it("excludes CTE aliases while retaining their underlying table", () => {
    const result = analyze("WITH c AS (SELECT id FROM dbo.Users) SELECT c.id FROM c;");
    expect(result.tables.map((table) => table.name)).toEqual(["Users"]);
  });
  it("resolves UPDATE aliases and preserves column identifier offsets", () => {
    const sql = "UPDATE u SET [name] = 'x' FROM dbo.Users AS u WHERE u.[id] = 1;";
    const result = analyze(sql);
    expect(result.tables).toContainEqual(
      expect.objectContaining({ schema: "dbo", name: "Users", operation: "update" }),
    );
    const id = result.columns.find((column) => column.name === "id")!;
    expect(sql.slice(id.offset, id.offset + id.length)).toBe("[id]");
  });
});
