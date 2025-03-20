import type { MEMO_ROOT } from "./MEMO_ROOT.ts";
import type { MemoizableRecord } from "./MemoizableRecord.ts";
import type { MemoizedRecordEntry } from "./MemoizedRecordEntry.ts";

/**
 * Nested `Map` caching records.
 *
 * @see {@linkcode MEMO_ROOT}
 * @see {@linkcode MemoizableRecord}
 * @see {@linkcode MemoizedRecordEntry}
 */
export type MemoizedRecordCache = Map<
	MemoizedRecordEntry | typeof MEMO_ROOT,
	MemoizedRecordCache | MemoizableRecord
>;
