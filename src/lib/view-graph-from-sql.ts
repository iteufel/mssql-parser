/*
 * Copyright (C) 2026 MetaCarp GmbH and Allan Amstadt
 * SPDX-License-Identifier: MIT
 * Written by Allan Amstadt <a.amstadt@metacarp.de>, 2026
 */

import type {
  AlterViewStatement,
  BooleanComparisonType,
  ColumnReferenceExpression,
  CreateOrAlterViewStatement,
  CreateViewStatement,
  Identifier,
  MultiPartIdentifier,
  NamedTableReference,
  QuerySpecification,
  ScalarExpression,
  SelectStatement,
  TSqlFragmentBase,
} from "./ast.generated.js";
import { parse, generate } from "./mssql-parser.js";
import {
  emptyViewGraph,
  VIEW_AGGREGATES,
  quoteSqlIdent,
  type ViewAggregate,
  type ViewGraphQuery,
  type ViewComparisonType,
  type ViewGraph,
  type ViewGraphJoin,
  type ViewGraphJoinCondition,
  type ViewGraphParseResult,
  type ViewGraphSelectColumn,
  type ViewGraphTable,
  type ViewGraphWhereClause,
  type ViewJoinType,
} from "./view-graph-model.js";

type AnyNode = TSqlFragmentBase & Record<string, unknown>;

export function sqlToViewGraph(sql: string): ViewGraphParseResult {
  const parsed = parse(sql);
  if (!parsed.ast) {
    return {
      graph: emptyViewGraph(),
      supported: false,
      unsupportedReason: "Die View-Definition konnte nicht geparst werden.",
      errors: parsed.errors,
    };
  }
  const extracted = extractViewGraph(parsed.ast, sql);
  return {
    ...extracted,
    errors: parsed.errors,
    supported: extracted.supported && parsed.errors.length === 0,
  };
}

export type DerivedTableColumnSource =
  { kind: "names"; names: string[] } | { kind: "star"; schema: string; name: string } | { kind: "unknown" };

export function derivedTableColumnSource(source: string): DerivedTableColumnSource {
  const inner = unwrapDerivedSource(source);
  if (!inner) {
    return { kind: "unknown" };
  }
  const parsed = parse(inner);
  if (!parsed.ast) {
    return { kind: "unknown" };
  }
  const query = findFirstQuerySpecification(parsed.ast as AnyNode);
  return query ? columnSourceFromQuery(query) : { kind: "unknown" };
}

function columnSourceFromQuery(query: QuerySpecification): DerivedTableColumnSource {
  const names: string[] = [];
  let starFrom: { schema: string; name: string } | undefined;
  for (const element of query.selectElements ?? []) {
    const node = element as AnyNode;
    if (node.$type === "SelectStarExpression") {
      const named = firstNamedTable(query.fromClause?.tableReferences?.[0] as AnyNode | undefined);
      if (named) {
        starFrom = named;
      }
      continue;
    }
    if (node.$type === "SelectScalarExpression") {
      const alias =
        (node.columnName as { value?: string; identifier?: Identifier } | undefined)?.value ||
        (node.columnName as { identifier?: Identifier } | undefined)?.identifier?.value ||
        "";
      const columnRef = columnParts(node.expression as ScalarExpression);
      names.push(alias || columnRef?.[columnRef.length - 1] || "");
    }
  }
  const cleaned = names.filter(Boolean);
  if (starFrom) {
    return { kind: "star", schema: starFrom.schema, name: starFrom.name };
  }
  if (cleaned.length > 0) {
    return { kind: "names", names: cleaned };
  }
  return { kind: "unknown" };
}

function unwrapDerivedSource(source: string): string {
  let sql = source.trim();
  while (sql.startsWith("(") && sql.endsWith(")")) {
    sql = sql.slice(1, -1).trim();
  }
  return sql;
}

