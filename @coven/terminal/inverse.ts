import type { CurriedFormat } from "./CurriedFormat.ts";
import { format } from "./format.ts";

/**
 * Inverse wrapper.
 *
 * @example
 * ```typescript
 * inverse("Coven Engineering"); // "[7mCoven Engineering[27m"
 * // It can also be used as a tag function for tagged templates:
 * inverse`Coven Engineering`; // "[7mCoven Engineering[27m"
 * ```
 * @see {@linkcode format}
 * @see {@linkcode CurriedFormat}
 * @see {@linkcode https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_.28Select_Graphic_Rendition.29_parameters SGR (Select Graphic Rendition) parameter}
 */
export const inverse: CurriedFormat<7, 27> = format(7, 27);
