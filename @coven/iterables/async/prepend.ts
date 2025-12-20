import type { AwaitableIterable } from "@coven/types";
import { append } from "./append.ts";

/**
 * Prepends one iterable or asynchronous iterable to another.
 *
 * @example
 * ```typescript
 * const prependNumbers = prepend([0, 1, 2, 3, 4]);
 * prependNumbers(["foo", "bar"]); // [0, 1, 2, 3, 4, "foo", "bar"]
 * ```
 * @param initialIterable Iterable or asynchronous iterable to be appended.
 * @returns Curried generator function with `initialIterable` set in context.
 */
export const prepend =
	<InitialItem>(
		initialIterable: AwaitableIterable<InitialItem>,
	): (<TailItem>(
		tailIterable: AwaitableIterable<TailItem>,
	) => AsyncIterableIterator<TailItem | InitialItem>) =>
	(tailIterable) =>
		append(tailIterable)(initialIterable);
