import type { ReadonlyArray } from "@coven/types";
import { mapGetRecursive } from "./mapGetRecursive.ts";
import { mapSetRecursive } from "./mapSetRecursive.ts";

/**
 * Memoize function return values for expensive operations.
 *
 * @example
 * ```typescript
 * const expensiveOperation = (value: number) => value * 2;
 * const memoizedOperation = memoize(expensiveOperation);
 *
 * memoizedOperation(2); // 4
 * memoizedOperation(2); // 4 (cached)
 * ```
 * @param memoizable Function to memoize.
 * @returns Curried function with `unary` in context.
 */
export const memoize = <
	Function extends (...parameters: ReadonlyArray<never>) => unknown,
>(memoizable: Function): Function => {
	const cache: Map<Parameters<Function>, ReturnType<Function>> = new Map();

	return ((
		...parameters: Parameters<Function>
	) => mapGetRecursive(cache, parameters) ??
		(mapSetRecursive(
			cache,
			parameters,
			memoizable(
				...(parameters as unknown as ReadonlyArray<never>),
			) as ReturnType<
				Function
			>,
		),
			mapGetRecursive(cache, parameters))) as unknown as Function;
};
