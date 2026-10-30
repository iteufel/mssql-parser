/*
 * Copyright (C) 2026 MetaCarp GmbH and Allan Amstadt
 * SPDX-License-Identifier: MIT
 * Written by Allan Amstadt <a.amstadt@metacarp.de>, 2026
 */

import type { Identifier, SchemaObjectName, TSqlFragment, TSqlFragmentBase } from "./ast.generated.js";
import { walk } from "./walk.js";

export type ObjectReferenceKind = "table" | "procedure" | "function" | "unknown";

export interface ObjectReference {
  schema: string;
  name: string;
  kind: ObjectReferenceKind;
}

function identifiersOf(name: SchemaObjectName | undefined | null): (Identifier & { value: string })[] {
  return (name?.identifiers ?? []).filter((part): part is Identifier & { value: string } => !!part?.value);
}

function fromSchemaObject(name: SchemaObjectName | undefined | null, kind: ObjectReferenceKind): ObjectReference | null {
  const parts = identifiersOf(name);
  if (parts.length === 0) {
    return null;
  }
  const table = parts[parts.length - 1].value;
  const schema = parts.length > 1 ? parts[parts.length - 2].value : "dbo";
  return { schema, name: table, kind };
}

function kindForType(type: string): ObjectReferenceKind {
  if (type.includes("Procedure") || type.includes("Execute")) {
    return "procedure";
  }
  if (type.includes("Function")) {
    return "function";
  }
  if (type.includes("Table") || type === "NamedTableReference") {
    return "table";
  }
  return "unknown";
}

export function collectObjectReferences(ast: TSqlFragment | TSqlFragmentBase | null | undefined): ObjectReference[] {
  const found = new Map<string, ObjectReference>();

  walk(ast, {
    enter(node) {
      const record = (ref: ObjectReference | null) => {
        if (!ref) {
          return;
        }
        found.set(`${ref.kind}:${ref.schema}.${ref.name}`.toLowerCase(), ref);
      };

      if (node.$type === "NamedTableReference") {
        record(fromSchemaObject((node as { schemaObject?: SchemaObjectName }).schemaObject, "table"));
        return;
      }

      if (node.$type === "SchemaObjectFunctionTableReference") {
        record(fromSchemaObject((node as { schemaObject?: SchemaObjectName }).schemaObject, "function"));
        return;
      }

      if (node.$type === "ProcedureReference") {
        record(fromSchemaObject((node as { name?: SchemaObjectName }).name, "procedure"));
        return;
      }

      if ("schemaObject" in node && (node as { schemaObject?: SchemaObjectName }).schemaObject) {
        record(fromSchemaObject((node as { schemaObject?: SchemaObjectName }).schemaObject, kindForType(node.$type)));
      }
    },
  });

  return [...found.values()];
}
