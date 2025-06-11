import type { AwaitableIterable, Filter, Predicate, Unary } from "@coven/types";
import { iteratorFunctionToAsyncIterableIterator } from "./iteratorFunctionToAsyncIterableIterator.ts";

/**
 * Filters items in an iterable or asynchronous iterable against a predicate and
 * returns items that evaluated to `true`.
 *
 * @example
 * ```typescript
 * import { iterableToArray } from "@coven/iterables/async";
 *
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
	): Unary<
		[iterable: AwaitableIterable<Item>],
		AsyncIterableIterator<Predicated>
	>;
	<Item>(
		predicate: Filter<[item: Item]>,
	): Unary<[iterable: AwaitableIterable<Item>], AsyncIterableIterator<Item>>;
} =
	<Item>(
		predicate: Filter<[item: Item]>,
	): Unary<
		[iterable: AwaitableIterable<Item>],
		AsyncIterableIterator<Item>
	> =>
	iterable =>
		iteratorFunctionToAsyncIterableIterator(
			async function* (): AsyncGenerator<Item> {
				for await (const item of iterable) {
					if (predicate(item)) {
						yield item;
					}
				}
			},
		);
