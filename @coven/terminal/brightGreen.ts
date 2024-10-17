import { CLOSE_FOREGROUND } from "./CLOSE_FOREGROUND.ts";
import type { Foreground } from "./Foreground.ts";
import { format } from "./format.ts";

/**
 * **Bright green** foreground wrapper.
 *
 * Given an `input` string, it will return a new string with the ANSI codes for
 * **bright green** foreground.
 *
 * @example
 * ```typescript
 * brightGreen("Coven"); // "\u001B[92mCoven\u001B[39m"
 * // It can also be used as a tag function for tagged templates:
 * brightGreen`Coven`; // "\u001B[92mCoven\u001B[39m"
 * ```
 * @see {@linkcode format}
 * @see {@linkcode Foreground}
 * @see [3-bit and 4-bit ANSI colors](https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit)
 */
export const brightGreen: Foreground<92> = format(92, CLOSE_FOREGROUND);
