/*
 * Copyright (C) 2026 MetaCarp GmbH and Allan Amstadt
 * SPDX-License-Identifier: MIT
 * Written by Allan Amstadt <a.amstadt@metacarp.de>, 2026
 */

export type ViewJoinType = "Inner" | "LeftOuter" | "RightOuter" | "FullOuter" | "Cross" | "CrossApply" | "OuterApply";
export type ViewComparisonType =
  | "Equals"
  | "GreaterThan"
  | "LessThan"
  | "GreaterThanOrEqualTo"
  | "LessThanOrEqualTo"
  | "NotEqualToExclamation"
  | "IsNull"
  | "IsNotNull"
  | "Like"
  | "NotLike"
  | "In"
  | "NotIn"
  | "Between"
  | "NotBetween";
export type ViewAggregate =
  "SUM" | "AVG" | "MIN" | "MAX" | "COUNT" | "COUNT_BIG" | "STDEV" | "STDEVP" | "VAR" | "VARP" | "CHECKSUM_AGG";
export const VIEW_AGGREGATES: ViewAggregate[] = [
  "SUM",
  "AVG",
  "MIN",
  "MAX",
  "COUNT",
  "COUNT_BIG",
  "STDEV",
  "STDEVP",
  "VAR",
  "VARP",
  "CHECKSUM_AGG",
];

export interface ViewGraphPosition {
  x: number;
  y: number;
}
export interface ViewGraphTable {
  id: string;
  schema: string;
  name: string;
  alias: string;
  position: ViewGraphPosition;
  /** Complete FROM source without its alias (including hints / database qualification). */
  source?: string;
  sourceTemplate?: string;
  explicitAlias?: boolean;
  columns?: string[];
  columnAliases?: string[];
  kind?: "table" | "view" | "cte" | "derived" | "function" | "source";
  starFrom?: { schema: string; name: string };
}
export interface ViewGraphJoinCondition {
  leftTableId: string;
  leftColumn: string;
  rightTableId: string;
  rightColumn: string;
  comparison: ViewComparisonType;
}
export interface ViewGraphJoin {
  id: string;
  type: ViewJoinType;
  fromTableId: string;
  toTableId: string;
  on: ViewGraphJoinCondition[];
  /** Boolean expression retained exactly, including OR, literals and subqueries. */
  conditionSql?: string;
  hint?: string;
}
export interface ViewGraphSelectColumn {
  id: string;
  tableId: string | null;
  column: string;
  alias: string;
  expression?: string;
  aggregate?: ViewAggregate;
  aggregateDistinct?: boolean;
  output?: boolean;
}
export interface ViewGraphWhereClause {
  id: string;
  tableId: string | null;
  column: string;
  comparison: ViewComparisonType;
  value: string;
  expression?: string;
}
export interface ViewGraphQuery {
  distinct: boolean;
  tables: ViewGraphTable[];
  joins: ViewGraphJoin[];
  select: ViewGraphSelectColumn[];
  where: ViewGraphWhereClause[];
  whereSql?: string;
  groupBy?: string[];
  havingSql?: string;
  orderBy?: { expression: string; direction: "Asc" | "Desc" }[];
  top?: { expression: string; percent: boolean; withTies: boolean };
  /** Retains nested outer-join association; table and join tokens remain editable. */
  fromTemplate?: string;
  groupByModifier?: string;
  /** OFFSET, WINDOW, FOR and other clauses outside the criteria controls. */
  suffixSql?: string;
  windowSql?: string;
}
export interface ViewGraphQueryBlock {
  id: string;
  label: string;
  query: ViewGraphQuery;
}
export interface ViewGraph extends ViewGraphQuery {
  schema: string;
  name: string;
  /** CTE / UNION / EXCEPT / INTERSECT structure with tokens for each SELECT block. */
  queryTemplate?: string;
  queryBlocks?: ViewGraphQueryBlock[];
  mainQueryId?: string;
  viewColumns?: string[];
  viewOptions?: string[];
  checkOption?: boolean;
}
export interface ViewGraphParseResult {
  graph: ViewGraph;
  supported: boolean;
  unsupportedReason: string | null;
  errors: Array<{ message: string; line?: number; column?: number }>;
}

