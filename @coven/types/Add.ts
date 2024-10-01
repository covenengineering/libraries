import type { EmptyArray } from "./EmptyArray.ts";
import type { IndexArray } from "./IndexArray.ts";
import type { ReadonlyArray } from "./ReadonlyArray.ts";

/**
 * Recursively generates the result of adding `Addend1` to `Addend2`. This is
 * expensive and has the same limit TypeScript has for recursive types.
 *
 * @example
 * ```typescript
 * type thirteen = Add<10, 3>; // 13
 * ```
 * @see {@link ReadonlyArray}
 * @template Addend1 First addend of the add operation.
 * @template Addend2 Second addend of the add operation.
 * @template _Accumulator **⚠️ INTERNAL:** Accumulator for the recursion.
 * @template _Total **⚠️ INTERNAL:** Total so far.
 */
export type Add<
	Addend1 extends number,
	Addend2 extends number,
	_Accumulator extends ReadonlyArray = EmptyArray,
	_Total extends ReadonlyArray = IndexArray<Addend1>,
> =
	_Accumulator["length"] extends Addend2 ?
		_Total["length"] extends number ?
			_Total["length"]
		:	never
	:	Add<Addend1, Addend2, [..._Accumulator, never], [..._Total, never]>;
