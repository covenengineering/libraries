import type { Background } from "./Background.ts";
import { CLOSE_BACKGROUND } from "./CLOSE_BACKGROUND.ts";
import { format } from "./format.ts";

/**
 * **Cyan** background wrapper.
 *
 * Given an `input` string, it will return a new string with the ANSI codes for
 * **cyan** background around it.
 *
 * @example
 * ```typescript
 * bgCyan("Coven"); // "\u001B[46mCoven\u001B[49m"
 * // It can also be used as a tag function for tagged templates:
 * bgCyan`Coven`; // "\u001B[46mCoven\u001B[49m"
 * ```
 * @see {@linkcode format}
 * @see {@linkcode Background}
 * @see [3-bit and 4-bit ANSI colors](https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit)
 */
export const bgCyan: Background<46> = format(46, CLOSE_BACKGROUND);
