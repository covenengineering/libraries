import type { Stringable } from "@coven/types";
import { escape } from "./escape.ts";

/**
 * Matches any character that is not in the specified unicode category. Requires
 * the `u` flag.
 *
 * @see [Unicode Character class escape](https://mdn.io/Unicode%20character%20class%20escape)
 */
export const notUnicodeCharacterClassEscape = <
	const Category extends Stringable,
>(
	category: Category,
): `\\P{${Category}}` => escape(`P{${category}}`);