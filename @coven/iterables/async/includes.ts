import { is } from "@coven/predicates";
import type { AsyncFilter, AwaitableIterable } from "@coven/types";
import { some } from "./some.ts";

/**
 * Tries to find the given `searchItem` in iterable or asynchronous iterable.
 *
 * @example
 * ```typescript
 * const includesTwo = includes(2);
 * includesTwo([1, 2, 3, 4]); // true
 * includesTwo([1, 3, 5, 7]); // false
 * ```
 * @param searchItem Item to search.
 * @returns Curried function with `searchItem` set in context.
 */
export const includes = <SearchItem>(
	searchItem: SearchItem,
): AsyncFilter<[iterable: AwaitableIterable]> => some(is(searchItem));
