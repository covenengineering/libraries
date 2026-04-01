import { reduce } from "@coven/iterables";
import { isObject } from "@coven/predicates";
import type { Cache } from "./Cache.ts";
import { memo } from "./memo.ts";
import type { Memoizable } from "./Memoizable.ts";

/**
 * Create a `Map` without the whole `new Map` syntax.
 */
const createMap = () => new Map();

/**
 * Reducer to update the given {@linkcode Cache}.
 */
export const updateCache: <Item extends Memoizable>(
	cache: Cache,
) => (iterable: Iterable<Item>) => Cache = reduce(
	(item) => (updateCache) =>
		updateCache.getOrInsertComputed(
			isObject(item) ? memo(item) : item,
			createMap,
		) as Cache,
);
