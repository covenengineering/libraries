import { memo } from "@coven/memo";
import type { Stringable } from "@coven/types";
import { escape } from "./escape.ts";

/**
 * Matches a character in the specified unicode category. Requires the `u` flag.
 *
 * @see [Unicode Character class escape](https://mdn.io/Unicode%20character%20class%20escape)
 */
export const unicodeCharacterClassEscape: <const Category extends Stringable>(
	category: Category,
) => `\\p{${Category}}` = memo(category => escape(`p{${category}}`));
