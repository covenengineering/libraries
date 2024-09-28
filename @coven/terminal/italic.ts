import type { CurriedFormat } from "./CurriedFormat.ts";
import { format } from "./format.ts";

/**
 * _Italic_ code wrapper.
 *
 * @example
 * ```typescript
 * italic("Coven Engineering"); // "[3mCoven Engineering[23m"
 * // It can also be used as a tag function for tagged templates:
 * italic`Coven Engineering`; // "[3mCoven Engineering[23m"
 * ```
 * @see {@link format}
 * @see {@link CurriedFormat}
 * @see [SGR (Select Graphic Rendition) parameters](https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_.28Select_Graphic_Rendition.29_parameters)
 */
export const italic: CurriedFormat<3, 23> = format(3, 23);
