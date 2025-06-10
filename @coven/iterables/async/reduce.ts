import type { Awaitable, AwaitableIterable, Unary } from "@coven/types";
import { forEach } from "./forEach.ts";

/**
 * Reducer function for iterables and asynchronous iterables.
 *
 * @example
 * ```typescript
 * const sum = reduce<number, number>(item => total => total + item);
 * const sumFrom0 = sum(0);
 *
 * sumFrom0([1, 2, 3]); // 6
 * ```
 * @param reducer Reducer function.
 * @returns Curried function with `reducer` in context.
 */
export const reduce =
	<Item, Accumulator>(
		reducer: Unary<
			[item: Item],
			Unary<[accumulator: Accumulator], Awaitable<Accumulator>>
		>,
	): Unary<
		[initialValue: Accumulator],
		<Iterable extends AwaitableIterable<Item>>(
			iterable: Iterable,
		) => Promise<Accumulator>
	> =>
	(initialValue: Accumulator) =>
	async <Iterable extends AwaitableIterable<Item>>(iterable: Iterable) => {
		let accumulator: Accumulator = initialValue;

		await forEach(
			async (item: Item) =>
				void (accumulator = await reducer(item)(accumulator)),
		)(iterable);

		return accumulator;
	};
