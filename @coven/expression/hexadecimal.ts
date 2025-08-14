import { memo } from "@coven/memo";
import type { HexadecimalDigit } from "./HexadecimalDigit.ts";
import { escape } from "./escape.ts";

/**
 * Represents the character with the given hexadecimal Unicode code point. The
 * hexadecimal number must be exactly two digits long.
 *
 * @example Escape two letter hexadecimal
 * ```typescript
 * hexadecimal("0C"); // "\x0C"
 * ```
 * @see [Character escape](https://coven.to/mdn/Regular_expressions/Character_escape)
 */
export const hexadecimal: <
	const HexadecimalValue extends `${HexadecimalDigit}${HexadecimalDigit}`,
>(
	hexadecimalValue: HexadecimalValue,
) => `\\x${HexadecimalValue}` = memo((hexadecimalValue) =>
	escape(`x${hexadecimalValue}`)
);
