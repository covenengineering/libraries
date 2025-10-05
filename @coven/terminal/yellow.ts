import { CLOSE_FOREGROUND } from "./CLOSE_FOREGROUND.ts";
import type { Foreground } from "./Foreground.ts";
import { format } from "./format.ts";

/**
 * **Yellow** foreground wrapper.
 *
 * Given an `input` string, it will return a new string with the ANSI codes for
 * **yellow** foreground.
 *
 * @example
 * ```typescript
 * yellow("Coven"); // "\u001B[33mCoven\u001B[39m"
 * // It can also be used as a tag function for tagged templates:
 * yellow`Coven`; // "\u001B[33mCoven\u001B[39m"
 * ```
 * @see {@linkcode format}
 * @see {@linkcode Foreground}
 * @see {@linkcode https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit 3-bit and 4-bit ANSI color}
 */
export const yellow: Foreground<33> = format(33, CLOSE_FOREGROUND);
