import type { AwaitableIterable } from "@coven/types";
import { iteratorFunctionToAsyncIterableIterator } from "./iteratorFunctionToAsyncIterableIterator.ts";

/**
 * Take the given amount of items from the iterable or asynchronous iterable.
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
	): (<Item>(
		iterable: AwaitableIterable<Item>,
	) => Readonly<AsyncIterableIterator<Item>>) =>
	<Item>(iterable: AwaitableIterable<Item>) =>
		iteratorFunctionToAsyncIterableIterator(
			async function* (): AsyncGenerator<Item> {
				let count = 0n;

				if (amount > 0) {
					for await (const item of iterable) {
						if (count < amount) {
							yield item;
							count += 1n;
						} else {
							return;
						}
					}
				}
			},
		);
