import { memo } from "@coven/memo";
import type { Stringable } from "@coven/types";
import { escape } from "./escape.ts";

/**
 * A unicode character class escape is a kind of
 * [character class escape](https://coven.to/mdn/Regular_expressions/Character_class_escape)
 * that matches a set of characters specified by a Unicode property. When the
 * [`v`](https://coven.to/mdn/RegExp/unicodeSets) flag is enabled, it can also
 * be used to match finite-length strings.
 *
 * > [!WARNING]
 * > [Unicode-aware](https://coven.to/mdn/RegExp/unicode) mode required.
 *
 * @example Create a non-unicode character class
 * ```typescript
 * nonUnicodeCharacterClass("Emoji_Presentation"); // "\P{Emoji_Presentation}"
 * ```
 * @see [Unicode Character class escape](https://coven.to/mdn/Regular_expressions/Unicode_character_class_escape)
 * @param category Unicode category.
 * @returns Negated unicode character class escape.
 */
export const nonUnicodeCharacterClass: <const Category extends Stringable>(
	category: Category,
) => `\\P{${Category}}` = memo((category) => escape(`P{${category}}`));
