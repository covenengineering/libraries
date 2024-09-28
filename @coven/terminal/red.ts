import type { Foreground } from "./Foreground.ts";
import { CLOSE_FOREGROUND } from "./constants.ts";
import { format } from "./format.ts";

/**
 * Given an `input` string, it will return a new string with the ANSI codes for
 * **red** foreground.
 *
 * @example
 * ```typescript
 * red("Coven"); // "\u001B[31mCoven\u001B[39m"
 * // It can also be used as a tag function for tagged templates:
 * red`Coven`; // "\u001B[31mCoven\u001B[39m"
 * ```
 * @see {@link format}
 * @see {@link Foreground}
 * @see [3-bit and 4-bit ANSI colors](https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit)
 */
export const red: Foreground<31> = format(31, CLOSE_FOREGROUND);
