import type { Filter, Maybe, Unary } from "@coven/types";
import { getIterator } from "./getIterator.ts";

/**
 * Returns the value of the first item in the iterable where predicate is
 * `true`, `undefined` otherwise.
 *
 * @example
 * ```typescript
 * const findEven = find((number: number) => number % 2 === 0);
 * findEven([1, 2, 3, 4]); // 2
 * findEven([1, 3, 5, 7]); // undefined
 * ```
 * @param predicate Predicate function to search for item.
 * @returns Curried function with `predicate` set in context.
 */
export const find =
	<Item>(
		predicate: Filter<[item: Item]>,
	): Unary<[iterable: Iterable<Item>], Maybe<Item>> =>
	(iterable) =>
		getIterator(iterable).find(predicate) as Maybe<Item>;
