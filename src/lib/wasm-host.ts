/*
 * Copyright (C) 2026 MetaCarp GmbH and Allan Amstadt
 * SPDX-License-Identifier: MIT
 * Written by Allan Amstadt <a.amstadt@metacarp.de>, 2026
 */

import { initWasmFromUrl } from "./wasm-runtime.js";
export {
  parseWithWasm,
  generateWithWasm,
  tokenizeWithWasm,
} from "./wasm-runtime.js";

async function resolveDotnetJsUrl(assetsPath?: string): Promise<string> {
  if (typeof window !== "undefined") {
    if (assetsPath) {
      return `${assetsPath.replace(/\/$/, "")}/_framework/dotnet.js`;
    }
    return "/assets/wasm/wwwroot/_framework/dotnet.js";
  }

  const { existsSync } = await import("node:fs");
  const { join } = await import("node:path");
  const { pathToFileURL, fileURLToPath } = await import("node:url");
  const cwd = process.cwd();
  const candidates = [
    assetsPath ? join(assetsPath, "_framework/dotnet.js") : "",
    fileURLToPath(
      new URL("../../assets/wasm/_framework/dotnet.js", import.meta.url),
    ),
    join(cwd, "assets/mssql-parser/_framework/dotnet.js"),
  ].filter(Boolean);

  const found = candidates.find((path) => existsSync(path));
  if (!found) {
    throw new Error(
      "MSSQL parser WASM runtime is missing. Reinstall @iteufel/mssql-parser or supply assetsPath with the packaged WASM files.",
    );
  }
  return pathToFileURL(found).href;
}

export async function initWasm(assetsPath?: string): Promise<void> {
  await initWasmFromUrl(await resolveDotnetJsUrl(assetsPath));
}
