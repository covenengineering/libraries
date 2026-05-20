import type { Numeric } from "@coven/types";
import { filter } from "./filter.ts";
import { iteratorFunctionToIterableIterator } from "./iteratorFunctionToIterableIterator.ts";

/**
 * Drop the specified amount of items from the given iterable.
 *
 * @example
 * ```typescript
 * const drop2 = drop(2n);
 * drop2([1, 2, 3, 4, 5]); // [3, 4, 5]
 * ```
 * @param amount Amount of items to drop.
 * @returns Curried function with `amount` in context.
 */
export const drop = (
	amount: Numeric,
): (<Item>(iterable: Iterable<Item>) => IterableIterator<Item>) => {
	const amountFilter = <Item>(iterable: Iterable<Item>) => {
		let count = -1n;

		return filter(() => (count += 1n) >= amount)(
			iterable,
		) as Iterable<Item>;
	};

	return <Item>(iterable: Iterable<Item>) =>
		iteratorFunctionToIterableIterator(function* (): Generator<Item> {
			yield* amount > 0 ? amountFilter(iterable) : iterable;
		});
};
