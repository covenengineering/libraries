import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import type { ReadonlyArray } from "@coven/types";
import { MEMO_ROOT } from "./MEMO_ROOT.ts";
import type { MemoCache } from "./MemoCache.ts";
import type { Memoizable } from "./Memoizable.ts";
import type { MemoizableRecord } from "./MemoizableRecord.ts";
import { memoizableRecordToMemoizableTuple } from "./memoizableRecordToMemoizableTuple.ts";
import type { MemoizableTuple } from "./MemoizableTuple.ts";
import type { Memoized } from "./Memoized.ts";
import { memoizedCacheReducer } from "./memoizedCacheReducer.ts";
import type { MemoizedItem } from "./MemoizedItem.ts";
import type { MemoizedRecordCache } from "./MemoizedRecordCache.ts";
import type { MemoizedTupleCache } from "./MemoizedTupleCache.ts";

/**
 * Cache of tuples.
 */
const memoizedTupleCache: MemoizedTupleCache = new Map();

/**
 * Cache of records.
 */
const memoizedRecordCache: MemoizedRecordCache = new Map();

export const memo: {
	/**
	 * Memoize a record or tuple and makes it read-only.
	 *
	 * @example
	 * ```typescript
	 * memo(["foo", "bar"]) === memo(["foo", "bar"]); // true
	 * ```
	 * @param memoizable Value to memoize.
	 * @returns Memoized read-ony record or tuple.
	 */
	<const MemoizableValue extends Memoizable>(
		memoizable: MemoizableValue &
			(MemoizableValue extends ReadonlyArray ? MemoizableTuple
			:	MemoizableRecord),
	): Memoized<MemoizableValue>;
	/**
	 * Memoize function return values. Given the same arguments, the same value
	 * is returned without re-running the memoized function.
	 *
	 * @example
	 * ```typescript
	 * const expensiveOperation = (value: number) => value * 2;
	 * const memoizedOperation = memo(expensiveOperation);
	 *
	 * memoizedOperation(2); // 4
	 * memoizedOperation(2); // 4 (cached)
	 * ```
	 * @param memoizable Function to memoize.
	 * @returns Curried function with `unary` in context.
	 */
	<Function extends (...parameters: ReadonlyArray<never>) => unknown>(
		memoizable: Function,
	): Function;
} = (
	value: ((...parameters: ReadonlyArray<never>) => unknown) | Memoizable,
): unknown => {
	if (typeof value === "function") {
		const memoizedOutputCache = new Map();

		return (...parameters: ReadonlyArray<MemoizedItem>) => {
			const tupleParameters = memo(parameters);

			return (
				memoizedOutputCache.has(tupleParameters) ? memoizedOutputCache
				:	memoizedOutputCache.set(
						tupleParameters,
						value(
							...(tupleParameters as unknown as ReadonlyArray<never>),
						),
					)).get(tupleParameters);
		};
	} else {
		// Array.isArray aren't great, so this is an inline patch
		const isArray = (
			Array.isArray as (value: unknown) => value is MemoizableTuple
		)(value);
		const normalizedValue =
			isArray ? value : memoizableRecordToMemoizableTuple(value);

		return (
			normalizedValue.length > 0 ?
				memoizedCacheReducer(
					normalizedValue.reduce(
						memoizedCacheReducer as (
							cache: MemoCache,
							item: MemoizedItem,
						) => MemoCache,
						isArray ? memoizedTupleCache : memoizedRecordCache,
					),
					MEMO_ROOT,
					value,
				)
			: isArray ? EMPTY_ARRAY
			: EMPTY_OBJECT
		);
	}
};