function findFirstQuerySpecification(node: AnyNode | undefined): QuerySpecification | undefined {
  if (!node) {
    return undefined;
  }
  if (node.$type === "QuerySpecification") {
    return node as unknown as QuerySpecification;
  }
  if (node.$type === "QueryParenthesisExpression") {
    return findFirstQuerySpecification(node.queryExpression as AnyNode);
  }
  if (node.$type === "BinaryQueryExpression") {
    return findFirstQuerySpecification(node.firstQueryExpression as AnyNode);
  }
  if (node.$type === "SelectStatement") {
    return findFirstQuerySpecification(node.queryExpression as AnyNode);
  }
  if (node.$type === "TSqlScript" && Array.isArray(node.batches)) {
    for (const batch of node.batches) {
      const found = findFirstQuerySpecification(batch as AnyNode);
      if (found) {
        return found;
      }
    }
  }
  if (node.$type === "TSqlBatch" && Array.isArray(node.statements)) {
    for (const statement of node.statements) {
      const found = findFirstQuerySpecification(statement as AnyNode);
      if (found) {
        return found;
      }
    }
  }
  return undefined;
}

function firstNamedTable(node: AnyNode | undefined): { schema: string; name: string } | undefined {
  if (!node) {
    return undefined;
  }
  if (node.$type === "NamedTableReference") {
    const parts = identifiersOf((node as unknown as NamedTableReference).schemaObject);
    const name = parts[parts.length - 1];
    if (!name) {
      return undefined;
    }
    return { schema: parts.length > 1 ? parts[parts.length - 2] : "dbo", name };
  }
  if (node.$type === "QualifiedJoin" || node.$type === "UnqualifiedJoin") {
    return (
      firstNamedTable(node.firstTableReference as AnyNode) ?? firstNamedTable(node.secondTableReference as AnyNode)
    );
  }
  if (node.$type === "JoinParenthesisTableReference") {
    return firstNamedTable(node.join as AnyNode);
  }
  return undefined;
}

type SourceReader = ((node: AnyNode | undefined | null) => string) & { raw: (node: AnyNode) => string };
interface QueryRange {
  id: string;
  label: string;
  node: AnyNode;
  start: number;
  end: number;
}

