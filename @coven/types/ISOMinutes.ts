import type { Digit } from "./Digit.ts";
import type { Enumerate } from "./Enumerate.ts";

/**
 * ISO minutes values in string format (from `"00"` to `"59"`).
 *
 * @example
 * ```typescript
 * const minutes = ["00", "30", "59"] as const satisfies Iterable<ISOMinutes>;
 * ```
 * @see {@link Digit}
 * @see {@link Enumerate}
 * @see [Date](https://mdn.io/Date)
 */
export type ISOMinutes = `${Enumerate<5>}${Digit}`;
