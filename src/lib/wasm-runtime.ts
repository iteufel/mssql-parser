import type { GenerateOptions, ParseResult, TokenizeResult } from "./types.js";
import type { TSqlFragment } from "./ast.generated.js";

type JsExports = {
  Parse: (sql: string, quotedIdentifier: boolean) => string;
  Generate: (astJson: string, optionsJson: string) => string;
  Tokenize: (sql: string, quotedIdentifier: boolean) => string;
};

let wasmExports: JsExports | undefined;

export async function initWasmFromUrl(dotnetJs: string): Promise<void> {
  if (wasmExports) return;
  const module = (await import(/* webpackIgnore: true */ /* @vite-ignore */ dotnetJs)) as {
    dotnet: {
      withDiagnosticTracing: (enabled: boolean) => {
        create: () => Promise<{
          getAssemblyExports: (name: string) => Promise<Record<string, unknown>>;
        }>;
      };
    };
  };

  const runtime = await module.dotnet.withDiagnosticTracing(false).create();
  const assembly = (await runtime.getAssemblyExports("MssqlParser.Wasm")) as {
    Meta?: { MssqlParser?: { JsExports?: JsExports } };
  };
  const exported = assembly.Meta?.MssqlParser?.JsExports;
  if (!exported) {
    throw new Error("MssqlParser.Wasm JS exports were not found (Meta.MssqlParser.JsExports).");
  }
  wasmExports = exported;
}

function requireWasm(): JsExports {
  if (!wasmExports) {
    throw new Error("Call initMssqlParser({ runtime: 'wasm' }) before parse/generate/tokenize.");
  }
  return wasmExports;
}

export function parseWithWasm(sql: string, quotedIdentifier: boolean): ParseResult {
  const payload = JSON.parse(requireWasm().Parse(sql, quotedIdentifier)) as ParseResult;
  return { ast: payload.ast ?? null, errors: payload.errors ?? [] };
}

export function generateWithWasm(ast: TSqlFragment, options: GenerateOptions | undefined): string {
  const payload = JSON.parse(
    requireWasm().Generate(
      JSON.stringify(ast),
      JSON.stringify({
        alignClauseBodies: options?.alignClauseBodies,
        includeSemicolons: options?.includeSemicolons,
        keywordCasing: options?.keywordCasing,
      }),
    ),
  ) as { sql?: string; message?: string };
  if (typeof payload.sql !== "string") {
    throw new Error(payload.message || "WASM generate failed.");
  }
  return payload.sql;
}

export function tokenizeWithWasm(sql: string, quotedIdentifier: boolean): TokenizeResult {
  const payload = JSON.parse(requireWasm().Tokenize(sql, quotedIdentifier)) as TokenizeResult;
  return { tokens: payload.tokens ?? [] };
}
