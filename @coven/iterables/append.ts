import { iteratorFunctionToIterableIterator } from "./iteratorFunctionToIterableIterator.ts";

/**
 * Appends one iterable to another.
 *
 * @example
 * ```typescript
 * const appendNumbers = append([0, 1, 2, 3, 4]);
 *
 * appendNumbers(["foo", "bar"]); // ["foo", "bar", 0, 1, 2, 3, 4]
 * appendNumbers([]); // [0, 1, 2, 3, 4]
 * ```
 * @param tailIterable Iterable to be appended.
 * @returns Curried generator function with `tailIterable` set in context.
 */
export const append =
	<const TailItem>(
		tailIterable: Iterable<TailItem>,
	): (<const InitialItem>(
		initialIterable: Iterable<InitialItem>,
	) => IterableIterator<TailItem | InitialItem>) =>
	<const InitialItem>(initialIterable: Iterable<InitialItem>) =>
		iteratorFunctionToIterableIterator(function* (): Generator<
			TailItem | InitialItem
		> {
			yield* initialIterable;
			yield* tailIterable;
		});
