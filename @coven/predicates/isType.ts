import type { TypeOfDictionary, TypeOfValue } from "@coven/types";
import { is } from "./is.ts";
import type { IsTypeFunction } from "./IsTypeFunction.ts";
import { typeOf } from "./typeOf.ts";

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
) => IsTypeFunction<Type> =
	<Type extends TypeOfValue>(type: Type): IsTypeFunction<Type> =>
	<IsType extends TypeOfDictionary[Type] = TypeOfDictionary[Type]>(
		input: unknown,
	): input is IsType =>
		is(typeOf(input))(type);
