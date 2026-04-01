import type { Primitive, TypeOfDictionary } from "@coven/types";

/**
 * Given `input`, return patched `typeof`. This is mainly meant to be used by
 * other utils that will cover all possible types of `typeof`. For regular
 * predicate of type, use native `typeof`.
 *
 * > [!TIP]
 * > This "patches" typeof so `null` is not `"object"` but `"null"` instead
 * > (rejected proposal for lack of backwards compatibility, more details
 * > [here](https://lou.cx/null-typeof)).
 *
 * @example
 * ```typescript
 * typeOf("value"); // "string"
 * typeOf(1); // "number"
 * typeOf(null); // "null"
 * typeOf({}); // "object"
 * ```
 * @returns `TypeOfValue` (a string representing the type of the `input`).
 */
export const typeOf = <const Input>(
	input: Input,
): Input extends Primitive ?
	{
		[Key in keyof TypeOfDictionary]: Input extends TypeOfDictionary[Key] ?
			Key
		:	never;
	}[keyof TypeOfDictionary]
:	"object" =>
	// deno-lint-ignore coven/no-null
	(input === null ? `${input}` : typeof input) as Input extends Primitive ?
		{
			[Key in keyof TypeOfDictionary]: Input extends (
				TypeOfDictionary[Key]
			) ?
				Key
			:	never;
		}[keyof TypeOfDictionary]
	:	"object";
