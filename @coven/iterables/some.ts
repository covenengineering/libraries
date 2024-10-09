import type { Predicate, Single, Unary } from "@coven/types";
import { getIterator } from "./getIterator.ts";

/**
 * Evaluates items in an iterable against a predicate and returns `true` if any
 * item evaluates to `true`.
 *
 * @example
 * ```typescript
 * const someEven = some((number: number) => number % 2 === 0);
 * someEven([1, 2, 3, 4]); // true
 * someEven([1, 3, 5, 7]); // false
 * ```
 * @param predicate Predicate function to evaluate each item.
 * @returns Curried function with `predicate` set in context.
 */
export const some = (<Item, Predicated extends Item = never>(
		predicate: Single<Predicated> extends Single<never> ?
			Unary<[item: Item], boolean>
		:	Predicate<Item, Predicated>,
	): ((iterable: Iterable<Item>) => boolean) =>
	(iterable: Iterable<Item>) =>
		getIterator(iterable).some(predicate)) as {
	<Item, Predicated extends Item>(
		predicate: Predicate<Item, Predicated>,
	): (iterable: Iterable<Item>) => iterable is Iterable<Item & Predicated>;
	<Item>(
		predicate: Unary<[item: Item], boolean>,
	): (iterable: Iterable<Item>) => Promise<boolean>;
};
