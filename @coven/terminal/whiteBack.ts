import type { Background } from "./Background.ts";
import { CLOSE_BACKGROUND } from "./CLOSE_BACKGROUND.ts";
import { format } from "./format.ts";

/**
 * **White** background wrapper.
 *
 * Given an `input` string, it will return a new string with the ANSI codes for
 * **white** background around it.
 *
 * @example
 * ```typescript
 * whiteBack("Coven"); // "\u001B[47mCoven\u001B[49m"
 * // It can also be used as a tag function for tagged templates:
 * whiteBack`Coven`; // "\u001B[47mCoven\u001B[49m"
 * ```
 * @see {@linkcode format}
 * @see {@linkcode Background}
 * @see [3-bit and 4-bit ANSI colors](https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit)
 */
export const whiteBack: Background<47> = format(47, CLOSE_BACKGROUND);
