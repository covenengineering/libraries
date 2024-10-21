import type { Range } from "./Range.ts";

/**
 * Day of the month values in numeric format (from `1` to `31`).
 *
 * @example
 * ```typescript
 * const days = [1, 2, 3, 28, 29, 30, 31] as const satisfies Iterable<DayOfMonth>;
 * ```
 * @see {@linkcode Range}
 * @see [Date](https://mdn.io/Date)
 */
export type DayOfMonth = Range<1, 31>;