export const VIEW_COMPARISON_SQL: Record<ViewComparisonType, string> = {
  Equals: "=",
  GreaterThan: ">",
  LessThan: "<",
  GreaterThanOrEqualTo: ">=",
  LessThanOrEqualTo: "<=",
  NotEqualToExclamation: "<>",
  IsNull: "IS NULL",
  IsNotNull: "IS NOT NULL",
  Like: "LIKE",
  NotLike: "NOT LIKE",
  In: "IN",
  NotIn: "NOT IN",
  Between: "BETWEEN",
  NotBetween: "NOT BETWEEN",
};
const JOIN_SQL: Record<ViewJoinType, string> = {
  Inner: "INNER JOIN",
  LeftOuter: "LEFT JOIN",
  RightOuter: "RIGHT JOIN",
  FullOuter: "FULL JOIN",
  Cross: "CROSS JOIN",
  CrossApply: "CROSS APPLY",
  OuterApply: "OUTER APPLY",
};
export function quoteSqlIdent(name: string): string {
  return `[${name.replaceAll("]", "]]")}]`;
}
export function tableRefSql(table: ViewGraphTable): string {
  const source = (table.sourceTemplate || table.source)?.trim();
  const name = source || `${quoteSqlIdent(table.schema)}.${quoteSqlIdent(table.name)}`;
  const alias =
    table.alias &&
    (table.explicitAlias ||
      (source && !["table", "view", "cte"].includes(table.kind || "source")) ||
      table.alias.toLowerCase() !== table.name.toLowerCase())
      ? ` AS ${quoteSqlIdent(table.alias)}`
      : "";
  // SQL Server places table hints after the alias.
  const hint = source?.match(/\s+(WITH\s*\([\s\S]*\))$/i);
  return hint
    ? `${name.slice(0, -hint[0].length)}${alias} ${hint[1]}`
    : `${name}${alias}${table.columnAliases?.length ? ` (${table.columnAliases.map(quoteSqlIdent).join(", ")})` : ""}`;
}
export function emptyViewGraph(schema = "custom", name = "new_view"): ViewGraph {
  return {
    schema,
    name,
    distinct: false,
    tables: [],
    joins: [],
    select: [{ id: "col-1", tableId: null, column: "example", alias: "example", expression: "1" }],
    where: [],
  };
}
export function viewColumnExpressionSql(
  graph: ViewGraphQuery,
  column: ViewGraphSelectColumn,
  aggregate = true,
): string {
  let expression =
    column.expression?.trim() ||
    (column.column === "*"
      ? column.tableId
        ? `${quoteSqlIdent(aliasOf(graph, column.tableId))}.*`
        : "*"
      : column.tableId
        ? `${quoteSqlIdent(aliasOf(graph, column.tableId))}.${quoteSqlIdent(column.column)}`
        : quoteSqlIdent(column.column));
  if (aggregate && column.aggregate) {
    // COUNT(*) cannot be qualified or DISTINCT.
    if (column.column === "*" && !column.expression) expression = "*";
    expression = `${column.aggregate}(${column.aggregateDistinct ? "DISTINCT " : ""}${expression})`;
  }
  return expression;
}
export function viewWhereExpressionSql(graph: ViewGraphQuery): string {
  if (graph.whereSql !== undefined) return graph.whereSql.trim();
  return graph.where
    .map((clause) => {
      const left =
        clause.expression ||
        (clause.tableId
          ? `${quoteSqlIdent(aliasOf(graph, clause.tableId))}.${quoteSqlIdent(clause.column)}`
          : clause.column);
      const operator = VIEW_COMPARISON_SQL[clause.comparison];
      return `${left} ${operator}${clause.comparison === "IsNull" || clause.comparison === "IsNotNull" ? "" : ` ${clause.value}`}`;
    })
    .join("\n  AND ");
}
export function viewJoinConditionSql(graph: ViewGraphQuery, join: ViewGraphJoin): string {
  if (join.conditionSql !== undefined) return join.conditionSql.trim();
  return join.on
    .filter((c) => c.leftColumn && (c.rightColumn || c.comparison === "IsNull" || c.comparison === "IsNotNull"))
    .map((c) => {
      const left = `${quoteSqlIdent(aliasOf(graph, c.leftTableId))}.${quoteSqlIdent(c.leftColumn)}`;
      const right = `${quoteSqlIdent(aliasOf(graph, c.rightTableId))}.${quoteSqlIdent(c.rightColumn)}`;
      return `${left} ${VIEW_COMPARISON_SQL[c.comparison]}${c.comparison === "IsNull" || c.comparison === "IsNotNull" ? "" : ` ${right}`}`;
    })
    .join(" AND ");
}
export function isViewJoinComplete(join: ViewGraphJoin): boolean {
  return (
    ["Cross", "CrossApply", "OuterApply"].includes(join.type) ||
    (join.conditionSql !== undefined
      ? !!join.conditionSql.trim()
      : join.on.some((c) => !!c.leftColumn && !!c.rightColumn))
  );
}
export function viewGraphQueryToSql(graph: ViewGraphQuery): string {
  const columns = graph.select.filter((column) => column.output !== false);
  const select =
    columns
      .map((column) => {
        const expression = viewColumnExpressionSql(graph, column);
        return column.alias && (column.alias !== column.column || column.expression || column.aggregate)
          ? `${expression} AS ${quoteSqlIdent(column.alias)}`
          : expression;
      })
      .join(",\n  ") || (graph.tables.length ? "*" : "1");
  const top = graph.top?.expression?.trim()
    ? `TOP (${graph.top.expression})${graph.top.percent ? " PERCENT" : ""}${graph.top.withTies ? " WITH TIES" : ""} `
    : "";
  const where = viewWhereExpressionSql(graph);
  const group = graph.groupBy?.length
    ? `\nGROUP BY ${graph.groupByModifier === "ALL" ? "ALL " : ""}${graph.groupBy.join(", ")}${graph.groupByModifier && graph.groupByModifier !== "ALL" ? ` ${graph.groupByModifier}` : ""}`
    : "";
  const order = graph.orderBy?.length
    ? `\nORDER BY ${graph.orderBy.map((item) => `${item.expression} ${item.direction === "Desc" ? "DESC" : "ASC"}`).join(", ")}`
    : "";
  return `SELECT ${graph.distinct ? "DISTINCT " : ""}${top}\n  ${select}${fromClauseSql(graph)}${where ? `\nWHERE ${where}` : ""}${group}${graph.havingSql?.trim() ? `\nHAVING ${graph.havingSql.trim()}` : ""}${graph.windowSql ? `\n${graph.windowSql}` : ""}${order}${graph.suffixSql ? `\n${graph.suffixSql}` : ""}`;
}
export function viewGraphToSql(graph: ViewGraph): string {
  const columns = graph.viewColumns?.length ? ` (${graph.viewColumns.map(quoteSqlIdent).join(", ")})` : "";
  const options = graph.viewOptions?.length ? ` WITH ${graph.viewOptions.join(", ")}` : "";
  const query = expandViewGraphSql(graph, graph.queryTemplate || viewGraphQueryToSql(graph));
  return `CREATE OR ALTER VIEW ${quoteSqlIdent(graph.schema || "custom")}.${quoteSqlIdent(graph.name || "new_view")}${columns}${options} AS\n${query}${graph.checkOption ? "\nWITH CHECK OPTION" : ""}\n`;
}
/** Resolve subquery tokens for SQL rendering and editable expression fields. */
export function expandViewGraphSql(graph: ViewGraph, sql: string): string {
  const queries = new Map((graph.queryBlocks ?? []).map((block) => [block.id, block.query]));
  queries.set(graph.mainQueryId || "q1", graph);
  const expand = (sql: string, visiting = new Set<string>()): string =>
    sql.replace(
      /N?'(?:''|[^'])*'|--[^\r\n]*|\/\*[\s\S]*?\*\/|\{\{argon-query:([^}]+)}}/g,
      (token: string, id: string | undefined, offset: number, source: string) => {
        if (!id) return token;
        if (visiting.has(id)) throw new Error("Circular query template");
        const query = queries.get(id);
        if (!query) throw new Error(`Missing query block: ${id}`);
        const expanded = expand(viewGraphQueryToSql(query), new Set([...visiting, id]));
        const setBranch =
          /\b(?:UNION(?:\s+ALL)?|EXCEPT|INTERSECT)\s*$/i.test(source.slice(0, offset)) ||
          /^\s*(?:UNION|EXCEPT|INTERSECT)\b/i.test(source.slice(offset + token.length));
        return query.orderBy?.length && setBranch ? `(${expanded})` : expanded;
      },
    );
  return expand(sql);
}
function aliasOf(graph: ViewGraphQuery, id: string): string {
  const table = graph.tables.find((table) => table.id === id);
  return table?.alias || table?.name || id;
}
function joinTypeSql(join: ViewGraphJoin): string {
  const type = JOIN_SQL[join.type];
  return join.hint && type.endsWith(" JOIN") ? type.replace(" JOIN", ` ${join.hint.toUpperCase()} JOIN`) : type;
}
function fromClauseSql(graph: ViewGraphQuery): string {
  if (!graph.tables.length) return "";
  if (graph.fromTemplate) {
    const sql = graph.fromTemplate.replace(/\{\{argon-(table|join|on):([^}]+)}}/g, (_, kind: string, id: string) => {
      if (kind === "table") {
        const table = graph.tables.find((table) => table.id === id);
        if (!table) throw new Error(`Missing source: ${id}`);
        return tableRefSql(table);
      }
      const join = graph.joins.find((join) => join.id === id);
      if (!join) throw new Error(`Missing join: ${id}`);
      return kind === "join" ? joinTypeSql(join) : viewJoinConditionSql(graph, join);
    });
    return `\nFROM ${sql}`;
  }
  const used = new Set<string>();
  const rendered = new Set<string>();
  const pending = [...graph.tables];
  let sql = "";
  while (pending.length) {
    let found = false;
    for (const join of graph.joins) {
      if (rendered.has(join.id) || !isViewJoinComplete(join)) continue;
      const reverse = used.has(join.toTableId) && !used.has(join.fromTableId);
      if (!used.has(join.fromTableId) && !reverse) continue;
      if (reverse && (join.type === "CrossApply" || join.type === "OuterApply")) continue;
      const next = reverse ? join.fromTableId : join.toTableId;
      const index = pending.findIndex((table) => table.id === next);
      if (index < 0) continue;
      const on = viewJoinConditionSql(graph, join);
      // A predicate cannot reference a source which has not entered the FROM scope yet.
      if (join.on.some((c) => [c.leftTableId, c.rightTableId].some((id) => id !== next && !used.has(id)))) continue;
      const table = pending.splice(index, 1)[0];
      used.add(next);
      rendered.add(join.id);
      const type = reverse
        ? join.type === "LeftOuter"
          ? "RightOuter"
          : join.type === "RightOuter"
            ? "LeftOuter"
            : join.type
        : join.type;
      sql += `\n${joinTypeSql({ ...join, type })} ${tableRefSql(table)}${["Cross", "CrossApply", "OuterApply"].includes(type) ? "" : ` ON ${on}`}`;
      found = true;
      break;
    }
    if (!found) {
      const rootIndex = pending.findIndex(
        (table) =>
          !graph.joins.some(
            (join) => join.toTableId === table.id && !used.has(join.fromTableId) && isViewJoinComplete(join),
          ),
      );
      const table = pending.splice(Math.max(rootIndex, 0), 1)[0];
      sql += `${used.size ? "\nCROSS JOIN" : "\nFROM"} ${tableRefSql(table)}`;
      used.add(table.id);
    }
  }
  return sql;
}

