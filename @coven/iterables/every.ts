import type { Predicate, Unary } from "@coven/types";
import { getIterator } from "./getIterator.ts";

/**
 * Evaluates items in an iterable against a predicate and returns `true` if all
 * items evaluates to `true`.
 *
 * @example
 * ```typescript
 * const everyEven = every((number: number) => number % 2 === 0);
 * everyEven([2, 4, 6, 8]); // true
 * everyEven([1, 2, 3, 4]); // false
 * ```
 * @param predicate Predicate function to evaluate each item.
 * @returns Curried function with `predicate` set in context.
 */
export const every = (<Item>(predicate: Unary<[item: Item], boolean>) =>
	(iterable: Iterable<Item>) =>
		getIterator(iterable).every(predicate)) as {
	<Item, Predicated extends Item>(
		predicate: Predicate<Item, Predicated>,
	): (iterable: Iterable<Item>) => iterable is Iterable<Predicated>;
	<Item>(
		predicate: Unary<[item: Item], boolean>,
	): (iterable: Iterable<Item>) => boolean;
};
