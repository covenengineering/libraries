import type { Nullary, Numeric, Unary } from "@coven/types";
import type { PreciseString } from "./PreciseString.ts";
import type { Precise } from "./precise.ts";

/**
 * Object returned by the `calculate` function, which recursively returns itself
 * from all its methods. To access the current value the following properties
 * can be used:
 *
 * - `raw`: Current {@linkcode Precise} value of {@linkcode Calculation}.
 * - `toString()`: Current `string` representation of {@linkcode Precise} value of
 * {@linkcode Calculation}. JavaScript will use this method automatically when
 * concatenating with a string.
 * - `valueOf()`: Current `number` representation of {@linkcode Precise} value of
 * {@linkcode Calculation}. JavaScrip will use this method automatically when
 * doing operation with primitive values.
 */
export type Calculation = Readonly<{
	/**
	 * Subtracts given `subtrahend` to the current value in the
	 * {@linkcode Calculation}.
	 *
	 * @param subtrahend Value to subtract.
	 * @returns Calculation object.
	 */
	minus: Unary<[subtrahend: Numeric], Calculation>;

	/**
	 * Divide previous value in {@linkcode Calculation} by the given `divisor`.
	 *
	 * @param divisor Value to divide by.
	 * @returns Calculation object.
	 */
	over: Unary<[divisor: Numeric], Calculation>;

	/**
	 * Adds given `addend` to the current value in the {@linkcode Calculation}.
	 *
	 * @param subtrahend Value to add.
	 * @returns Calculation object.
	 */
	plus: Unary<[addend: Numeric], Calculation>;

	/**
	 * Current {@linkcode Precise} value.
	 */
	raw: Precise;

	/**
	 * `string` representation of the current {@linkcode Precise}
	 * {@linkcode Calculation} value.
	 */
	toString: Nullary<PreciseString>;

	/**
	 * Multiplies previous value in {@linkcode Calculation} times the given
	 * `multiplier`.
	 *
	 * @param divisor Value to multiply by.
	 * @returns Calculation object.
	 */
	times: Unary<[multiplier: Numeric], Calculation>;

	/**
	 * `number` representation of the current {@linkcode Precise}
	 * {@linkcode Calculation} value.
	 */
	valueOf: Nullary<number>;
}>;
