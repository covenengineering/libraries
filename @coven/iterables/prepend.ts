import { append } from "./append.ts";

/**
 * Prepends one iterable to another.
 *
 * @example
 * ```typescript
 * const prependNumbers = prepend([0, 1, 2, 3, 4]);
 * prependNumbers(["foo", "bar"]); // [0, 1, 2, 3, 4, "foo", "bar"]
 * ```
 * @param initialIterable Iterable to be appended.
 * @returns Curried generator function with `initialIterable` set in context.
 */
export const prepend =
	<InitialItem>(
		initialIterable: Iterable<InitialItem>,
	): (<TailItem>(
		tailIterable: Iterable<TailItem>,
	) => IterableIterator<InitialItem | TailItem>) =>
	tailIterable =>
		append(tailIterable)(initialIterable);
