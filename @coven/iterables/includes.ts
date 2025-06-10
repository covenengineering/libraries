import { is } from "@coven/predicates";
import type { Filter } from "@coven/types";
import { some } from "./some.ts";

/**
 * Tries to find the given `searchItem` in iterable.
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
): Filter<[iterable: Iterable<unknown>]> => some(is(searchItem));
