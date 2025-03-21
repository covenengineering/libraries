import { MEMO_ROOT } from "./MEMO_ROOT.ts";
import type { MemoCache } from "./MemoCache.ts";
import type { MemoCacheKeyIntersection } from "./MemoCacheKeyIntersection.ts";
import type { MemoCacheKeyUnion } from "./MemoCacheKeyUnion.ts";
import type { MemoCacheValueIntersection } from "./MemoCacheValueIntersection.ts";
import type { MemoCacheValueUnion } from "./MemoCacheValueUnion.ts";

/**
 * Reducer used to access a nested `Map` used as cache.
 *
 * @param cache Cache to get the value from (`Map`).
 * @param item Item to retrieve.
 * @param value Optional value to set if not set still.
 *
 * @returns Cache or value.
 */
export const memoizedCacheReducer = <
	Item extends MemoCacheKeyUnion,
	Value extends MemoCacheValueUnion,
>(
	cache: MemoCache,
	item: Item,
	value: Value,
): Item extends typeof MEMO_ROOT ? Value : MemoCache =>
	(cache.has(item as MemoCacheKeyIntersection) ? cache : (
		cache.set(
			item as MemoCacheKeyIntersection,
			(item === MEMO_ROOT ?
				Object.freeze(structuredClone(value))
			:	new Map()) as MemoCacheValueIntersection,
		)
	)
	).get(item as MemoCacheKeyIntersection) as Item extends typeof MEMO_ROOT ?
		Value
	:	MemoCache;
