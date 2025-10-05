import { CLOSE_FOREGROUND } from "./CLOSE_FOREGROUND.ts";
import type { Foreground } from "./Foreground.ts";
import { format } from "./format.ts";

/**
 * **Red** foreground wrapper.
 *
 * Given an `input` string, it will return a new string with the ANSI codes for
 * **red** foreground.
 *
 * @example
 * ```typescript
 * red("Coven"); // "\u001B[31mCoven\u001B[39m"
 * // It can also be used as a tag function for tagged templates:
 * red`Coven`; // "\u001B[31mCoven\u001B[39m"
 * ```
 * @see {@linkcode format}
 * @see {@linkcode Foreground}
 * @see {@linkcode https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit 3-bit and 4-bit ANSI color}
 */
export const red: Foreground<31> = format(31, CLOSE_FOREGROUND);
