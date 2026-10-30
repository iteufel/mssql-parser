import { describe, it, expect } from "bun:test";
/*
 * Copyright (C) 2026 MetaCarp GmbH and Allan Amstadt
 * SPDX-License-Identifier: MIT
 * Written by Allan Amstadt <a.amstadt@metacarp.de>, 2026
 */

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { collectObjectReferences } from "./references.js";
import { generate, isParseOk, parse, tokenize } from "./mssql-parser.js";

const fixturesRoot = existsSync(join(process.cwd(), "src/fixtures"))
  ? join(process.cwd(), "src/fixtures")
  : join(process.cwd(), "libs/mssql-parser/src/fixtures");

function readSqlFiles(dir: string): { name: string; sql: string }[] {
  return readdirSync(dir)
    .filter((name) => name.endsWith(".sql"))
    .map((name) => ({ name, sql: readFileSync(join(dir, name), "utf8") }));
}

describe("mssql-parser", () => {
  it("parses SELECT and round-trips through generate", () => {
    const sql = "SELECT 1 AS n FROM dbo.Items WHERE id = 2;";
    const result = parse(sql);
    expect(isParseOk(result)).toBe(true);
    expect(result.ast?.$type).toBe("TSqlScript");

    const generated = generate(result.ast!);
    const again = parse(generated);
    expect(isParseOk(again)).toBe(true);
    expect(generated.toUpperCase()).toContain("SELECT");
  });

  it("reports parse errors", () => {
    const result = parse("SELECT FROM;");
    expect(result.errors.length).toBeGreaterThan(0);
    expect(result.errors[0].message).toMatch(/syntax/i);
  });

  it("tokenizes T-SQL", () => {
    const tokens = tokenize("SELECT 1;");
    expect(tokens.some((token) => token.text.toUpperCase() === "SELECT")).toBe(true);
  });

  it("collects table references", () => {
    const result = parse("SELECT a FROM dbo.Items INNER JOIN other.Rows r ON r.id = Items.id;");
    expect(isParseOk(result)).toBe(true);
    const refs = collectObjectReferences(result.ast);
    expect(refs.some((ref) => ref.name.toLowerCase() === "items")).toBe(true);
    expect(refs.some((ref) => ref.name.toLowerCase() === "rows")).toBe(true);
  });

  for (const fixture of readSqlFiles(join(fixturesRoot, "tsql170"))) {
    it(`parses and round-trips SQL Server 2025 fixture ${fixture.name}`, () => {
      const result = parse(fixture.sql);
      expect(result.errors).toEqual([]);
      expect(result.ast).toBeTruthy();
      const generated = generate(result.ast!);
      const again = parse(generated);
      expect(again.errors).toEqual([]);
    });
  }

  for (const fixture of readSqlFiles(join(fixturesRoot, "corpus"))) {
    it(`parses Argon corpus ${fixture.name}`, () => {
      const result = parse(fixture.sql);
      expect(isParseOk(result)).toBe(true);
      const generated = generate(result.ast!);
      expect(isParseOk(parse(generated))).toBe(true);
    });
  }
});
