import type { Nullish } from "./Nullish.ts";

/**
 * Types that evaluates to `false`. Due to TypeScript type limitations `NaN`
 * can't be included.
 *
 * @example
 * ```typescript
 * const falsyBoolean = false as const satisfies Falsy;
 * const falsyNegativeZero = -0 as const satisfies Falsy;
 * const falsyNegativeZeroBigInt = -0n as const satisfies Falsy;
 * const falsyNull = null satisfies Falsy;
 * const falsyString = "" as const satisfies Falsy;
 * const falsyUndefined = undefined satisfies Falsy;
 * const falsyZero = 0 as const satisfies Falsy;
 * const falsyZeroBigInt = 0n as const satisfies Falsy;
 * ```
 * @see {@linkcode Nullish}
 * @see [Falsy](https://coven.to/mdn/Glossary/Falsy)
 */
export type Falsy = 0 | 0n | "" | false | Nullish;
