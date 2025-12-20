import type { MemoizableRecord } from "./MemoizableRecord.ts";
import type { MemoizableTuple } from "./MemoizableTuple.ts";
import type { MemoizedRecordCache } from "./MemoizedRecordCache.ts";
import type { MemoizedTupleCache } from "./MemoizedTupleCache.ts";

/**
 * Intersection of `MemoCache` possible values.
 */
export type MemoCacheValueIntersection = MemoizableRecord
	& MemoizableTuple
	& MemoizedRecordCache
	& MemoizedTupleCache;
