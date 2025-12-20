import { memo } from "@coven/memo";
import type { Stringable } from "@coven/types";
import { escape } from "./escape.ts";

/**
 * Represents the character with the given hexadecimal Unicode code point. The
 * hexadecimal number can be from 1 to 6 digits long.
 *
 * > [!WARNING]
 * > [Unicode-aware](https://coven.to/mdn/RegExp/unicode) mode required.
 *
 * @example Create an escaped hex value
 * ```typescript
 * unicode("0c"); // "\u0c"
 * ```
 * @see {@linkcode https://coven.to/mdn/Regular_expressions/Character_escape Character escape}
 * @param hexadecimalValue Hex value (between 1 and 6 digits).
 * @returns Unicode character escape.
 */
export const unicode: <const HexadecimalValue extends Stringable>(
	hexadecimalValue: HexadecimalValue,
) => `\\u{${HexadecimalValue}}` = memo((hexadecimalValue) =>
	escape(`u{${hexadecimalValue}}`),
);
