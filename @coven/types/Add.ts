import type { EmptyArray } from "./EmptyArray.ts";
import type { IndexArray } from "./IndexArray.ts";
import type { ReadonlyArray } from "./ReadonlyArray.ts";

/**
 * Recursively generates the result of adding `Addend` to `Augend`.
 *
 * > [!WARNING]
 * > This is expensive and has the same limit TypeScript has for recursive types.
 *
 * @example
 * ```typescript
 * type thirteen = Add<10, 3>; // 13
 * ```
 * @see {@linkcode ReadonlyArray}
 * @template Addend Addend of the add operation.
 * @template Augend Augend of the add operation.
 * @template _Accumulator **⚠️ INTERNAL:** Accumulator for the recursion.
 * @template _Total **⚠️ INTERNAL:** Total so far.
 */
export type Add<
	Addend extends number,
	Augend extends number,
	_Accumulator extends ReadonlyArray = EmptyArray,
	_Total extends ReadonlyArray = IndexArray<Addend>,
> = _Accumulator["length"] extends Augend
	? _Total["length"] extends number ? _Total["length"]
	: never
	: Add<Addend, Augend, [..._Accumulator, never], [..._Total, never]>;
