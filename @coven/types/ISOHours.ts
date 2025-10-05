import type { Digit } from "./Digit.ts";
import type { Enumerate } from "./Enumerate.ts";

/**
 * Hours values in string format (from `"00"` to `"23"`).
 *
 * @example
 * ```typescript
 * const hours = ["00", "06", "23"] as const satisfies Iterable<ISOHours>;
 * ```
 * @see {@linkcode Digit}
 * @see {@linkcode Enumerate}
 * @see {@linkcode https://coven.to/mdn/Date Date}
 */
export type ISOHours = `${0 | 1}${Digit}` | `2${Enumerate<3>}`;
