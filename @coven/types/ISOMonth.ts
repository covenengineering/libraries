import type { Digit } from "./Digit.ts";
import type { Enumerate } from "./Enumerate.ts";

/**
 * ISO Month values in string format (from `"01"` to `"12"`).
 *
 * @example
 * ```typescript
 * const months = ["01", "06", "12"] as const satisfies Iterable<ISOMonth>;
 * ```
 * @see {@linkcode Digit}
 * @see {@linkcode Enumerate}
 * @see [Date](https://coven.to/mdn/Date)
 */
export type ISOMonth = `0${Exclude<Digit, 0>}` | `1${Enumerate<2>}`;
