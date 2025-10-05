import { CLOSE_FOREGROUND } from "./CLOSE_FOREGROUND.ts";
import type { Foreground } from "./Foreground.ts";
import { format } from "./format.ts";

/**
 * **Bright red** foreground wrapper.
 *
 * Given an `input` string, it will return a new string with the ANSI codes for
 * **bright red** foreground.
 *
 * @example
 * ```typescript
 * brightRed("Coven"); // "\u001B[91mCoven\u001B[39m"
 * // It can also be used as a tag function for tagged templates:
 * brightRed`Coven`; // "\u001B[91mCoven\u001B[39m"
 * ```
 * @see {@linkcode format}
 * @see {@linkcode Foreground}
 * @see {@linkcode https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit 3-bit and 4-bit ANSI color}
 *
 * @param `input` string value to be colored.
 * @returns `input` string with **bright red** foreground.
 */
export const brightRed: Foreground<91> = format(91, CLOSE_FOREGROUND);
