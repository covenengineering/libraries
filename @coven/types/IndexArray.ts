import type { EmptyArray } from "./EmptyArray.ts";
import type { ReadonlyArray } from "./ReadonlyArray.ts";

/**
 * Recursively generates an Array type with the given length.
 * This is expensive and has the same limit TypeScript has for recursive types.
 *
 * @example
 * ```typescript
 * type Array10 = ArrayLength<10>; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 * @see {@link ReadonlyArray}
 * @template Length Length of generated Array type.
 * @template _Accumulator **⚠️ INTERNAL:** Accumulator for the recursion.
 * @see {@link EmptyArray}
 * @see {@link ReadonlyArray}
 */
export type IndexArray<
	Length extends number = 0,
	_Accumulator extends ReadonlyArray<number> = EmptyArray,
> = _Accumulator["length"] extends Length ? _Accumulator
	: IndexArray<Length, [..._Accumulator, _Accumulator["length"]]>;
