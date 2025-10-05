import type { Background } from "./Background.ts";
import { CLOSE_BACKGROUND } from "./CLOSE_BACKGROUND.ts";
import { format } from "./format.ts";

/**
 * **Blue** background wrapper.
 *
 * Given an `input` string, it will return a new string with the ANSI codes for
 * **blue** background around it.
 *
 * @example
 * ```typescript
 * bgBlue("Coven"); // "\u001B[44mCoven\u001B[49m"
 * // It can also be used as a tag function for tagged templates:
 * bgBlue`Coven`; // "\u001B[44mCoven\u001B[49m"
 * ```
 * @see {@linkcode format}
 * @see {@linkcode Background}
 * @see {@linkcode https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit 3-bit and 4-bit ANSI color}
 */
export const bgBlue: Background<44> = format(44, CLOSE_BACKGROUND);
