import type {
  ColumnReferenceExpression,
  NamedTableReference,
  ProcedureReference,
  TSqlFragment,
  TSqlFragmentBase,
} from "./ast.generated.js";
import { walk } from "./walk.js";

export type SqlOperation = "select" | "insert" | "update" | "delete" | "exec" | "unknown";
export interface SqlTableReference {
  schema: string;
  name: string;
  operation: SqlOperation;
  alias?: string | null;
  offset: number;
  length: number;
}
export interface SqlColumnReference {
  qualifier?: string | null;
  name: string;
  offset: number;
  length: number;
}

/** Extract real object/column references from ScriptDOM, excluding CTE names and wildcards. */
export function analyzeSqlReferences(ast: TSqlFragment | null): {
  tables: SqlTableReference[];
  columns: SqlColumnReference[];
} {
  const tables: SqlTableReference[] = [];
  const columns: SqlColumnReference[] = [];
  const scopes = new WeakMap<SqlTableReference, TSqlFragmentBase>();
  const ancestors: TSqlFragmentBase[] = [];
  walk(ast, {
    enter(node, parent) {
      if (node.$type === "NamedTableReference") {
        const table = node as NamedTableReference;
        const parts = table.schemaObject?.identifiers ?? [];
        const name = parts.at(-1)?.value;
        const schema = parts.at(-2)?.value ?? "dbo";
        const isCte =
          parts.length === 1 &&
          ancestors.some((ancestor) => {
            const clause = (
              ancestor as {
                withCtesAndXmlNamespaces?: { commonTableExpressions?: Array<{ expressionName?: { value?: string } }> };
              }
            ).withCtesAndXmlNamespaces;
            return clause?.commonTableExpressions?.some(
              (cte) => cte.expressionName?.value?.toLowerCase() === name?.toLowerCase(),
            );
          });
        if (name && !isCte) {
          let operation: SqlOperation = "select";
          if (parent && "target" in parent && parent.target === node) {
            if (parent.$type === "InsertSpecification") operation = "insert";
            if (parent.$type === "UpdateSpecification") operation = "update";
            if (parent.$type === "DeleteSpecification") operation = "delete";
          }
          const ref = {
            schema,
            name,
            operation,
            alias: table.alias?.value,
            offset: table.schemaObject?.startOffset ?? 0,
            length: table.schemaObject?.fragmentLength ?? name.length,
          };
          tables.push(ref);
          const scope = [...ancestors]
            .reverse()
            .find((ancestor) =>
              ["InsertSpecification", "UpdateSpecification", "DeleteSpecification", "SelectStatement"].includes(
                ancestor.$type,
              ),
            );
          if (scope) scopes.set(ref, scope);
        }
      } else if (
        node.$type === "ProcedureReference" &&
        ancestors.some((item) => item.$type === "ExecuteSpecification")
      ) {
        const procedure = node as ProcedureReference;
        const parts = procedure.name?.identifiers ?? [];
        const name = parts.at(-1)?.value;
        if (name)
          tables.push({
            schema: parts.at(-2)?.value ?? "dbo",
            name,
            operation: "exec",
            offset: procedure.name?.startOffset ?? 0,
            length: procedure.name?.fragmentLength ?? name.length,
          });
      } else if (node.$type === "ColumnReferenceExpression") {
        const column = node as ColumnReferenceExpression;
        const parts = column.multiPartIdentifier?.identifiers ?? [];
        const identifier = parts.at(-1);
        if (identifier?.value && column.columnType !== "Wildcard") {
          columns.push({
            qualifier: parts.at(-2)?.value,
            name: identifier.value,
            offset: identifier.startOffset ?? 0,
            length: identifier.fragmentLength ?? identifier.value.length,
          });
        }
      }
      ancestors.push(node);
    },
    leave() {
      ancestors.pop();
    },
  });
  // UPDATE/DELETE can use an alias as their target: resolve it to its FROM object.
  for (const table of tables) {
    if (table.operation !== "update" && table.operation !== "delete") continue;
    const source = tables.find(
      (candidate) =>
        candidate.operation === "select" &&
        scopes.get(candidate) === scopes.get(table) &&
        candidate.alias?.toLowerCase() === table.name.toLowerCase(),
    );
    if (source) {
      table.schema = source.schema;
      table.name = source.name;
    }
  }
  return { tables: tables.sort((a, b) => a.offset - b.offset), columns: columns.sort((a, b) => a.offset - b.offset) };
}
