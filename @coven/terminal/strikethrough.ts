import type { CurriedFormat } from "./CurriedFormat.ts";
import { format } from "./format.ts";

/**
 * ~~Strikethrough~~ code wrapper.
 *
 * @example
 * ```typescript
 * strikethrough("Coven Engineering"); // "[9mCoven Engineering[29m"
 * // It can also be used as a tag function for tagged templates:
 * strikethrough`Coven Engineering`; // "[9mCoven Engineering[29m"
 * ```
 * @see {@link format}
 * @returns `input` string with ~~strikethrough~~ format.
 */
export const strikethrough: CurriedFormat<9, 29> = format(9, 29);
