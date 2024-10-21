import type { Background } from "./Background.ts";
import { CLOSE_BACKGROUND } from "./CLOSE_BACKGROUND.ts";
import { format } from "./format.ts";

/**
 * **Yellow** background wrapper.
 *
 * Given an `input` string, it will return a new string with the ANSI codes for
 * **yellow** background around it.
 *
 * @example
 * ```typescript
 * bgYellow("Coven"); // "\u001B[43mCoven\u001B[49m"
 * // It can also be used as a tag function for tagged templates:
 * bgYellow`Coven`; // "\u001B[43mCoven\u001B[49m"
 * ```
 * @see {@linkcode format}
 * @see {@linkcode Background}
 * @see [3-bit and 4-bit ANSI colors](https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit)
 */
export const bgYellow: Background<43> = format(43, CLOSE_BACKGROUND);
