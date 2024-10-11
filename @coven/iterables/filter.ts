import type { Predicate, Unary } from "@coven/types";
import { getIterator } from "./getIterator.ts";
import { iteratorFunctionToIterableIterator } from "./iteratorFunctionToIterableIterator.ts";

/**
 * Filters items in an iterable against a predicate and returns items that
 * evaluated to `true`.
 *
 * @example
 * ```typescript
 * const filterEven = filter((number: number) => number % 2 === 0);
 *
 * iterableToArray(filterEven([1, 2, 3, 4])); // [2, 4]
 * iterableToArray(filterEven([1, 3, 5, 7])); // []
 * ```
 * @param predicate Predicate function to evaluate each item.
 * @returns Curried function with `predicate` set in context.
 */
export const filter: {
	<Item, Predicated extends Item>(
		predicate: Predicate<Item, Predicated>,
	): (iterable: Iterable<Item>) => IterableIterator<Predicated>;
	<Item>(
		predicate: Unary<[item: Item], boolean>,
	): (iterable: Iterable<Item>) => IterableIterator<Item>;
} = <Item>(
	predicate: Unary<[item: Item], boolean>,
): (iterable: Iterable<Item>) => IterableIterator<Item> =>
(iterable) =>
	iteratorFunctionToIterableIterator(() =>
		getIterator(iterable).filter(predicate)
	);
