import type { Unary } from "@coven/types";
import { getIterator } from "./getIterator.ts";

/**
 * Reducer function for iterables.
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
export const reduce = <Item, Accumulator>(
	reducer: Unary<
		[item: Item],
		Unary<[accumulator: Accumulator], Accumulator>
	>,
): (
	initialValue: Accumulator,
) => (iterable: Iterable<Item>) => Accumulator =>
(initialValue) =>
(iterable) =>
	getIterator(iterable).reduce(
		(accumulator, item) => reducer(item)(accumulator),
		initialValue,
	);