export function extractViewGraph(ast: TSqlFragmentBase, sql = ""): Omit<ViewGraphParseResult, "errors"> {
  if (!sql) {
    const generated = generate(ast as Parameters<typeof generate>[0]);
    const parsed = parse(generated);
    if (parsed.ast) return extractViewGraph(parsed.ast, generated);
  }
  const view = findViewStatement(ast);
  const select = view?.selectStatement ?? findSelectStatement(ast);
  const main = findFirstQuerySpecification(select?.queryExpression as AnyNode | undefined);
  const parts = identifiersOf(view?.schemaObjectName);
  const graph = emptyViewGraph(parts.length > 1 ? parts.at(-2)! : "custom", parts.at(-1) || "new_view");
  if (!main || !select)
    return { graph, supported: false, unsupportedReason: "Die View enthält kein darstellbares SELECT." };
  const ranges: QueryRange[] = [];
  const visit = (node: AnyNode, label = "SELECT") => {
    if (node.$type === "SelectScalarExpression") {
      const name =
        (node.columnName as { value?: string; identifier?: Identifier })?.value ||
        (node.columnName as { identifier?: Identifier })?.identifier?.value;
      if (name) label = `SELECT · ${name}`;
    }
    if (node.$type === "QueryDerivedTable" && (node.alias as Identifier)?.value)
      label = `SELECT · ${(node.alias as Identifier).value}`;
    if (node.$type === "CommonTableExpression") label = `CTE · ${(node.expressionName as Identifier)?.value || ""}`;
    if (node.$type === "BinaryQueryExpression") {
      visit(node.firstQueryExpression as AnyNode, label);
      visit(node.secondQueryExpression as AnyNode, `${node.binaryQueryExpressionType}${node.all ? " ALL" : ""}`);
      return;
    }
    if (node.$type === "QuerySpecification")
      ranges.push({
        id: `q${ranges.length + 1}`,
        label,
        node,
        start: node.startOffset ?? 0,
        end: (node.startOffset ?? 0) + (node.fragmentLength ?? 0),
      });
    for (const value of Object.values(node)) {
      if (value && typeof value === "object" && "$type" in value)
        visit(value as AnyNode, label === "SELECT" && node.$type === "QuerySpecification" ? "Unterabfrage" : label);
      else if (Array.isArray(value))
        for (const item of value)
          if (item && typeof item === "object" && "$type" in item) visit(item as AnyNode, label);
    }
  };
  visit(select as AnyNode);
  const mainRange = ranges.find((range) => range.node === main)!;
  const reader = (owner?: QueryRange): SourceReader =>
    Object.assign(
      (node: AnyNode | undefined | null) => {
        if (!node || !sql) return "";
        const start = node.startOffset ?? 0;
        const end = start + (node.fragmentLength ?? 0);
        let text = sql.slice(start, end);
        // Only replace outermost contained blocks; their own sources carry nested blocks.
        const nested = ranges.filter((range) => range !== owner && range.start >= start && range.end <= end);
        const outer = nested.filter(
          (range) =>
            !nested.some((parent) => parent !== range && parent.start <= range.start && parent.end >= range.end),
        );
        for (const range of outer.sort((a, b) => b.start - a.start))
          text = text.slice(0, range.start - start) + `{{argon-query:${range.id}}}` + text.slice(range.end - start);
        return text.trim();
      },
      { raw: (node: AnyNode) => nodeSql(sql, node) },
    );
  const unsupported: string[] = [];
  Object.assign(graph, queryFromNode(main, reader(mainRange), unsupported));
  graph.mainQueryId = mainRange.id;
  graph.queryBlocks = ranges
    .filter((range) => range !== mainRange)
    .map((range) => ({
      id: range.id,
      label: range.label,
      query: queryFromNode(range.node as unknown as QuerySpecification, reader(range), unsupported),
    }));
  graph.queryTemplate = sql ? reader()(select as AnyNode) : undefined;
  graph.viewColumns = view?.columns?.map((column) => column.value || "");
  graph.viewOptions = view?.viewOptions?.map(
    (option) => nodeSql(sql, option as AnyNode) || String((option as AnyNode).optionKind || ""),
  );
  graph.checkOption = view?.withCheckOption;
  // Resolve CTE column lists without trying to query dbo.<cte> metadata.
  const ctes = select.withCtesAndXmlNamespaces?.commonTableExpressions ?? [];
  for (const query of [graph, ...graph.queryBlocks.map((block) => block.query)]) {
    for (const table of query.tables) {
      const cte = ctes.find(
        (cte) =>
          cte.expressionName?.value?.toLowerCase() === table.name.toLowerCase() &&
          table.source &&
          !table.source.includes("."),
      );
      if (!cte) continue;
      table.kind = "cte";
      const cteQuery = findFirstQuerySpecification(cte.queryExpression as AnyNode);
      const columns = cte.columns?.length
        ? cte.columns.map((column) => column.value || "")
        : cteQuery
          ? columnSourceFromQuery(cteQuery)
          : null;
      if (Array.isArray(columns)) table.columns = columns;
      else if (columns?.kind === "names") table.columns = columns.names;
      else if (columns?.kind === "star") table.starFrom = { schema: columns.schema, name: columns.name };
    }
  }
  return { graph, supported: unsupported.length === 0, unsupportedReason: unsupported[0] || null };
}

