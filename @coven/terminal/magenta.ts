import { CLOSE_FOREGROUND } from "./CLOSE_FOREGROUND.ts";
import type { Foreground } from "./Foreground.ts";
import { format } from "./format.ts";

/**
 * **Magenta** foreground wrapper.
 *
 * Given an `input` string, it will return a new string with the ANSI codes for
 * **magenta** foreground.
 *
 * @example
 * ```typescript
 * magenta("Coven"); // "\u001B[35mCoven\u001B[39m"
 * // It can also be used as a tag function for tagged templates:
 * magenta`Coven`; // "\u001B[35mCoven\u001B[39m"
 * ```
 * @see {@linkcode format}
 * @see {@linkcode Foreground}
 * @see {@linkcode https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit 3-bit and 4-bit ANSI color}
 */
export const magenta: Foreground<35> = format(35, CLOSE_FOREGROUND);
