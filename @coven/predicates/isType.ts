import { memo } from "@coven/memo";
import type { TypeOfDictionary, TypeOfValue } from "@coven/types";
import type { IsTypeFunction } from "./IsTypeFunction.ts";

/**
 * Takes a `type` string and checks if given `input` is of that `typeof`.
 *
 * > [!TIP]
 * > This "patches" typeof so `null` is not `"object"` but `"null"` instead
 * > (rejected proposal for lack of backwards compatibility, more details
 * > [here](https://lou.cx/null-typeof)).
 *
 * @example
 * ```typescript
 * const isString = isType("string");
 *
 * isString("value"); // true
 * isString(1); // false
 * ```
 * @returns Curried function with `type` in context that returns `true` if
 * `input` is of `typeof` `type`, `false` otherwise.
 */
export const isType: <Type extends TypeOfValue>(
	type: Type,
) => IsTypeFunction<Type> = memo(
	<Type extends TypeOfValue>(type: Type): IsTypeFunction<Type> =>
		(input): input is TypeOfDictionary[Type] =>
			// deno-lint-ignore coven/no-null
			(input === null ? `${input}` : typeof input) === type,
);
