import { isType } from "./isType.ts";
import type { IsTypeFunction } from "./IsTypeFunction.ts";

/**
 * `typeof` "null" alias. This "patches" typeof so `null` is not `"object"` but
 * `"null"` instead (rejected proposal for lack of backwards compatibility, more
 * details [here](https://lou.cx/null-typeof)).
 *
 * @example
 * ```typescript
 * isNull(null); // true
 * isNull(undefined); // false
 * ```
 * @returns `true` if the given value is a `null`, `false` otherwise.
 */
export const isNull: IsTypeFunction<"null"> = isType("null");
