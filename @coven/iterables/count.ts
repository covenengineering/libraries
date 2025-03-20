import type { Filter } from "@coven/types";
import { filter } from "./filter.ts";
import { length } from "./length.ts";

/**
 * Counts the number of items that satisfy a predicate in the given iterable.
 *
 * @example
 * ```typescript
 * const countOdds = count((number: number) => number % 2 !== 1);
 * countOdds([1, 2, 3, 4, 5]); // 3
 * countOdds([0, 2, 4, 6, 8]); // 0
 * ```
 * @param predicate Predicate function for items to be counted.
 * @returns Curried function with `predicate` in context.
 */
export const count = <Item>(
	predicate: Filter<[item: Item]>,
): ((iterable: Iterable<Item>) => number) => {
	const predicateFilter = filter(predicate);

	return (iterable: Iterable<Item>) => length(predicateFilter(iterable));
};
