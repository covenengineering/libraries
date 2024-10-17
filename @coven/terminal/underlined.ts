import type { CurriedFormat } from "./CurriedFormat.ts";
import { format } from "./format.ts";

/**
 * <ins>Underlined</ins> wrapper.
 *
 * @example
 * ```typescript
 * underlined("Coven Engineering"); // "[4mCoven Engineering[24m"
 * // It can also be used as a tag function for tagged templates:
 * underlined`Coven Engineering`; // "[4mCoven Engineering[24m"
 * ```
 * @see {@linkcode format}
 * @returns `input` string with <ins>Underlined</ins> format.
 */
export const underlined: CurriedFormat<4, 24> = format(4, 24);
