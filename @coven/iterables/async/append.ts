import type { AwaitableIterable } from "@coven/types";
import { iteratorFunctionToAsyncIterableIterator } from "./iteratorFunctionToAsyncIterableIterator.ts";

/**
 * Appends one iterable or asynchronous iterable to another.
 *
 * @example
 * ```typescript
 * const appendNumbers = append([0, 1, 2, 3, 4]);
 *
 * appendNumbers(["foo", "bar"]); // ["foo", "bar", 0, 1, 2, 3, 4]
 * appendNumbers([]); // [0, 1, 2, 3, 4]
 * ```
 * @param tailIterable Iterable or asynchronous to be appended.
 * @returns Curried generator function with `tailIterable` set in context.
 */
export const append =
	<TailItem>(
		tailIterable: AwaitableIterable<TailItem>,
	): (<InitialItem>(
		initialIterable: AwaitableIterable<InitialItem>,
	) => AsyncIterableIterator<InitialItem | TailItem>) =>
	<InitialItem>(initialIterable: AwaitableIterable<InitialItem>) =>
		iteratorFunctionToAsyncIterableIterator(
			async function* (): AsyncGenerator<InitialItem | TailItem> {
				yield* initialIterable;
				yield* tailIterable;
			},
		);
