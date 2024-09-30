import type { Unary } from "@coven/types";

/**
 * Memoize function return values for expensive operations.
 *
 * @category Functions
 * @example
 * ```typescript
 * const expensiveOperation = (value: number) => value * 2;
 * const memoizedOperation = memoize(expensiveOperation);
 *
 * memoizedOperation(2); // 4
 * memoizedOperation(2); // 4 (cached)
 * ```
 * @param unary Function to memoize.
 * @returns Curried function with `unary` in context.
 */
export const memoize = <
	MemoizedFunction extends Unary<[value: never], unknown>,
>(
	unary: MemoizedFunction,
): MemoizedFunction => {
	const cache = new Map<
		Parameters<MemoizedFunction>[0],
		ReturnType<MemoizedFunction>
	>();

	return ((input: Parameters<MemoizedFunction>[0]) =>
		cache.get(input) ??
			cache
				.set(
					input,
					unary(input as never) as ReturnType<MemoizedFunction>,
				)
				.get(input)) as unknown as MemoizedFunction;
};
