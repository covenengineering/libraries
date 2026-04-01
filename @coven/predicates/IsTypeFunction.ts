import type { TypeOfDictionary } from "@coven/types";

/**
 * Function that maps the given `input` value to a type of `TypeOfDictionary`.
 *
 * @see {@linkcode https://coven.to/types/doc/~/TypeOfDictionary TypeOfDictionary}
 * @template Type Key of `TypeOfDictionary`.
 */
export type IsTypeFunction<Type extends keyof TypeOfDictionary> = <
	IsType extends TypeOfDictionary[Type] = TypeOfDictionary[Type],
>(
	input: unknown,
) => input is IsType;
