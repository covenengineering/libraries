import type { MEMO_ROOT } from "./MEMO_ROOT.ts";
import type { MemoizableTuple } from "./MemoizableTuple.ts";
import type { MemoizedItem } from "./MemoizedItem.ts";

/**
 * Nested `Map` caching tuples.
 *
 * @see {@linkcode MEMO_ROOT}
 * @see {@linkcode MemoizableTuple}
 * @see {@linkcode MemoizedItem}
 */
export type MemoizedTupleCache = Map<
	MemoizedItem | typeof MEMO_ROOT,
	MemoizedTupleCache | MemoizableTuple
>;
