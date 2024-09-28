import type { CurriedFormat } from "./CurriedFormat.ts";
import { format } from "./format.ts";

/**
 * Inverse code wrapper.
 *
 * @example
 * ```typescript
 * inverse("Coven Engineering"); // "[7mCoven Engineering[27m"
 * // It can also be used as a tag function for tagged templates:
 * inverse`Coven Engineering`; // "[7mCoven Engineering[27m"
 * ```
 * @see {@link format}
 * @see {@link CurriedFormat}
 * @see [SGR (Select Graphic Rendition) parameters](https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_.28Select_Graphic_Rendition.29_parameters)
 */
export const inverse: CurriedFormat<7, 27> = format(7, 27);
