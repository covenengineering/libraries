import { getIterator } from "./getIterator.ts";
import { iteratorFunctionToIterableIterator } from "./iteratorFunctionToIterableIterator.ts";

/**
 * Take the given amount of items from the iterable.
 *
 * @example
 * ```typescript
 * const take2 = take(2);
 * take2([1, 2, 3, 4, 5]); // [1, 2]
 * ```
 * @param amount Amount of items to take.
 * @returns Curried function with `amount` in context.
 */
export const take =
	(
		amount: number,
	): (<Item>(iterable: Iterable<Item>) => IterableIterator<Item>) =>
	<Item>(iterable: Iterable<Item>) =>
		iteratorFunctionToIterableIterator(() =>
			getIterator(iterable).take(amount),
		);
