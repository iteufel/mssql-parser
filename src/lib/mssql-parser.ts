/*
 * Copyright (C) 2026 MetaCarp GmbH and Allan Amstadt
 * SPDX-License-Identifier: MIT
 * Written by Allan Amstadt <a.amstadt@metacarp.de>, 2026
 */

import { generateWithCli, parseWithCli, tokenizeWithCli } from "./cli-host.js";
import { generateWithWasm, initWasm, parseWithWasm, tokenizeWithWasm } from "./wasm-host.js";
import type { GenerateOptions, InitOptions, ParseOptions, ParseResult, ParserRuntime } from "./types.js";
import type { Token, TSqlFragment } from "./ast.generated.js";

let runtime: ParserRuntime | undefined;
let assetsPath: string | undefined;

function defaultRuntime(): ParserRuntime {
  return typeof window !== "undefined" ? "wasm" : "cli";
}

export async function initMssqlParser(options: InitOptions = {}): Promise<void> {
  runtime = options.runtime ?? defaultRuntime();
  assetsPath = options.assetsPath;
  if (runtime === "wasm") {
    await initWasm(assetsPath);
  }
}

function requireRuntime(): ParserRuntime {
  if (!runtime) {
    runtime = defaultRuntime();
    if (runtime === "wasm") {
      throw new Error("Call await initMssqlParser({ runtime: 'wasm' }) before using the WASM parser.");
    }
  }
  return runtime;
}

export function parse(sql: string, options: ParseOptions = {}): ParseResult {
  const quotedIdentifier = options.quotedIdentifier ?? true;
  return requireRuntime() === "wasm"
    ? parseWithWasm(sql, quotedIdentifier)
    : parseWithCli(sql, quotedIdentifier, assetsPath);
}

export function generate(ast: TSqlFragment, options?: GenerateOptions): string {
  return requireRuntime() === "wasm" ? generateWithWasm(ast, options) : generateWithCli(ast, options, assetsPath);
}

export function tokenize(sql: string, options: ParseOptions = {}): Token[] {
  const quotedIdentifier = options.quotedIdentifier ?? true;
  const result =
    requireRuntime() === "wasm"
      ? tokenizeWithWasm(sql, quotedIdentifier)
      : tokenizeWithCli(sql, quotedIdentifier, assetsPath);
  return result.tokens;
}

export function isParseOk(result: ParseResult): boolean {
  return !!result.ast && result.errors.length === 0;
}
