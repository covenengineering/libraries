import type { Enumerate } from "./Enumerate.ts";

/**
 * ISO milliseconds values in number format (from `0` to `999`).
 *
 * @example
 * ```typescript
 * const milliseconds = [1, 250, 999] as const satisfies Iterable<Milliseconds>;
 * ```
 * @see {@linkcode Enumerate}
 * @see {@linkcode https://coven.to/mdn/Date Date}
 */
export type Milliseconds = Enumerate<999>;