function queryFromNode(node: QuerySpecification, read: SourceReader, unsupported: string[]): ViewGraphQuery {
  const tables: ViewGraphTable[] = [];
  const joins: ViewGraphJoin[] = [];
  const templates = (node.fromClause?.tableReferences ?? []).map((ref) =>
    tableReference(ref as AnyNode, tables, joins, read),
  );
  const select = (node.selectElements ?? []).map((element, index) =>
    selectColumn(element as AnyNode, tables, index, read, unsupported),
  );
  const query: ViewGraphQuery = {
    distinct: node.uniqueRowFilter === "Distinct",
    tables,
    joins,
    select,
    where: simpleWhere(node.whereClause?.searchCondition as AnyNode, tables, read),
    whereSql: node.whereClause ? read(node.whereClause as AnyNode).replace(/^WHERE\s+/i, "") : undefined,
    fromTemplate: templates.length ? templates.join(",\n") : undefined,
    groupBy: node.groupByClause?.groupingSpecifications?.map((spec) => read(spec as AnyNode)),
    havingSql: node.havingClause ? read(node.havingClause as AnyNode).replace(/^HAVING\s+/i, "") : undefined,
    orderBy: node.orderByClause?.orderByElements?.map((item) => ({
      expression: read(item.expression as AnyNode),
      direction: item.sortOrder === "Descending" ? "Desc" : "Asc",
    })),
    top: node.topRowFilter
      ? {
          expression: read(node.topRowFilter.expression as AnyNode),
          percent: !!node.topRowFilter.percent,
          withTies: !!node.topRowFilter.withTies,
        }
      : undefined,
    groupByModifier: node.groupByClause?.all
      ? "ALL"
      : node.groupByClause?.groupByOption === "Cube"
        ? "WITH CUBE"
        : node.groupByClause?.groupByOption === "Rollup"
          ? "WITH ROLLUP"
          : undefined,
    windowSql: node.windowClause ? read(node.windowClause as AnyNode) : undefined,
    suffixSql:
      [node.offsetClause, node.forClause]
        .filter(Boolean)
        .map((clause) =>
          clause?.$type === "XmlForClause"
            ? `FOR XML ${read(clause as AnyNode)}`
            : clause?.$type === "JsonForClause"
              ? `FOR JSON ${read(clause as AnyNode)}`
              : read(clause as AnyNode),
        )
        .join("\n") || undefined,
  };
  // Columns used only by filters, ON or ORDER BY must still have diagram ports.
  const visit = (child: AnyNode) => {
    if (child !== node && child.$type === "QuerySpecification") return;
    if (child.$type === "ColumnReferenceExpression") {
      const parts = columnParts(child as ScalarExpression);
      const table = parts && resolveTable(tables, parts.slice(0, -1));
      if (table && parts!.at(-1) !== "*") table.columns = [...new Set([...(table.columns ?? []), parts!.at(-1)!])];
    }
    for (const value of Object.values(child)) {
      if (value && typeof value === "object" && "$type" in value) visit(value as AnyNode);
      else if (Array.isArray(value))
        for (const item of value) if (item && typeof item === "object" && "$type" in item) visit(item as AnyNode);
    }
  };
  visit(node as AnyNode);
  tables.forEach(
    (table, index) => (table.position = { x: 48 + (index % 4) * 340, y: 48 + Math.floor(index / 4) * 380 }),
  );
  return query;
}

function findViewStatement(
  ast: TSqlFragmentBase,
): CreateViewStatement | CreateOrAlterViewStatement | AlterViewStatement | undefined {
  return collectStatements(ast).find((statement) =>
    ["CreateViewStatement", "CreateOrAlterViewStatement", "AlterViewStatement"].includes(statement.$type),
  ) as CreateViewStatement | CreateOrAlterViewStatement | AlterViewStatement | undefined;
}
function findSelectStatement(ast: TSqlFragmentBase): SelectStatement | undefined {
  return collectStatements(ast).find((statement) => statement.$type === "SelectStatement") as
    SelectStatement | undefined;
}
function collectStatements(ast: TSqlFragmentBase): TSqlFragmentBase[] {
  const result: TSqlFragmentBase[] = [];
  const visit = (node: AnyNode) => {
    if (node.$type?.endsWith("Statement")) result.push(node);
    for (const value of Object.values(node)) {
      if (value && typeof value === "object" && "$type" in value) visit(value as AnyNode);
      else if (Array.isArray(value))
        for (const item of value) if (item && typeof item === "object" && "$type" in item) visit(item as AnyNode);
    }
  };
  visit(ast as AnyNode);
  return result;
}

