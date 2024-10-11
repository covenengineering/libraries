import type { Unary } from "@coven/types";
import { getIterator } from "./getIterator.ts";

/**
 * For each function for iterables.
 *
 * @example
 * ```typescript
 * const logEach = forEach(console.log);
 *
 * logEach([1, 2, 3]); // Logs 1, 2 and 3 separately
 * ```
 * @param callback Function to be called for every item of the iterable.
 * @returns Curried function that expects an iterable to loop over and has `callback` set in context.
 */
export const forEach = <Item>(
	callback: Unary<[item: Item], void>,
): (iterable: Iterable<Item>) => void =>
(iterable) => getIterator(iterable).forEach(callback);
