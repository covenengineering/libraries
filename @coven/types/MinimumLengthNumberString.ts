import type { Digit } from "./Digit.ts";
import type { IndexArray } from "./IndexArray.ts";

/**
 * String with more than 1 number on it. This type is useful when a given string
 * will need more than one number on it.
 *
 * @example
 * ```typescript
 * const test1 = "1" as const satisfies MinimumLengthNumberString<1>;
 * const test2 = "01" as const satisfies MinimumLengthNumberString<2>;
 * const test3 = "012" as const satisfies MinimumLengthNumberString<3>;
 * ```
 * @see {@linkcode Digit}
 * @template MinimumLength Minimum length for the number string.
 * @template _Accumulator **⚠️ INTERNAL:** Output accumulator.
 * @template _Tracker **⚠️ INTERNAL:** Loop tracking accumulator.
 */
export type MinimumLengthNumberString<
	MinimumLength extends number = 2,
	_Accumulator extends string = `${bigint}${bigint}`,
	_Tracker extends ReadonlyArray<number> = IndexArray<2>,
> = MinimumLength extends 0 ? ""
	: MinimumLength extends 1 ? `${Digit}`
	: _Tracker["length"] extends MinimumLength ? _Accumulator
	: MinimumLengthNumberString<
		MinimumLength,
		`${_Accumulator}${bigint}`,
		[..._Tracker, _Tracker["length"]]
	>;
