/*
 * Copyright (C) 2026 MetaCarp GmbH and Allan Amstadt
 * SPDX-License-Identifier: MIT
 * Written by Allan Amstadt <a.amstadt@metacarp.de>, 2026
 */

import type { ParseError, Token, TSqlFragment, TSqlScript } from "./ast.generated.js";

export type ParserRuntime = "cli" | "wasm";

export interface InitOptions {
  /** Defaults to `wasm` in browsers and `cli` in Node/Bun. */
  runtime?: ParserRuntime;
  /** Directory that contains `MssqlParser.Host.dll` (CLI) or `_framework/dotnet.js` (WASM). */
  assetsPath?: string;
}

export interface ParseOptions {
  quotedIdentifier?: boolean;
}

export interface GenerateOptions {
  sqlVersion?: "Sql170";
  alignClauseBodies?: boolean;
  includeSemicolons?: boolean;
  keywordCasing?: "upper" | "lower" | "pascal";
}

export interface ParseResult {
  ast: TSqlScript | TSqlFragment | null;
  errors: ParseError[];
}

export interface TokenizeResult {
  tokens: Token[];
}
