import type { CurriedFormat } from "./CurriedFormat.ts";
import { format } from "./format.ts";

/**
 * **Bold** wrapper.
 *
 * @example
 * ```typescript
 * bold("Coven Engineering"); // "[1mCoven Engineering[22m"
 * // It can also be used as a tag function for tagged templates:
 * bold`Coven Engineering`; // "[1mCoven Engineering[22m"
 * ```
 * @see {@linkcode format}
 * @see {@linkcode CurriedFormat}
 * @see [SGR (Select Graphic Rendition) parameters](https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_.28Select_Graphic_Rendition.29_parameters)
 */
export const bold: CurriedFormat<1, 22> = format(1, 22);
