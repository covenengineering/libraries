import type { EmptyString } from "./EmptyString.ts";
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
 * @see {@linkcode EmptyString}
 * @see {@linkcode Nullish}
 * @see [Falsy](https://mdn.io/Falsy)
 */
export type Falsy = 0 | 0n | EmptyString | false | Nullish;
