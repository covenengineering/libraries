import type { AwaitableIterable } from "@coven/types";
import { isAsyncIterable } from "./isAsyncIterable.ts";
import { isIterable } from "./isIterable.ts";

/**
 * Check if given value is `AwaitableIterable` (either `Iterable` or
 * `AsyncIterable`).
 *
 * > [!IMPORTANT]
 * > Not to be confused with `isAsyncIterable` which only checks for
 * > `AsyncIterable`
 *
 * @example
 * ```typescript
 * isAwaitableIterable([]); // true
 * isAwaitableIterable({}); // false
 * ```
 * @param input Value to check.
 * @returns `true` when is an `IsomorphicIterable`, `false` otherwise.
 */
export const isAwaitableIterable = <Item>(
	input: unknown,
): input is AwaitableIterable<Item> =>
	isIterable(input) || isAsyncIterable(input);
