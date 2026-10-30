# mssql-parser

SQL Server T-SQL parsing, SQL generation, tokenization, reference analysis, and editable view graphs backed by Microsoft's ScriptDOM parser. Includes SQL Server 2025 syntax support, generated TypeScript AST types, a precompiled .NET CLI host, and a browser WebAssembly runtime.

## Install

```sh
bun add mssql-parser
```

Server use requires the **.NET 8 runtime** on PATH (`dotnet`). No .NET SDK, compilation, or install scripts are required by consumers. Browser use requires only the packaged WebAssembly assets.

## Server (Bun or Node.js)

```ts
import { parse, generate, collectObjectReferences } from 'mssql-parser';

const result = parse('SELECT Id FROM dbo.Items;');
if (result.ast && result.errors.length === 0) {
  console.log(generate(result.ast));
  console.log(collectObjectReferences(result.ast));
}
```

The host is resolved relative to the installed package, independently of the working directory. Bundled applications can copy `assets/host` from the package and call `initMssqlParser({ runtime: 'cli', assetsPath: '/path/to/host' })` to use that location.

## Browser and web workers

Browser bundlers select the `browser` export automatically. An explicit `mssql-parser/browser` entry is also available. Copy the package's `assets/wasm` directory into your web application's static assets, preserving the `_framework` directory.

```ts
import { initMssqlParser, parse } from 'mssql-parser/browser';

await initMssqlParser({ assetsPath: '/assets/mssql-parser' });
console.log(parse('SELECT 1;'));
```

Serve `.wasm` files with `application/wasm`. The same API works inside module web workers. The browser entry never imports Node built-ins or the CLI host.

## Analysis and view graphs

`analyzeSqlReferences(ast)` collects table/column usage. `sqlToViewGraph(sql)` and `viewDefinitionToPreviewSql(sql)` are available from the server entry. Runtime-independent graph editing and SQL serialization are available through `mssql-parser/view-graph` and can be imported by browser applications without loading the parser runtime. The complete generated AST types are exported through `mssql-parser/ast`.

## Development

Requires Bun 1.4.4 and the .NET 8 SDK (or a compatible newer SDK with the .NET 8 runtime).

```sh
bun install --frozen-lockfile
bun run build
bun test src
bunx --bun playwright install chromium
bun run test:package
```

The build compiles both hosts, regenerates AST types from the pinned ScriptDOM version, and typechecks/emits the JS and declarations. Package validation installs the actual tarball into a clean consumer, then exercises server parsing, browser parsing/generation/tokenization, and a browser module worker.

## Publishing

GitHub Actions builds, tests, and publishes to npm. Publish a GitHub release with a tag matching `package.json` (e.g. `v0.1.0`), or dispatch `publish.yml`. Routine releases authenticate using npm trusted publishing (OIDC), without a token secret.

For the first publish only, dispatch the workflow with `bootstrap=true`. npm requires an existing package before trusted publishing can be configured. Follow the npm browser login/2FA links shown in the job log; sign-in links expire after about five minutes, and the workflow retries with a new link up to three times. Use the newest link in "Sign in to npm for the first publish", then follow any separate approval links in "Publish package" and "Configure trusted publishing for future releases". The workflow publishes the validated package, configures trust for `iteufel/mssql-parser` and `publish.yml`, then logs out after a successful sign-in. Subsequent releases run without this bootstrap step.

## License

MIT. Microsoft ScriptDOM and the bundled .NET browser runtime have their own MIT notices; see `THIRD_PARTY_NOTICES.md`.
