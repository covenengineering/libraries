import type { IsomorphicIterable } from "@coven/types";
import { isAsyncIterable } from "./isAsyncIterable.ts";
import { isIterable } from "./isIterable.ts";

/**
 * Check if given value is `IsomorphicIterable` (either `Iterable` or
 * `AsyncIterable`).
 *
 * **Not to be confused with `isAsyncIterable` which only checks for
 * `AsyncIterable`.**
 *
 * @example
 * ```typescript
 * isIterable([]); // true
 * isIterable({}); // false
 * ```
 * @param input Value to check.
 * @returns `true` when is an `IsomorphicIterable`, `false` otherwise.
 */
export const isIsomorphicIterable = <Item>(
	input: unknown,
): input is IsomorphicIterable<Item> =>
	isIterable(input) || isAsyncIterable(input);
