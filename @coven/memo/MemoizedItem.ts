import type { Memoizable } from "./Memoizable.ts";
import type { MemoizablePrimitive } from "./MemoizablePrimitive.ts";
import type { Memoized } from "./Memoized.ts";

/**
 * Branded read-only tuple items or record values returned by `memo`.
 *
 * @see {@linkcode Memoizable}
 * @see {@linkcode MemoizablePrimitive}
 * @see {@linkcode Memoized}
 */
export type MemoizedItem = Memoized<Memoizable> | MemoizablePrimitive;
