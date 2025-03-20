import type { Primitive } from "@coven/types";

/**
 * Primitive values the `memo` function can memoize (all except `symbol`).
 *
 * @see {@linkcode Primitive}
 */
export type MemoizablePrimitive = Exclude<Primitive, symbol>;
