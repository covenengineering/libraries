import type { EmptyArray } from "./EmptyArray.ts";
import type { EmptyString } from "./EmptyString.ts";
import type { IndexArray } from "./IndexArray.ts";
import type { ReadonlyArray } from "./ReadonlyArray.ts";
import type { Stringable } from "./Stringable.ts";

/**
 * Joins all the items of the given stringable array using the given "glue".
 *
 * @example
 * ```typescript
 * type CovenEngineering = StringJoin<readonly ["Coven", "Engineering"], " ">; // "Coven Engineering"
 * ```
 * @see {@link EmptyString}
 * @see {@link ReadonlyArray}
 * @see {@link Stringable}
 * @template StringableArray Array to join.
 * @template Glue String to use to glue items together.
 * @template _Accumulator **⚠️ INTERNAL:** Output accumulator.
 * @template _Tracker **⚠️ INTERNAL:** Loop tracking accumulator.
 */
export type StringJoin<
	StringableArray extends ReadonlyArray<Stringable> = EmptyArray,
	Glue extends string = EmptyString,
	_Accumulator extends string = `${StringableArray[0]}`,
	_Tracker extends ReadonlyArray<number> = IndexArray<1>,
> = StringableArray["length"] extends 0 ? EmptyString
	: StringableArray["length"] extends 1 ? _Accumulator
	: _Tracker["length"] extends StringableArray["length"] ? _Accumulator
	: StringJoin<
		StringableArray,
		Glue,
		`${_Accumulator}${Glue}${StringableArray[_Tracker["length"]]}`,
		[..._Tracker, _Tracker["length"]]
	>;
