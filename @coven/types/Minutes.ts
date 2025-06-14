import type { Enumerate } from "./Enumerate.ts";

/**
 * ISO minutes values in number format (from `0` to `59`).
 *
 * @example
 * ```typescript
 * const minutes = [0, 30, 59] as const satisfies Iterable<Minutes>;
 * ```
 * @see {@linkcode Enumerate}
 * @see [Date](https://coven.to/mdn/Date)
 */
export type Minutes = Enumerate<59>;
