import type { Maybe } from "@coven/types";
import type { Precise } from "./PreciseTuple.ts";

/**
 * Object returned by the `calculate` function, which recursively returns itself
 * from all its methods. To get the value the dev has to run `toValue()`.
 */
export type Calculation = Readonly<{
	/**
	 * Divide previous `value` in calculation by the given `divisor`.
	 *
	 * @param divisor Value to divide by.
	 * @returns Calculation (use `toValue()` to get the final value).
	 */
	dividedBy: (divisor: number) => Calculation;

	/**
	 * Subtracts given `subtrahend` to the current `value` in the calculation.
	 *
	 * @param subtrahend Value to subtract.
	 * @returns Calculation (use `toValue()` to get the final value).
	 */
	minus: (subtrahend: number) => Calculation;

	/**
	 * Adds given `addend` to the current `value` in the calculation.
	 *
	 * @param subtrahend Value to add.
	 * @returns Calculation (use `toValue()` to get the final value).
	 */
	plus: (addend: number) => Calculation;

	/**
	 * Current {@linkcode Precise} value.
	 */
	precise: Maybe<Precise>;

	/**
	 * Multiplies previous `value` in calculation times the given `multiplier`.
	 *
	 * @param divisor Value to multiply by.
	 * @returns Calculation (use `toValue()` to get the final value).
	 */
	times: (multiplier: number) => Calculation;

	/**
	 * Current `number` value.
	 */
	total: Maybe<number>;
}>;
