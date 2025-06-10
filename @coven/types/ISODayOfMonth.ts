import type { Digit } from "./Digit.ts";

/**
 * Day of the month values in string format (`"01"` to `"31"`).
 *
 * @example
 * ```typescript
 * const days = ["01", "15", "31"] as const satisfies Iterable<ISODayOfMonth>;
 * ```
 * @see {@linkcode Digit}
 * @see [Date](https://coven.to/mdn/Date)
 */
export type ISODayOfMonth =
	| `${1 | 2}${Digit}`
	| `0${Exclude<Digit, 0>}`
	| `3${0 | 1}`;
