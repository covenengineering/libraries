import type { Digit } from "@coven/types";

/**
 * Possible digits for an hexadecimal number.
 *
 * @see {@linkcode https://coven.to/mdn/Regular_expressions/Character_escape Character escape}
 */
export type HexadecimalDigit = `${Digit | "A" | "B" | "C" | "D" | "E" | "F"}`;
