import type { EmptyArray } from "./EmptyArray.ts";
import type { ReadonlyArray } from "./ReadonlyArray.ts";

/**
 * Recursively generates an Array type with the given length.
 *
 * > [!WARNING]
 * > This is expensive and has the same limit TypeScript has for recursive types.
 *
 * @example
 * ```typescript
 * type Array10 = IndexArray<10>; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 * @see {@linkcode ReadonlyArray}
 * @template Length Length of generated Array type.
 * @template _Accumulator **⚠️ INTERNAL:** Accumulator for the recursion.
 * @see {@linkcode EmptyArray}
 * @see {@linkcode ReadonlyArray}
 */
export type IndexArray<
	Length extends number = 0,
	_Accumulator extends ReadonlyArray<number> = EmptyArray,
> = _Accumulator["length"] extends Length ? _Accumulator
	: IndexArray<Length, [..._Accumulator, _Accumulator["length"]]>;
