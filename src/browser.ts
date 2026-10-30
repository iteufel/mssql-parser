/** Browser/worker entry point: never imports the .NET CLI or Node built-ins. */
import {
  initWasmFromUrl,
  parseWithWasm,
  generateWithWasm,
  tokenizeWithWasm,
} from "./lib/wasm-runtime.js";
import type {
  InitOptions,
  ParseOptions,
  ParseResult,
  GenerateOptions,
} from "./lib/types.js";
import type { TSqlFragment } from "./lib/ast.generated.js";

export async function initMssqlParser(
  options: InitOptions = {},
): Promise<void> {
  const root = options.assetsPath ?? "/assets/mssql-parser";
  await initWasmFromUrl(
    new URL(
      `${root.replace(/\/$/, "")}/_framework/dotnet.js`,
      globalThis.location.href,
    ).href,
  );
}
export function parse(sql: string, options: ParseOptions = {}): ParseResult {
  return parseWithWasm(sql, options.quotedIdentifier ?? true);
}
export function generate(ast: TSqlFragment, options?: GenerateOptions): string {
  return generateWithWasm(ast, options);
}
export function tokenize(sql: string, options: ParseOptions = {}) {
  return tokenizeWithWasm(sql, options.quotedIdentifier ?? true).tokens;
}
export function isParseOk(result: ParseResult): boolean {
  return !!result.ast && result.errors.length === 0;
}
export { walk } from "./lib/walk.js";
export { collectObjectReferences } from "./lib/references.js";
export { analyzeSqlReferences } from "./lib/sql-analysis.js";
export type {
  SqlOperation,
  SqlTableReference,
  SqlColumnReference,
} from "./lib/sql-analysis.js";
export type {
  ParseError,
  Token,
  TSqlFragment,
  TSqlScript,
} from "./lib/ast.generated.js";
export type {
  GenerateOptions,
  InitOptions,
  ParseOptions,
  ParseResult,
} from "./lib/types.js";
