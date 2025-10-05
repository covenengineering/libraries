import type { Background } from "./Background.ts";
import { CLOSE_BACKGROUND } from "./CLOSE_BACKGROUND.ts";
import { format } from "./format.ts";

/**
 * **Bright red** background wrapper.
 *
 * Given an `input` string, it will return a new string with the ANSI codes for
 * **bright red** background around it.
 *
 * @example
 * ```typescript
 * bgBrightRed("Coven"); // "\u001B[101mCoven\u001B[49m"
 * // It can also be used as a tag function for tagged templates:
 * bgBrightRed`Coven`; // "\u001B[101mCoven\u001B[49m"
 * ```
 * @see {@linkcode format}
 * @see {@linkcode Background}
 * @see {@linkcode https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit 3-bit and 4-bit ANSI color}
 */
export const bgBrightRed: Background<101> = format(101, CLOSE_BACKGROUND);
