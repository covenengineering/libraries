import type { AwaitableIterable } from "@coven/types";
import { filter } from "./filter.ts";
import { iteratorFunctionToAsyncIterableIterator } from "./iteratorFunctionToAsyncIterableIterator.ts";

/**
 * Drop the specified amount of items from the given iterable or asynchronous
 * iterable.
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
): <Item>(
	iterable: AwaitableIterable<Item>,
) => Readonly<AsyncIterableIterator<Awaited<Item>>> => {
	const amountFilter = <Item>(iterable: AwaitableIterable<Item>) => {
		let count = -1;

		return filter(() => (count += 1) >= amount)(
			iterable,
		) as AwaitableIterable<Item>;
	};

	return <Item>(iterable: AwaitableIterable<Item>) =>
		iteratorFunctionToAsyncIterableIterator(
			async function* (): AsyncGenerator<Awaited<Item>> {
				yield* amount > 0 ? amountFilter(iterable) : iterable;
			},
		);
};
