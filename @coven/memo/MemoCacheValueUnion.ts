import type { Memoizable } from "./Memoizable.ts";
import type { MemoizedRecordCache } from "./MemoizedRecordCache.ts";
import type { MemoizedTupleCache } from "./MemoizedTupleCache.ts";

/**
 * Union of `MemoCache` possible values.
 */
export type MemoCacheValueUnion =
	| Memoizable
	| MemoizedRecordCache
	| MemoizedTupleCache;
