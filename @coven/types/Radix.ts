import type { Range } from "./Range.ts";

/**
 * Valid radix values (from `2` to `36`). Useful for `parseInt` type of
 * functions.
 *
 * @example
 * ```typescript
 * const binary = 0b10 as const satisfies Radix;
 * const decimal = 10 as const satisfies Radix;
 * const hexadecimal = 0x10 as const satisfies Radix;
 * ```
 * @see {@link Range}
 */
export type Radix = Range<2, 36>;
