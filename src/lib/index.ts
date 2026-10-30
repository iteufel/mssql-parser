/*
 * Copyright (C) 2026 MetaCarp GmbH and Allan Amstadt
 * SPDX-License-Identifier: MIT
 * Written by Allan Amstadt <a.amstadt@metacarp.de>, 2026
 */

export type { ParseError, Token, TSqlFragment, TSqlScript } from "./ast.generated.js";
export type {
  BinaryQueryExpression,
  ColumnReferenceExpression,
  FunctionCall,
  JsonForClause,
  ParenthesisExpression,
  NamedTableReference,
  QueryExpression,
  QueryParenthesisExpression,
  QuerySpecification,
  ScalarExpression,
  ScalarSubquery,
  SelectScalarExpression,
  SelectStatement,
  StringLiteral,
  TSqlFragmentBase,
} from "./ast.generated.js";
export type { GenerateOptions, InitOptions, ParseOptions, ParseResult } from "./types.js";
export { generate, initMssqlParser, isParseOk, parse, tokenize } from "./mssql-parser.js";
export { walk } from "./walk.js";
export { collectObjectReferences } from "./references.js";
export type { ObjectReference } from "./references.js";
export {
  sqlToViewGraph,
  extractViewGraph,
  derivedTableColumnSource,
  viewDefinitionToPreviewSql,
} from "./view-graph-from-sql.js";
export { emptyViewGraph, isViewJoinComplete, quoteSqlIdent, tableRefSql, viewGraphToSql } from "./view-graph-model.js";
export type {
  ViewComparisonType,
  ViewGraph,
  ViewGraphJoin,
  ViewGraphJoinCondition,
  ViewGraphParseResult,
  ViewGraphSelectColumn,
  ViewGraphTable,
  ViewGraphWhereClause,
  ViewJoinType,
} from "./view-graph-model.js";

export { analyzeSqlReferences } from "./sql-analysis.js";
export type { SqlOperation, SqlTableReference, SqlColumnReference } from "./sql-analysis.js";
