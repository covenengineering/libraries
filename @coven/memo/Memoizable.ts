import type { Primitive } from "@coven/types";
import type { MemoizableObject } from "./MemoizableObject.ts";

/**
 * Memoizable values (union of primitives and {@linkcode MemoizableObject}).
 *
 * @see {@linkcode MemoizableObject}
 */
export type Memoizable = MemoizableObject | Primitive;
