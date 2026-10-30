import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dir, "..");
process.chdir(root);
async function run(command: string[]) {
  const child = Bun.spawn(command, {
    cwd: root,
    stdout: "inherit",
    stderr: "inherit",
  });
  if ((await child.exited) !== 0)
    throw new Error(`Build failed: ${command.join(" ")}`);
}
await rm("dist", { recursive: true, force: true });
await rm("assets", { recursive: true, force: true });
await mkdir("assets", { recursive: true });
// Publish sequentially: these projects share their dotnet/obj directory.
await run([
  "dotnet",
  "publish",
  "dotnet/MssqlParser.Host.csproj",
  "-c",
  "Release",
  "-o",
  "assets/host",
  "--nologo",
  "-p:UseAppHost=false",
]);
await run([
  "dotnet",
  "exec",
  "assets/host/MssqlParser.Host.dll",
  "codegen-ts",
  "src/lib/ast.generated.ts",
]);
await run([
  "dotnet",
  "publish",
  "dotnet/MssqlParser.Wasm.csproj",
  "-c",
  "Release",
  "-o",
  "dotnet/bin/wasm-publish",
  "--nologo",
]);
await cp(
  "dotnet/bin/wasm-publish/wwwroot/_framework",
  "assets/wasm/_framework",
  { recursive: true },
);
await run(["bun", "run", "build:js"]);