/** Build a lossless FROM tree, rather than flattening nested outer joins. */
function tableReference(node: AnyNode, tables: ViewGraphTable[], joins: ViewGraphJoin[], read: SourceReader): string {
  if (node.$type === "JoinParenthesisTableReference")
    return `(${tableReference(node.join as AnyNode, tables, joins, read)})`;
  if (node.$type === "QualifiedJoin" || node.$type === "UnqualifiedJoin") {
    const left = tableReference(node.firstTableReference as AnyNode, tables, joins, read);
    const leftId = tables.at(-1)!.id;
    const right = tableReference(node.secondTableReference as AnyNode, tables, joins, read);
    const rightId = tables.at(-1)!.id;
    const join: ViewGraphJoin = {
      id: `join-${joins.length + 1}`,
      fromTableId: leftId,
      toTableId: rightId,
      type:
        node.$type === "QualifiedJoin"
          ? (node.qualifiedJoinType as ViewJoinType)
          : node.unqualifiedJoinType === "CrossApply"
            ? "CrossApply"
            : node.unqualifiedJoinType === "OuterApply"
              ? "OuterApply"
              : "Cross",
      on: joinColumns(node.searchCondition as AnyNode, tables),
      conditionSql: node.searchCondition
        ? read({
            ...node,
            startOffset:
              (node.secondTableReference as AnyNode).startOffset! +
              (node.secondTableReference as AnyNode).fragmentLength!,
            fragmentLength:
              node.startOffset! +
              node.fragmentLength! -
              ((node.secondTableReference as AnyNode).startOffset! +
                (node.secondTableReference as AnyNode).fragmentLength!),
          }).replace(/^ON\s+/i, "")
        : undefined,
      hint: node.joinHint && node.joinHint !== "None" ? String(node.joinHint) : undefined,
    };
    joins.push(join);
    return `${left}\n{{argon-join:${join.id}}} ${right}${node.$type === "QualifiedJoin" ? ` ON {{argon-on:${join.id}}}` : ""}`;
  }
  const named = node.$type === "NamedTableReference";
  const parts = identifiersOf(node.schemaObject as NamedTableReference["schemaObject"]);
  const aliasNode = node.alias as Identifier | undefined;
  const alias = aliasNode?.value || parts.at(-1) || `source_${tables.length + 1}`;
  let source = read(node);
  // Remove only the AST alias range, so hints, Unicode and escaped identifiers survive.
  if (aliasNode && named) {
    const fullStart = node.startOffset ?? 0;
    const start = (aliasNode.startOffset ?? 0) - fullStart;
    const end = start + (aliasNode.fragmentLength ?? 0);
    source = source.slice(0, start).replace(/\s+(?:AS\s*)?$/i, "") + source.slice(end);
  } else if (aliasNode) {
    // Derived sources may contain query tokens, so offsets after the SELECT no longer match.
    const escaped = quoteSqlIdent(alias).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const plain = alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    source = source.replace(
      new RegExp(`(?:\\s+AS\\s+|\\s*)(?:${escaped}|${plain}|"${plain}")(?:\\s*\\([^)]*\\))?\\s*$`, "i"),
      "",
    );
  }
  let rawSource = read.raw(node);
  if (aliasNode && !named) {
    const start = (aliasNode.startOffset ?? 0) - (node.startOffset ?? 0);
    if (start >= 0) rawSource = rawSource.slice(0, start).replace(/\s+(?:AS\s*)?$/i, "");
  } else rawSource = source;
  const derivedQuery =
    node.$type === "QueryDerivedTable" ? findFirstQuerySpecification(node.queryExpression as AnyNode) : null;
  const derived = derivedQuery ? columnSourceFromQuery(derivedQuery) : null;
  const table: ViewGraphTable = {
    id: `tbl-${tables.length + 1}`,
    schema: parts.length > 1 ? parts.at(-2)! : "dbo",
    name: parts.at(-1) || alias,
    alias:
      aliasNode || named || node.$type === "QueryDerivedTable" || node.$type === "SchemaObjectFunctionTableReference"
        ? alias
        : "",
    explicitAlias: !!aliasNode,
    source: rawSource || undefined,
    sourceTemplate: source !== rawSource ? source : undefined,
    position: { x: 0, y: 0 },
    kind: named
      ? "table"
      : node.$type === "QueryDerivedTable"
        ? "derived"
        : node.$type === "SchemaObjectFunctionTableReference"
          ? "function"
          : "source",
    columns: (node.columns as Identifier[])?.length
      ? (node.columns as Identifier[]).map((column) => column.value || "")
      : derived?.kind === "names"
        ? derived.names
        : undefined,
    columnAliases: (node.columns as Identifier[])?.length
      ? (node.columns as Identifier[]).map((column) => column.value || "")
      : undefined,
    starFrom: derived?.kind === "star" ? { schema: derived.schema, name: derived.name } : undefined,
  };
  tables.push(table);
  return `{{argon-table:${table.id}}}`;
}
function selectColumn(
  node: AnyNode,
  tables: ViewGraphTable[],
  index: number,
  read: SourceReader,
  unsupported: string[],
): ViewGraphSelectColumn {
  if (node.$type === "SelectStarExpression")
    return {
      id: `col-${index + 1}`,
      tableId: resolveTable(tables, identifiersOf(node.qualifier as MultiPartIdentifier))?.id ?? null,
      column: "*",
      alias: "",
    };
  if (node.$type !== "SelectScalarExpression") {
    unsupported.push("Dieses SELECT-Element kann nur im SQL-Modus bearbeitet werden.");
    return { id: `col-${index + 1}`, tableId: null, column: "expression", alias: "", expression: read(node) };
  }
  const alias =
    (node.columnName as { value?: string; identifier?: Identifier })?.value ||
    (node.columnName as { identifier?: Identifier })?.identifier?.value ||
    "";
  let expression = node.expression as AnyNode;
  const functionName = (expression?.functionName as Identifier)?.value?.toUpperCase();
  const aggregate =
    expression?.$type === "FunctionCall" &&
    VIEW_AGGREGATES.includes(functionName as ViewAggregate) &&
    !expression.overClause &&
    !expression.withinGroupClause &&
    !expression.callTarget
      ? (functionName as ViewAggregate)
      : undefined;
  const distinct = aggregate && expression.uniqueRowFilter === "Distinct";
  if (aggregate) expression = (expression.parameters as AnyNode[])[0];
  const parts = columnParts(expression as ScalarExpression);
  const star = expression?.$type === "ColumnReferenceExpression" && expression.columnType === "Wildcard";
  const column: ViewGraphSelectColumn = {
    id: `col-${index + 1}`,
    tableId: parts ? (resolveTable(tables, parts.slice(0, -1))?.id ?? null) : null,
    column: parts?.at(-1) || (star ? "*" : alias || `expr${index + 1}`),
    alias,
  };
  // Preserve unresolved multipart references rather than reducing them to the last identifier.
  if ((!parts && !star) || (parts && !column.tableId && parts.length > 1)) column.expression = read(expression);
  if (aggregate) {
    column.aggregate = aggregate;
    column.aggregateDistinct = !!distinct;
  }
  return column;
}
function joinColumns(node: AnyNode | undefined, tables: ViewGraphTable[]): ViewGraphJoinCondition[] {
  if (!node) return [];
  if (node.$type === "BooleanParenthesisExpression") return joinColumns(node.expression as AnyNode, tables);
  if (node.$type === "BooleanBinaryExpression")
    return [
      ...joinColumns(node.firstExpression as AnyNode, tables),
      ...joinColumns(node.secondExpression as AnyNode, tables),
    ];
  const left = columnParts(node.firstExpression as ScalarExpression);
  const right = columnParts(node.secondExpression as ScalarExpression);
  const leftTable = left && resolveTable(tables, left.slice(0, -1));
  const rightTable = right && resolveTable(tables, right.slice(0, -1));
  return leftTable && rightTable
    ? [
        {
          leftTableId: leftTable.id,
          leftColumn: left!.at(-1)!,
          rightTableId: rightTable.id,
          rightColumn: right!.at(-1)!,
          comparison: mapComparison(node.comparisonType as BooleanComparisonType),
        },
      ]
    : [];
}
function simpleWhere(node: AnyNode | undefined, tables: ViewGraphTable[], read: SourceReader): ViewGraphWhereClause[] {
  if (!node) return [];
  if (node.$type === "BooleanParenthesisExpression") return simpleWhere(node.expression as AnyNode, tables, read);
  if (node.$type === "BooleanBinaryExpression" && node.binaryExpressionType === "And")
    return [
      ...simpleWhere(node.firstExpression as AnyNode, tables, read),
      ...simpleWhere(node.secondExpression as AnyNode, tables, read),
    ];
  const parts = columnParts(
    (node.$type === "BooleanIsNullExpression" ? node.expression : node.firstExpression) as ScalarExpression,
  );
  if (!parts || !["BooleanIsNullExpression", "BooleanComparisonExpression"].includes(node.$type)) return [];
  return [
    {
      id: `where-${node.startOffset}`,
      tableId: resolveTable(tables, parts.slice(0, -1))?.id ?? null,
      column: parts.at(-1)!,
      comparison:
        node.$type === "BooleanIsNullExpression"
          ? node.isNot
            ? "IsNotNull"
            : "IsNull"
          : mapComparison(node.comparisonType as BooleanComparisonType),
      value: node.secondExpression ? read(node.secondExpression as AnyNode) : "",
    },
  ];
}
function identifiersOf(name: { identifiers?: Identifier[] } | undefined | null): string[] {
  return (name?.identifiers ?? []).map((part) => part.value).filter((value): value is string => !!value);
}
function columnParts(expression: ScalarExpression | undefined | null): string[] | null {
  if (!expression || expression.$type !== "ColumnReferenceExpression") return null;
  const parts = identifiersOf((expression as ColumnReferenceExpression).multiPartIdentifier);
  return parts.length ? parts : null;
}
function resolveTable(tables: ViewGraphTable[], qualifier: string[]): ViewGraphTable | undefined {
  if (!qualifier.length) return tables.length === 1 ? tables[0] : undefined;
  const name = qualifier.at(-1)!.toLowerCase();
  return (
    tables.find((table) => table.alias.toLowerCase() === name) ||
    tables.find(
      (table) =>
        table.name.toLowerCase() === name &&
        (qualifier.length < 2 || table.schema.toLowerCase() === qualifier.at(-2)!.toLowerCase()),
    )
  );
}
function mapComparison(type: BooleanComparisonType | undefined): ViewComparisonType {
  if (["GreaterThan", "LessThan", "GreaterThanOrEqualTo", "LessThanOrEqualTo"].includes(type || ""))
    return type as ViewComparisonType;
  return type === "NotEqualToBrackets" || type === "NotEqualToExclamation" ? "NotEqualToExclamation" : "Equals";
}
function nodeSql(sql: string, node: AnyNode): string {
  return sql.slice(node.startOffset ?? 0, (node.startOffset ?? 0) + (node.fragmentLength ?? 0)).trim();
}

