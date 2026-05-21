import type { Numeric } from "@coven/types";
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
		amount: Numeric,
	): (<Item>(iterable: Iterable<Item>) => IterableIterator<Item>) =>
	<Item>(iterable: Iterable<Item>) =>
		iteratorFunctionToIterableIterator(function* (): Generator<Item> {
			let count = 0n;

			if (amount > 0n) {
				for (const item of iterable) {
					if (count < amount) {
						yield item;
						count += 1n;
					} else {
						return;
					}
				}
			}
		});
