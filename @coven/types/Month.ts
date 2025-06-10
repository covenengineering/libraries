import type { Enumerate } from "./Enumerate.ts";

/**
 * ISO Month values in number format (from `0` to `11`).
 *
 * @example
 * ```typescript
 * const months = [1, 6, 11] as const satisfies Iterable<Month>;
 * ```
 * @see {@linkcode Enumerate}
 * @see [Date](https://coven.to/mdn/Date)
 */
export type Month = Enumerate<11>;
