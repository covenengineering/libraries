import { CLOSE_FOREGROUND } from "./CLOSE_FOREGROUND.ts";
import type { Foreground } from "./Foreground.ts";
import { format } from "./format.ts";

/**
 * **Cyan** foreground wrapper.
 *
 * Given an `input` string, it will return a new string with the ANSI codes for
 * **cyan** foreground.
 *
 * @example
 * ```typescript
 * cyan("Coven"); // "\u001B[36mCoven\u001B[39m"
 * // It can also be used as a tag function for tagged templates:
 * cyan`Coven`; // "\u001B[36mCoven\u001B[39m"
 * ```
 * @see {@linkcode format}
 * @see {@linkcode Foreground}
 * @see [3-bit and 4-bit ANSI colors](https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit)
 */
export const cyan: Foreground<36> = format(36, CLOSE_FOREGROUND);
