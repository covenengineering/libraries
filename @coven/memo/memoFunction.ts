import type { Multary } from "@coven/types";
import type { MemoizableTuple } from "./MemoizableTuple.ts";
import { memo } from "./memo.ts";

/**
 * Caches a function's output based on it's parameters. Given the same
 * parameters, will produce the same output.
 *
 * @example
 * ```typescript
 * const expensiveOperation = (value: number) => value * 2;
 * const memoizedOperation = memoFunction(expensiveOperation);
 *
 * memoizedOperation(2); // 4
 * memoizedOperation(2); // 4 (cached)
 * ```
 * @template Cacheable cacheable function's type.
 * @param cacheable Function to be cached.
 * @returns Function with cached output.
 */
export const memoFunction = <const Cacheable extends Multary>(
	cacheable: Cacheable
		& (Parameters<Cacheable> extends MemoizableTuple ? Multary : never),
): Cacheable => {
	const memoizedOutputCache = new Map<
		MemoizableTuple,
		ReturnType<Cacheable>
	>();
	const cacheReturnValue = (parameters: MemoizableTuple) =>
		cacheable(
			...(parameters as ReadonlyArray<never>),
		) as ReturnType<Cacheable>;

	return Object.freeze((...parameters: MemoizableTuple) =>
		memoizedOutputCache.getOrInsertComputed(
			memo(parameters),
			cacheReturnValue,
		),
	) as unknown as Cacheable;
};
