/*
 * Copyright (C) 2026 MetaCarp GmbH and Allan Amstadt
 * SPDX-License-Identifier: MIT
 * Written by Allan Amstadt <a.amstadt@metacarp.de>, 2026
 */

import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { GenerateOptions, ParseResult, TokenizeResult } from "./types.js";
import type { TSqlFragment } from "./ast.generated.js";

const DEFAULT_MAX_BUFFER = 64 * 1024 * 1024;
const CLI_TIMEOUT_MS = 30_000;

export function resolveCliHostDll(assetsPath?: string): string {
  const relativeDlls = ["assets/mssql-parser/MssqlParser.Host.dll"];
  const candidates = assetsPath
    ? [join(assetsPath, "MssqlParser.Host.dll")]
    : [
        fileURLToPath(
          new URL("../../assets/host/MssqlParser.Host.dll", import.meta.url),
        ),
      ];
  let dir = process.cwd();
  for (let i = 0; i < 8; i++) {
    for (const relative of relativeDlls) {
      candidates.push(join(dir, relative));
    }
    const parent = dirname(dir);
    if (parent === dir) {
      break;
    }
    dir = parent;
  }

  const found = candidates.find((path) => existsSync(path));
  if (!found) {
    throw new Error(
      "MSSQL parser host is missing. Reinstall @iteufel/mssql-parser or supply assetsPath with the packaged host files.",
    );
  }
  return found;
}

export function invokeCli(request: unknown, assetsPath?: string): string {
  const dll = resolveCliHostDll(assetsPath);
  const result = spawnSync("dotnet", ["exec", dll], {
    input: JSON.stringify(request),
    encoding: "utf8",
    maxBuffer: DEFAULT_MAX_BUFFER,
    timeout: CLI_TIMEOUT_MS,
    killSignal: "SIGKILL",
  });

  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0 && !result.stdout) {
    throw new Error(
      result.stderr || `dotnet exec exited with ${result.status}`,
    );
  }

  const stdout = result.stdout?.trim() ?? "";
  if (!stdout) {
    throw new Error(result.stderr || "MSSQL parser host returned no output.");
  }
  return stdout;
}

export function parseWithCli(
  sql: string,
  quotedIdentifier: boolean,
  assetsPath?: string,
): ParseResult {
  const payload = JSON.parse(
    invokeCli({ op: "parse", sql, quotedIdentifier }, assetsPath),
  ) as ParseResult;
  return { ast: payload.ast ?? null, errors: payload.errors ?? [] };
}

export function generateWithCli(
  ast: TSqlFragment,
  options: GenerateOptions | undefined,
  assetsPath?: string,
): string {
  const payload = JSON.parse(
    invokeCli(
      {
        op: "generate",
        ast,
        options: {
          alignClauseBodies: options?.alignClauseBodies,
          includeSemicolons: options?.includeSemicolons,
          keywordCasing: options?.keywordCasing,
        },
      },
      assetsPath,
    ),
  ) as { sql?: string; message?: string };
  if (typeof payload.sql !== "string") {
    throw new Error(
      payload.message || "MSSQL parser host failed to generate SQL.",
    );
  }
  return payload.sql;
}

export function tokenizeWithCli(
  sql: string,
  quotedIdentifier: boolean,
  assetsPath?: string,
): TokenizeResult {
  const payload = JSON.parse(
    invokeCli({ op: "tokenize", sql, quotedIdentifier }, assetsPath),
  ) as TokenizeResult;
  return { tokens: payload.tokens ?? [] };
}
