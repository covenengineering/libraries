import type { Background } from "./Background.ts";
import { CLOSE_BACKGROUND } from "./constants.ts";
import { format } from "./format.ts";

/**
 * Given an `input` string, it will return a new string with the ANSI codes for
 * **green** background around it.
 *
 * @example
 * ```typescript
 * greenBack("Coven"); // "\u001B[42mCoven\u001B[49m"
 * // It can also be used as a tag function for tagged templates:
 * greenBack`Coven`; // "\u001B[42mCoven\u001B[49m"
 * ```
 * @see {@link format}
 * @see {@link Background}
 * @see [3-bit and 4-bit ANSI colors](https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit)
 */
export const greenBack: Background<42> = format(42, CLOSE_BACKGROUND);
