import type { Numeric } from "@coven/types";
import { createObject } from "@coven/utils";
import type { Calculation } from "./Calculation.ts";
import { numericToPrecise } from "./numericToPrecise.ts";
import { preciseAdd } from "./preciseAdd.ts";
import { preciseDivide } from "./preciseDivide.ts";
import type { PreciseFunction } from "./PreciseFunction.ts";
import { preciseMultiply } from "./preciseMultiply.ts";
import { preciseSubtract } from "./preciseSubtract.ts";
import { preciseToNumber } from "./preciseToNumber.ts";
import { preciseToString } from "./preciseToString.ts";

/**
 * A chainable set of operations.
 *
 * @example
 * ```typescript
 * calculate(0.1).plus(0.2).valueOf(); // 0.3
 * calculate(0.7).plus(0.3).over(4).times(2).minus(0.2).valueOf(); // 0.3
 * ```
 * @see {@linkcode preciseAdd}
 * @see {@linkcode preciseDivide}
 * @see {@linkcode preciseMultiply}
 * @see {@linkcode preciseSubtract}
 * @param value Value to run operations on.
 * @returns An object with `divideBy`, `minus`, `plus` and `times` methods and a `value` property.
 */
export const calculate = (value: Numeric): Calculation => {
	/** @internal Current value (always holds a {@linkcode Precise}). */
	let left = numericToPrecise(value);

	/** Curried function to generate the methods for each precise function */
	const method = (preciseFunction: PreciseFunction) =>
		({
			get:
				() =>
				(right: Numeric): Calculation => (
					(left = preciseFunction(numericToPrecise(right))(left)),
					calculation
				),
		}) as const satisfies PropertyDescriptor;

	/** Output object (read only and as lazy as possible) */
	const calculation = Object.defineProperties(createObject(), {
		minus: method(preciseSubtract),
		over: method(preciseDivide),
		plus: method(preciseAdd),
		raw: { get: () => left },
		times: method(preciseMultiply),
		toString: { value: () => preciseToString(left) },
		valueOf: { value: () => preciseToNumber(left) },
	}) as Calculation;

	return calculation;
};
