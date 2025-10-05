import type { Digit } from "./Digit.ts";
import type { Enumerate } from "./Enumerate.ts";

/**
 * ISO seconds values in string format (from `"00"` to `"59"`).
 *
 * @example
 * ```typescript
 * const seconds = ["00", "30", "59"] as const satisfies Iterable<ISOSeconds>;
 * ```
 * @see {@linkcode Digit}
 * @see {@linkcode Enumerate}
 * @see {@linkcode https://coven.to/mdn/Date Date}
 */
export type ISOSeconds = `${Enumerate<5>}${Digit}`;
