import { getIterator } from "./getIterator.ts";
import { iteratorFunctionToIterableIterator } from "./iteratorFunctionToIterableIterator.ts";

/**
 * Drop the specified amount of items from the given iterable.
 *
 * @example
 * ```typescript
 * const drop2 = drop(2);
 * drop2([1, 2, 3, 4, 5]); // [3, 4, 5]
 * ```
 * @param amount Amount of items to drop.
 * @returns Curried function with `amount` in context.
 */
export const drop = (
	amount: number,
): <Item>(iterable: Iterable<Item>) => IterableIterator<Item> =>
<Item>(iterable: Iterable<Item>) =>
	iteratorFunctionToIterableIterator(() =>
		getIterator(iterable).drop(amount)
	);
