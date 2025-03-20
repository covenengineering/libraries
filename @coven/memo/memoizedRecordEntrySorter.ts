import type { MemoizedRecordEntry } from "./MemoizedRecordEntry.ts";

/**
 * Util used by `memoizableRecordToMemoizableTuple` to sort by key.
 */
export const memoizedRecordEntrySorter = (
	[current]: MemoizedRecordEntry,
	[next]: MemoizedRecordEntry,
): number => current.localeCompare(next);
