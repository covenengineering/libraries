import type { MemoizedRecordCache } from "./MemoizedRecordCache.ts";
import type { MemoizedTupleCache } from "./MemoizedTupleCache.ts";

/**
 * Nested `Map` caching records or tuples.
 */
export type MemoCache = MemoizedRecordCache | MemoizedTupleCache;
