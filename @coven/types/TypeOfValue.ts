import type { KeyOf } from "./KeyOf.ts";
import type { TypeOfDictionary } from "./TypeOfDictionary.ts";

/**
 * Possible type values returned by `typeof`, including the proposed but never
 * added type `"null"` for `null`.
 *
 * @example
 * ```typescript
 * const typeString = "string" as const satisfies TypeOfValue;
 * const typeBoolean = "boolean" as const satisfies TypeOfValue;
 * const typeFunction = "function" as const satisfies TypeOfValue;
 * ```
 * @see {@link KeyOf}
 * @see {@link TypeOfDictionary}
 * @see [typeof null bug](https://lou.cx/null-bug)
 * @see [typeof typeof rejected proposal](https://lou.cx/null-typeof)
 */
export type TypeOfValue = KeyOf<TypeOfDictionary>;