/** Rename qualified identifiers while preserving string literals and SQL comments. */
export function replaceSqlQualifier(sql: string, previous: string, next: string, schema?: string): string {
  const pattern =
    /N?'(?:''|[^'])*'|--[^\r\n]*|\/\*[\s\S]*?\*\/|\[(?:\]\]|[^\]])*\]|"(?:""|[^"])*"|[\p{L}_@#][\p{L}\p{N}_@$#]*/gu;
  const tokens = [...sql.matchAll(pattern)];
  const value = (token: string) =>
    token.startsWith("[")
      ? token.slice(1, -1).replaceAll("]]", "]")
      : token.startsWith('"')
        ? token.slice(1, -1).replaceAll('""', '"')
        : token;
  const edits: { start: number; end: number }[] = [];
  tokens.forEach((token, index) => {
    if (token[0].startsWith("'") || /^N'/i.test(token[0]) || token[0].startsWith("--") || token[0].startsWith("/*"))
      return;
    const start = token.index!;
    const end = start + token[0].length;
    if (value(token[0]).toLowerCase() !== previous.toLowerCase() || !/^\s*\./.test(sql.slice(end))) return;
    let replacementStart = start;
    const preceding = tokens[index - 1];
    if (
      schema &&
      preceding &&
      value(preceding[0]).toLowerCase() === schema.toLowerCase() &&
      /^\s*\.\s*$/.test(sql.slice(preceding.index! + preceding[0].length, start))
    ) {
      replacementStart = preceding.index!;
      const database = tokens[index - 2];
      if (database && /^\s*\.\s*$/.test(sql.slice(database.index! + database[0].length, replacementStart)))
        replacementStart = database.index!;
    }
    edits.push({ start: replacementStart, end });
  });
  for (const edit of edits.reverse()) sql = sql.slice(0, edit.start) + quoteSqlIdent(next) + sql.slice(edit.end);
  return sql;
}
function rewriteQuerySql(query: ViewGraphQuery, replace: (sql: string | undefined) => string | undefined): void {
  for (const column of query.select) column.expression = replace(column.expression);
  for (const clause of query.where) {
    clause.expression = replace(clause.expression);
    clause.value = replace(clause.value)!;
  }
  for (const join of query.joins) join.conditionSql = replace(join.conditionSql);
  for (const source of query.tables) {
    source.source = replace(source.source);
    source.sourceTemplate = replace(source.sourceTemplate);
  }
  query.whereSql = replace(query.whereSql);
  query.havingSql = replace(query.havingSql);
  query.groupBy = query.groupBy?.map((expression) => replace(expression)!);
  query.orderBy = query.orderBy?.map((item) => ({ ...item, expression: replace(item.expression)! }));
  query.suffixSql = replace(query.suffixSql);
  query.windowSql = replace(query.windowSql);
}
export function queryBlockReferences(query: ViewGraphQuery): string[] {
  const { tables, joins, select, where, whereSql, havingSql, groupBy, orderBy, suffixSql, windowSql } = query;
  return [
    ...new Set(
      [
        ...tables.map((table) => table.sourceTemplate || table.source),
        ...joins.map((join) => join.conditionSql),
        ...select.map((column) => column.expression),
        ...where.flatMap((clause) => [clause.expression, clause.value]),
        whereSql,
        havingSql,
        ...(groupBy ?? []),
        ...(orderBy ?? []).map((item) => item.expression),
        suffixSql,
        windowSql,
      ].flatMap((sql) => queryTokens(sql || "")),
    ),
  ];
}
function queryTokens(sql: string): string[] {
  return [...sql.matchAll(/N?'(?:''|[^'])*'|--[^\r\n]*|\/\*[\s\S]*?\*\/|\{\{argon-query:([^}]+)}}/g)].flatMap(
    (match) => (match[1] ? [match[1]] : []),
  );
}
/** Remove detached scalar/derived queries while retaining CTE and set-query structure. */
export function pruneViewGraphQueries(graph: ViewGraph): void {
  const reachable = new Set<string>();
  const visit = (id: string) => {
    if (reachable.has(id)) return;
    reachable.add(id);
    const query =
      id === (graph.mainQueryId || "q1") ? graph : graph.queryBlocks?.find((block) => block.id === id)?.query;
    if (query) queryBlockReferences(query).forEach(visit);
  };
  (graph.queryTemplate ? queryTokens(graph.queryTemplate) : [graph.mainQueryId || "q1"]).forEach(visit);
  graph.queryBlocks = graph.queryBlocks?.filter((block) => reachable.has(block.id));
}
/** Rewrite correlated descendants while respecting aliases which shadow the outer source. */
export function renameViewGraphCorrelations(
  root: ViewGraph,
  owner: ViewGraphQuery,
  table: ViewGraphTable,
  alias: string,
): void {
  const previous = table.alias || table.name;
  const schema = !table.explicitAlias && previous === table.name ? table.schema : undefined;
  const visited = new Set<string>();
  const visit = (query: ViewGraphQuery) => {
    for (const id of queryBlockReferences(query)) {
      if (visited.has(id)) continue;
      visited.add(id);
      const child = root.queryBlocks?.find((block) => block.id === id)?.query;
      if (
        !child ||
        child.tables.some((source) => (source.alias || source.name).toLowerCase() === previous.toLowerCase())
      )
        continue;
      rewriteQuerySql(child, (sql) =>
        sql === undefined ? undefined : replaceSqlQualifier(sql, previous, alias, schema),
      );
      visit(child);
    }
  };
  visit(owner);
}
export function renameViewGraphAlias(query: ViewGraphQuery, tableId: string, alias: string): void {
  const table = query.tables.find((table) => table.id === tableId);
  if (!table) return;
  const previous = table.alias || table.name;
  table.alias = alias;
  const schema = !table.explicitAlias && previous === table.name ? table.schema : undefined;
  table.explicitAlias = true;
  rewriteQuerySql(query, (sql) => (sql === undefined ? undefined : replaceSqlQualifier(sql, previous, alias, schema)));
}

