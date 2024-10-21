import type { Nullish } from "./Nullish.ts";
import type { Numeric } from "./Numeric.ts";

/**
 * Union of all JavaScript primitive types.
 *
 * @example
 * ```typescript
 * const aBigInt = 13n as const satisfies Primitive;
 * const aBoolean = true as const satisfies Primitive;
 * const aNull = null satisfies Primitive;
 * const aNumber = 13 as const satisfies Primitive;
 * const anUndefined = undefined satisfies Primitive;
 * const aString = "🧙‍♀️" as const satisfies Primitive;
 * const aSymbol = Symbol("🧙‍♀️") satisfies Primitive;
 * ```
 * @see {@linkcode Nullish}
 * @see {@linkcode Numeric}
 * @see [Primitive](https://mdn.io/Primitive)
 */
export type Primitive = boolean | Nullish | Numeric | string | symbol;
