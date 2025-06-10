import type { Enumerate } from "./Enumerate.ts";

/**
 * Day of the week values in numeric format (from `0` to `6`).
 *
 * @example
 * ```typescript
 * const daysOfWeek = [0, 1, 2, 3, 4, 5, 6] as const satisfies Iterable<DayOfWeek>;
 * ```
 * @see {@linkcode Enumerate}
 * @see [Date](https://coven.to/mdn/Date)
 */
export type DayOfWeek = Enumerate<6>;
