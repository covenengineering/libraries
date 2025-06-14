import type { Enumerate } from "./Enumerate.ts";

/**
 * ISO seconds values in number format (from `0` to `59`).
 *
 * @example
 * ```typescript
 * const seconds = [0, 30, 59] as const satisfies Iterable<Seconds>;
 * ```
 * @see {@linkcode Enumerate}
 * @see [Date](https://coven.to/mdn/Date)
 */
export type Seconds = Enumerate<59>;
