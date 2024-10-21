import type { Background } from "./Background.ts";
import { CLOSE_BACKGROUND } from "./CLOSE_BACKGROUND.ts";
import { format } from "./format.ts";

/**
 * **Bright cyan** background wrapper.
 *
 * Given an `input` string, it will return a new string with the ANSI codes for
 * **bright cyan** background around it.
 *
 * @example
 * ```typescript
 * bgBrightCyan("Coven"); // "\u001B[106mCoven\u001B[49m"
 * // It can also be used as a tag function for tagged templates:
 * bgBrightCyan`Coven`; // "\u001B[106mCoven\u001B[49m"
 * ```
 * @see {@linkcode format}
 * @see {@linkcode Background}
 * @see [3-bit and 4-bit ANSI colors](https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit)
 */
export const bgBrightCyan: Background<106> = format(106, CLOSE_BACKGROUND);
