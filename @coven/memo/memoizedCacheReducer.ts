import { MEMO_ROOT } from "./MEMO_ROOT.ts";
import type { MemoCache } from "./MemoCache.ts";
import type { MemoCacheKeyIntersection } from "./MemoCacheKeyIntersection.ts";
import type { MemoCacheKeyUnion } from "./MemoCacheKeyUnion.ts";
import type { MemoCacheValueIntersection } from "./MemoCacheValueIntersection.ts";
import type { MemoCacheValueUnion } from "./MemoCacheValueUnion.ts";

/**
 * Reducer used to access a nested `Map` used as cache.
 *
 * > [!CAUTION]
 * > This throws if value is not serializable by [structuredClone](https://coven.to/mdn/Window/structuredClone).
 *
 * @param cache Cache to get the value from (`Map`).
 * @param item Item to retrieve.
 * @param value Optional value to set if not set still.
 * @template Item Cached item.
 * @template Value Value to cache.
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
				Object.freeze(
					Array.isArray(value) ?
						structuredClone(value)
					:	Object.assign(Object.create(null), structuredClone(value)),
				)
			:	new Map()) as MemoCacheValueIntersection,
		)
	)
	).get(item as MemoCacheKeyIntersection) as Item extends typeof MEMO_ROOT ?
		Value
	:	MemoCache;
