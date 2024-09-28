import type { Enumerate } from "./Enumerate.ts";

/**
 * Hours values in numeric format (from `0` to `23`).
 *
 * @example
 * ```typescript
 * const hours = [0, 1, 2, 3, 20, 21, 22, 23] as const satisfies Iterable<Hours>;
 * ```
 * @see {@link Enumerate}
 * @see [Date](https://mdn.io/Date)
 */
export type Hours = Enumerate<23>;
