import type { Digit } from "./Digit.ts";
import type { Enumerate } from "./Enumerate.ts";

/**
 * Hours values in string format (from `"00"` to `"23"`).
 *
 * @example
 * ```typescript
 * const hours = ["00", "06", "23"] as const satisfies Iterable<ISOHours>;
 * ```
 * @see {@link Digit}
 * @see {@link Enumerate}
 * @see [Date](https://mdn.io/Date)
 */
export type ISOHours = `${0 | 1}${Digit}` | `2${Enumerate<3>}`;
