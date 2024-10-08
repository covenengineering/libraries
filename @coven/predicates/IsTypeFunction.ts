import type { TypeOfDictionary } from "@coven/types";

/**
 * Function that maps the given `input` value to a type of
 * {@link TypeOfDictionary}.
 *
 * @template Type Key of `TypeOfDictionary`.
 */
export type IsTypeFunction<Type extends keyof TypeOfDictionary> = (
	input: unknown,
) => input is TypeOfDictionary[Type];