export function viewGraphIssues(graph: ViewGraph): { key: string; detail: string }[] {
  const issues: { key: string; detail: string }[] = [];
  const queries = [graph, ...(graph.queryBlocks ?? []).map((block) => block.query)];
  for (const query of queries) {
    if (!query.select.some((column) => column.output !== false))
      issues.push({ key: "view-graph.output_required", detail: "" });
    const aliases = new Set<string>();
    for (const table of query.tables) {
      const alias = (table.alias || table.name).toLowerCase();
      if (aliases.has(alias)) issues.push({ key: "view-graph.duplicate_alias", detail: alias });
      aliases.add(alias);
    }
    for (const join of query.joins)
      if (!isViewJoinComplete(join))
        issues.push({
          key: "view-graph.join_required",
          detail: `${aliasOf(query, join.fromTableId)} → ${aliasOf(query, join.toTableId)}`,
        });
    if (query.top?.withTies && !query.orderBy?.length) issues.push({ key: "view-graph.ties_require_sort", detail: "" });
    if (query.orderBy?.length && !query.top && !query.suffixSql?.match(/OFFSET/i))
      issues.push({ key: "view-graph.sort_requires_top", detail: "" });
    for (const column of query.select) {
      if (
        column.aggregate &&
        column.column === "*" &&
        (column.aggregateDistinct || !["COUNT", "COUNT_BIG"].includes(column.aggregate))
      )
        issues.push({ key: "view-graph.invalid_aggregate", detail: column.aggregate });
    }
  }
  return issues;
}

