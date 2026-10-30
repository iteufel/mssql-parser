import { mkdtemp, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { chromium } from "@playwright/test";

const root = resolve(import.meta.dir, "..");
const temp = await mkdtemp(join(tmpdir(), "mssql-parser-package-"));
async function run(command: string[], cwd: string) {
  const child = Bun.spawn(command, { cwd, stdout: "pipe", stderr: "pipe" });
  const [stdout, stderr, code] = await Promise.all([
    new Response(child.stdout).text(),
    new Response(child.stderr).text(),
    child.exited,
  ]);
  if (code !== 0) throw new Error(`${command.join(" ")}\n${stdout}\n${stderr}`);
  return stdout;
}
try {
  await run(["bun", "pm", "pack", "--destination", temp], root);
  const tarball = (await readdir(temp)).find((name) => name.endsWith(".tgz"))!;
  const consumer = join(temp, "consumer");
  await mkdir(consumer);
  await writeFile(
    join(consumer, "package.json"),
    JSON.stringify({
      private: true,
      type: "module",
      dependencies: { "mssql-parser": `file:${join(temp, tarball)}` },
    }),
  );
  await run(["bun", "install", "--ignore-scripts"], consumer);
  await writeFile(
    join(consumer, "server.ts"),
    `
import { parse, generate, tokenize, analyzeSqlReferences } from "mssql-parser";
import { emptyViewGraph } from "mssql-parser/view-graph";
import { strict as assert } from "node:assert";
process.chdir("/");
const result = parse("SELECT Id FROM dbo.Items;");
assert.deepEqual(result.errors, []);
assert.equal(parse(generate(result.ast)).errors.length, 0);
assert.ok(tokenize("SELECT 1;").length > 0);
assert.ok(analyzeSqlReferences(result.ast));
assert.ok(emptyViewGraph());
console.log("Installed package: host resolution and server API passed");
`,
  );
  console.log(await run(["bun", "server.ts"], consumer));
  await writeFile(
    join(consumer, "browser.ts"),
    `
import { initMssqlParser, parse, generate, tokenize } from "mssql-parser";
await initMssqlParser({ assetsPath: "/assets/wasm" });
const result = parse("SELECT Id FROM dbo.Items;");
globalThis.parserResult = { errors: result.errors, roundTrip: parse(generate(result.ast)).errors, tokens: tokenize("SELECT 1;").length };
`,
  );
  const built = await Bun.build({
    entrypoints: [join(consumer, "browser.ts")],
    target: "browser",
    outdir: consumer,
  });
  if (!built.success)
    throw new AggregateError(built.logs, "Browser export did not bundle");
  const packageRoot = join(consumer, "node_modules/mssql-parser");
  const server = Bun.serve({
    port: 0,
    hostname: "127.0.0.1",
    async fetch(request) {
      const path = new URL(request.url).pathname;
      if (path === "/")
        return new Response(
          '<script type="module" src="/browser.js"></script>',
          { headers: { "content-type": "text/html" } },
        );
      if (path === "/browser.js")
        return new Response(Bun.file(join(consumer, "browser.js")));
      if (path === "/worker.js")
        return new Response(
          `import { initMssqlParser, parse } from "/dist/browser.js"; await initMssqlParser({ assetsPath: "/assets/wasm" }); postMessage(parse("SELECT 1;").errors);`,
          { headers: { "content-type": "text/javascript" } },
        );
      const file = resolve(packageRoot, `.${path}`);
      if (
        !file.startsWith(packageRoot + "/") ||
        !(await Bun.file(file).exists())
      )
        return new Response("Not found", { status: 404 });
      return new Response(Bun.file(file));
    },
  });
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    page.on("pageerror", (error) => console.error(error));
    await page.goto(server.url.href);
    await page.waitForFunction(() => "parserResult" in globalThis, undefined, {
      timeout: 60_000,
    });
    const result = await page.evaluate(() => (globalThis as any).parserResult);
    if (result.errors.length || result.roundTrip.length || !result.tokens)
      throw new Error(JSON.stringify(result));
    const workerErrors = await page.evaluate(
      () =>
        new Promise((resolve, reject) => {
          const worker = new Worker("/worker.js", { type: "module" });
          worker.onmessage = (event) => {
            worker.terminate();
            resolve(event.data);
          };
          worker.onerror = (error) => {
            worker.terminate();
            reject(error.message);
          };
        }),
    );
    if (JSON.stringify(workerErrors) !== "[]")
      throw new Error(JSON.stringify(workerErrors));
    console.log(
      "Installed package: browser export, WASM parsing, generation, tokenization and web worker passed",
    );
  } finally {
    await browser.close();
    await server.stop(true);
  }
} finally {
  await rm(temp, { recursive: true, force: true });
}
