/*
 * Copyright (C) 2026 MetaCarp GmbH and Allan Amstadt
 * SPDX-License-Identifier: MIT
 * Written by Allan Amstadt <a.amstadt@metacarp.de>, 2026
 */

import type { TSqlFragment, TSqlFragmentBase } from "./ast.generated.js";

export type Visitor = {
  enter?: (node: TSqlFragmentBase, parent: TSqlFragmentBase | null) => void;
  leave?: (node: TSqlFragmentBase, parent: TSqlFragmentBase | null) => void;
};

function isFragment(value: unknown): value is TSqlFragmentBase {
  return typeof value === "object" && value !== null && typeof (value as TSqlFragmentBase).$type === "string";
}

export function walk(node: TSqlFragment | TSqlFragmentBase | null | undefined, visitor: Visitor): void {
  if (!node) {
    return;
  }
  visit(node, null, visitor);
}

function visit(node: TSqlFragmentBase, parent: TSqlFragmentBase | null, visitor: Visitor): void {
  visitor.enter?.(node, parent);
  for (const value of Object.values(node)) {
    if (isFragment(value)) {
      visit(value, node, visitor);
    } else if (Array.isArray(value)) {
      for (const item of value) {
        if (isFragment(item)) {
          visit(item, node, visitor);
        }
      }
    }
  }
  visitor.leave?.(node, parent);
}