/** Execute an unsaved view as a bounded SELECT, including CTEs and explicit output names. */
export function viewDefinitionToPreviewSql(definition: string, limit = 100): string {
  const parsed = parse(definition);
  if (!parsed.ast || parsed.errors.length) throw new Error(parsed.errors[0]?.message || "Ungültige View-Definition");
  const view = findViewStatement(parsed.ast);
  const select = view?.selectStatement ?? findSelectStatement(parsed.ast);
  if (!select?.queryExpression || select.into) throw new Error("Die Vorschau braucht eine SELECT-Abfrage.");
  const ctes = select.withCtesAndXmlNamespaces ? nodeSql(definition, select.withCtesAndXmlNamespaces as AnyNode) : "";
  const query = nodeSql(definition, select.queryExpression as AnyNode);
  let name = "__argon_view_preview__";
  while (definition.toLowerCase().includes(name.toLowerCase())) name += "_";
  const columns = view?.columns?.length
    ? ` (${view.columns.map((column) => quoteSqlIdent(column.value || "")).join(", ")})`
    : "";
  return `${ctes ? `${ctes},` : "WITH"} ${quoteSqlIdent(name)}${columns} AS (\n${query}\n)\nSELECT TOP (${Math.max(1, Math.min(1000, Math.floor(limit)))}) * FROM ${quoteSqlIdent(name)}`;
}
