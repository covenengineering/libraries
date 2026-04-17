import { isUndefined } from "@coven/predicates";
import type { Maybe } from "@coven/types";
import type { Calculation } from "./Calculation.ts";
import { numberToPrecise } from "./numberToPrecise.ts";
import { preciseAdd } from "./preciseAdd.ts";
import { preciseDivide } from "./preciseDivide.ts";
import type { PreciseFunction } from "./PreciseFunction.ts";
import { preciseMultiply } from "./preciseMultiply.ts";
import { preciseSubtract } from "./preciseSubtract.ts";
import { preciseToNumber } from "./preciseToNumber.ts";
import type { Precise } from "./PreciseTuple.ts";

/**
 * A chainable set of operations.
 *
 * @example
 * ```typescript
 * calculate(0.1).plus(0.2).total; // 0.3
 * calculate(0.7).plus(0.3).dividedBy(4).times(2).minus(0.2).total; // 0.3
 * ```
 * @see {@linkcode preciseAdd}
 * @see {@linkcode preciseDivide}
 * @see {@linkcode preciseMultiply}
 * @see {@linkcode preciseSubtract}
 * @param value Value to run operations on.
 * @returns An object with `divideBy`, `minus`, `plus` and `times` methods and a `value` property.
 */
export const calculate = (value: number): Calculation => {
	let precise = numberToPrecise(value);

	const calculationMethod =
		<Output extends Precise | Maybe<Precise>>(
			preciseFunction: PreciseFunction<Output>,
		) =>
		(right: number): Calculation => {
			if (!isUndefined(precise)) {
				const preciseRight = numberToPrecise(right);

				if (!isUndefined(preciseRight)) {
					precise = preciseFunction(...preciseRight)(...precise);
				}
			}

			return calculation;
		};

	const calculation = Object.freeze({
		dividedBy: calculationMethod(preciseDivide),
		minus: calculationMethod(preciseSubtract),
		plus: calculationMethod(preciseAdd),
		precise,
		times: calculationMethod(preciseMultiply),
		get total() {
			return isUndefined(precise) ? undefined : (
					preciseToNumber(...precise)
				);
		},
	});

	return calculation;
};
