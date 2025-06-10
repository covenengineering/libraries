import type { Digit } from "@coven/types";

/**
 * Possible digits for an hexadecimal number.
 *
 * @see [Character escape](https://coven.to/mdn/Regular_expressions/Character_escape)
 */
export type HexadecimalDigit = `${Digit | "A" | "B" | "C" | "D" | "E" | "F"}`;
