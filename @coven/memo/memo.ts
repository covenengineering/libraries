import { EMPTY_ARRAY, EMPTY_OBJECT, SIGIL } from "@coven/constants";
import { entriesToObject, iterableToArray } from "@coven/iterables";
import { isArray } from "@coven/predicates";
import type { EntryOf, MapValue } from "@coven/types";
import type { Cache } from "./Cache.ts";
import { mapMemo } from "./mapMemo.ts";
import { memoEntries } from "./memoEntries.ts";
import type { MemoizableObject } from "./MemoizableObject.ts";
import type { MemoizableTuple } from "./MemoizableTuple.ts";
import type { Memoized } from "./Memoized.ts";
import type { RecordCache } from "./RecordCache.ts";
import type { TupleCache } from "./TupleCache.ts";
import { updateCache } from "./updateCache.ts";

/**
 * Private cache of tuples.
 */
const tupleCache: TupleCache = new Map();

/**
 * Private cache of records.
 */
const recordCache: RecordCache = new Map();

/**
 * Memoizes a value.
 *
 * @example
 * ```typescript
 * memo(["✨", "🔮", "💀"]) === memo(["✨", "🔮", "💀"]); // true
 * ```
 * @template Value Value to be memoized.
 * @param value Value to memoize.
 * @returns Memoized read-only record or tuple.
 */
export const memo = <const Value extends MemoizableObject>(
	value: Value,
): Memoized<Value> => {
	const isTuple = isArray<MemoizableTuple>(value);
	const normalized = isTuple ? value : memoEntries(value);

	return normalized.length > 0 ?
			(updateCache(isTuple ? tupleCache : recordCache)(
				normalized,
			).getOrInsertComputed(
				SIGIL,
				() =>
					Object.freeze(
						isTuple ?
							iterableToArray(mapMemo(normalized))
						:	entriesToObject(
								normalized as ReadonlyArray<EntryOf<object>>,
							),
					) as MapValue<Cache>,
			) as Memoized<Value>)
		:	((isTuple ? EMPTY_ARRAY : EMPTY_OBJECT) as Memoized<Value>);
};