type FromTree = { tableId: string } | { joinId?: string; left: FromTree; right: FromTree };
function readFromTree(template: string): FromTree | undefined {
  const tokens = template.match(/\{\{argon-(?:table|join|on):[^}]+}}|CROSS\s+JOIN|\bON\b|[(),]/gi) ?? [];
  let index = 0;
  const factor = (): FromTree | undefined => {
    const token = tokens[index++];
    if (token === "(") {
      const tree = sequence();
      if (tokens[index++] !== ")") return;
      return tree;
    }
    const table = token?.match(/^\{\{argon-table:([^}]+)}}$/);
    return table ? { tableId: table[1] } : undefined;
  };
  const joined = (): FromTree | undefined => {
    let left = factor();
    while (left && (tokens[index]?.startsWith("{{argon-join:") || /^CROSS\s+JOIN$/i.test(tokens[index] ?? ""))) {
      const token = tokens[index++];
      const right = factor();
      if (!right) return;
      const joinId = token.match(/^\{\{argon-join:([^}]+)}}$/)?.[1];
      if (tokens[index] === "ON") {
        index++;
        if (!tokens[index++]?.startsWith("{{argon-on:")) return;
      }
      left = { joinId, left, right };
    }
    return left;
  };
  const sequence = (): FromTree | undefined => {
    let left = joined();
    while (left && tokens[index] === ",") {
      index++;
      const right = joined();
      if (!right) return;
      left = { left, right };
    }
    return left;
  };
  const tree = sequence();
  return index === tokens.length ? tree : undefined;
}
function writeFromTree(graph: ViewGraphQuery, tree: FromTree): string {
  if ("tableId" in tree) return `{{argon-table:${tree.tableId}}}`;
  const join = graph.joins.find((join) => join.id === tree.joinId);
  return `(${writeFromTree(graph, tree.left)}\n${join ? `{{argon-join:${join.id}}}` : "CROSS JOIN"} ${writeFromTree(graph, tree.right)}${join && !["Cross", "CrossApply", "OuterApply"].includes(join.type) ? ` ON {{argon-on:${join.id}}}` : ""})`;
}
/** Keep the existing outer-join association when sources or connections change. */
export function refreshViewGraphFromTemplate(graph: ViewGraphQuery, removedTableId?: string): void {
  const tree = graph.fromTemplate && readFromTree(graph.fromTemplate);
  if (!tree) {
    graph.fromTemplate = undefined;
    return;
  }
  const prune = (node: FromTree): FromTree | undefined => {
    if ("tableId" in node) return node.tableId === removedTableId ? undefined : node;
    const left = prune(node.left);
    const right = prune(node.right);
    return left && right ? { ...node, left, right } : left || right;
  };
  const next = prune(tree);
  graph.fromTemplate = next ? writeFromTree(graph, next) : undefined;
}
export function appendViewGraphSource(graph: ViewGraphQuery, tableId: string, join?: ViewGraphJoin): void {
  const previous =
    graph.fromTemplate ||
    graph.tables
      .filter((table) => table.id !== tableId)
      .map((table) => `{{argon-table:${table.id}}}`)
      .join(",\n");
  const source = `{{argon-table:${tableId}}}`;
  graph.fromTemplate = previous
    ? `(${previous})\n${join ? `{{argon-join:${join.id}}} ${source}${["Cross", "CrossApply", "OuterApply"].includes(join.type) ? "" : ` ON {{argon-on:${join.id}}}`}` : `CROSS JOIN ${source}`}`
    : source;
}
export function connectViewGraphFromTemplate(graph: ViewGraphQuery, connection: ViewGraphJoin): void {
  const tree = graph.fromTemplate && readFromTree(graph.fromTemplate);
  if (!tree) return;
  const contains = (node: FromTree, id: string): boolean =>
    "tableId" in node ? node.tableId === id : contains(node.left, id) || contains(node.right, id);
  const connect = (node: FromTree): FromTree => {
    if ("tableId" in node) return node;
    const split =
      (contains(node.left, connection.fromTableId) && contains(node.right, connection.toTableId)) ||
      (contains(node.right, connection.fromTableId) && contains(node.left, connection.toTableId));
    if (!split) return { ...node, left: connect(node.left), right: connect(node.right) };
    const existing = graph.joins.find((join) => join.id === node.joinId);
    if (!existing || existing.type === "Cross") {
      if (existing) graph.joins = graph.joins.filter((join) => join.id !== existing.id);
      return contains(node.left, connection.fromTableId)
        ? { ...node, joinId: connection.id }
        : { left: node.right, right: node.left, joinId: connection.id };
    }
    if (["CrossApply", "OuterApply"].includes(existing.type)) {
      // APPLY predicates belong to WHERE; adding ON would lose the correlated source.
      const where = viewWhereExpressionSql(graph);
      const condition = viewJoinConditionSql(graph, connection);
      graph.whereSql = where ? `(${where}) AND (${condition})` : condition;
      graph.joins = graph.joins.filter((join) => join.id !== connection.id);
      return node;
    }
    // A new relationship inside an already connected group extends its ON predicate.
    existing.conditionSql = `(${viewJoinConditionSql(graph, existing)}) AND (${viewJoinConditionSql(graph, connection)})`;
    existing.on.push(...connection.on);
    graph.joins = graph.joins.filter((join) => join.id !== connection.id);
    return node;
  };
  graph.fromTemplate = writeFromTree(graph, connect(tree));
}

/** Compare identifiers without changing whitespace or case inside SQL string literals. */
export function normalizeViewExpression(sql: string): string {
  const tokens: string[] =
    sql.match(
      /N?'(?:''|[^'])*'|--[^\r\n]*|\/\*[\s\S]*?\*\/|\[(?:\]\]|[^\]])*\]|"(?:""|[^"])*"|[\p{L}_@#][\p{L}\p{N}_@$#]*|[^\s]/gu,
    ) ?? [];
  return tokens
    .filter((token) => !token.startsWith("--") && !token.startsWith("/*"))
    .map((token) => {
      if (token.startsWith("'") || /^N'/i.test(token)) return `literal:${token}`;
      const value = token.startsWith("[")
        ? token.slice(1, -1).replaceAll("]]", "]")
        : token.startsWith('"')
          ? token.slice(1, -1).replaceAll('""', '"')
          : token;
      return value.toLowerCase();
    })
    .join("|");
}
