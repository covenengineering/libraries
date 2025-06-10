import type { Digit } from "./Digit.ts";
import type { Enumerate } from "./Enumerate.ts";

/**
 * ISO minutes values in string format (from `"00"` to `"59"`).
 *
 * @example
 * ```typescript
 * const minutes = ["00", "30", "59"] as const satisfies Iterable<ISOMinutes>;
 * ```
 * @see {@linkcode Digit}
 * @see {@linkcode Enumerate}
 * @see [Date](https://coven.to/mdn/Date)
 */
export type ISOMinutes = `${Enumerate<5>}${Digit}`;
