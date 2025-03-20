import type { Entry, Unary } from "@coven/types";
import { memo } from "./memo.ts";
import type { MemoizableRecord } from "./MemoizableRecord.ts";
import type { MemoizableTuple } from "./MemoizableTuple.ts";
import type { MemoizedItem } from "./MemoizedItem.ts";
import type { MemoizedRecordEntry } from "./MemoizedRecordEntry.ts";
import { memoizedRecordEntrySorter } from "./memoizedRecordEntrySorter.ts";

/**
 * Takes a {@linkcode MemoizableRecord} and returns an array of memoized entries.
 */
export const memoizableRecordToMemoizableTuple = (
	value: MemoizableRecord,
): MemoizableTuple =>
	Object.entries(value)
		.map(memo as Unary<[Entry<string, MemoizedItem>], MemoizedRecordEntry>)
		.sort(memoizedRecordEntrySorter);
