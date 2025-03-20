import type { MemoizedItem } from "./MemoizedItem.ts";

/**
 * Tuple the `memo` function can memoize.
 *
 * @see {@linkcode MemoizedItem}
 */
export type MemoizableTuple = readonly MemoizedItem[];
