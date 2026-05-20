import { memoFunction } from "@coven/memo";
import type { Numeric } from "@coven/types";
import { createObject } from "@coven/utils";
import type { Calculation } from "./Calculation.ts";
import { numericToPrecise } from "./numericToPrecise.ts";
import type { Precise } from "./precise.ts";
import { preciseAdd } from "./preciseAdd.ts";
import { preciseDivide } from "./preciseDivide.ts";
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
 * @returns An object with chainable methods to update the current value.
 */
export const calculate = memoFunction((value: Numeric): Calculation => {
	const createCalculation = memoFunction((raw: Precise) =>
		Object.freeze(
			createObject({
				minus: (right: Numeric) =>
					createCalculation(
						preciseSubtract(numericToPrecise(right))(raw),
					),
				over: (right: Numeric) =>
					createCalculation(
						preciseDivide(numericToPrecise(right))(raw),
					),
				plus: (right: Numeric) =>
					createCalculation(preciseAdd(numericToPrecise(right))(raw)),
				raw,
				times: (right: Numeric) =>
					createCalculation(
						preciseMultiply(numericToPrecise(right))(raw),
					),
				toString: () => preciseToString(raw),
				valueOf: () => preciseToNumber(raw),
			}),
		),
	);

	return createCalculation(numericToPrecise(value));
});
