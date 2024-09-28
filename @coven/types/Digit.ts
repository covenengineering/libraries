import type { Enumerate } from "./Enumerate.ts";

/**
 * Valid digits (`0` to `9`).
 *
 * @example
 * ```typescript
 * const numbers = [
 * 	0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
 * ] as const satisfies Iterable<Digit>;
 * ```
 * @see {@link Enumerate}
 */
export type Digit = Enumerate<9>;
