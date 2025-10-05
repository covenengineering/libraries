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
 * @see {@linkcode KeyOf}
 * @see {@linkcode TypeOfDictionary}
 * @see {@linkcode https://lou.cx/null-bug typeof null bug}
 * @see {@linkcode https://lou.cx/null-typeof typeof typeof rejected proposal}
 */
export type TypeOfValue = KeyOf<TypeOfDictionary>;
