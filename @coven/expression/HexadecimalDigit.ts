import type { Digit } from "@coven/types";

/**
 * Possible digits for an hexadecimal number.
 */
export type HexadecimalDigit = `${Digit | "A" | "B" | "C" | "D" | "E" | "F"}`;
