import type { Enumerate } from "./Enumerate.ts";

/**
 * ISO milliseconds values in number format (from `0` to `999`).
 *
 * @example
 * ```typescript
 * const milliseconds = [1, 250, 999] as const satisfies Iterable<Milliseconds>;
 * ```
 * @see {@link Enumerate}
 * @see [Date](https://mdn.io/Date)
 */
export type Milliseconds = Enumerate<999>;
