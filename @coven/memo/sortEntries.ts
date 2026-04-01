import { iterableToArray, objectToEntries } from "@coven/iterables";
import type { EntryOf } from "@coven/types";
import type { MemoizableRecord } from "./MemoizableRecord.ts";
import { entriesSorter } from "./entriesSorter.ts";

/**
 * Get an array of entries sorted by key for the given object.
 *
 * @template Record Memoizable record to get entries from.
 * @example
 * ```typescript
 * sortEntries({
 * 	b: 1,
 * 	a: 2
 * }); // [["a", 2], ["b", 1]]
 * ```
 * @param record Memoizable record to get entries from.
 * @returns Array of entries sorted by key.
 */
export const sortEntries = <Record extends MemoizableRecord>(
	record: Record,
): ReadonlyArray<EntryOf<Record>> =>
	iterableToArray(objectToEntries(record)).toSorted(entriesSorter);
