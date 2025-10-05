import type { CurriedFormat } from "./CurriedFormat.ts";
import { format } from "./format.ts";

/**
 * Dimmed wrapper.
 *
 * @example
 * ```typescript
 * dimmed("Coven Engineering"); // "[2mCoven Engineering[22m"
 * // It can also be used as a tag function for tagged templates:
 * dimmed`Coven Engineering`; // "[2mCoven Engineering[22m"
 * ```
 * @see {@linkcode format}
 * @see {@linkcode CurriedFormat}
 * @see {@linkcode https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_.28Select_Graphic_Rendition.29_parameters SGR (Select Graphic Rendition) parameter}
 * @param `input` string value to be formatted.
 * @returns `input` string with dimmed format.
 */
export const dimmed: CurriedFormat<2, 22> = format(2, 22);
