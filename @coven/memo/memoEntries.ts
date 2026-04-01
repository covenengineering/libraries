import { iterableToArray } from "@coven/iterables";
import type { Entry } from "@coven/types";
import { mapMemo } from "./mapMemo.ts";
import { memo } from "./memo.ts";
import type { MemoizableRecord } from "./MemoizableRecord.ts";
import { sortEntries } from "./sortEntries.ts";

/**
 * Takes a {@linkcode MemoizableRecord} and returns an array of memoized
 * entries for it, stringifying keys.
 *
 * @example
 * ```
 * memoEntries({ coven: 1, engineering: 2 }); // [["coven", 1], ["engineering", 2]]
 * ```
 * @template Record Type of `MemoizableRecord` to get entries from.
 * @param record Record to get entries from.
 * @returns Memoized array of entries for `record`.
 */
export const memoEntries = <Record extends MemoizableRecord>(
	record: Record,
): ReadonlyArray<
	{
		[Property in keyof Record]: Entry<
			`${Exclude<Property, symbol>}` | Extract<Property, symbol>,
			Record[Property]
		>;
	}[keyof Record]
> =>
	memo(iterableToArray(mapMemo(sortEntries(record)))) as ReadonlyArray<
		{
			[Property in keyof Record]: Entry<
				`${Exclude<Property, symbol>}` | Extract<Property, symbol>,
				Record[Property]
			>;
		}[keyof Record]
	>;
