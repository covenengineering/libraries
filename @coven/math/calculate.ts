import type { Calculation } from "./Calculation.ts";
import { fallbackAdd } from "./fallbackAdd.ts";
import { fallbackDivide } from "./fallbackDivide.ts";
import { fallbackMultiply } from "./fallbackMultiply.ts";
import { fallbackSubtract } from "./fallbackSubtract.ts";
import { isPrecise } from "./isPrecise.ts";
import type { NumberFunction } from "./numberFunction.ts";
import { numberToPrecise } from "./numberToPrecise.ts";
import type { Precise } from "./precise.ts";
import { preciseAdd } from "./preciseAdd.ts";
import { preciseDivide } from "./preciseDivide.ts";
import type { PreciseFunction } from "./PreciseFunction.ts";
import { preciseMultiply } from "./preciseMultiply.ts";
import { preciseSubtract } from "./preciseSubtract.ts";
import { preciseToNumber } from "./preciseToNumber.ts";

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
	let left = numberToPrecise(value);

	const method =
		<Output extends Precise | number>(
			precise: PreciseFunction<Output>,
			fallback: NumberFunction,
		) =>
		(right: number): Calculation => {
			const preciseRight = numberToPrecise(right);

			left =
				isPrecise(left) && isPrecise(preciseRight) ?
					precise(...preciseRight)(...left)
				:	fallback(right)(
						isPrecise(left) ? preciseToNumber(...left) : left,
					);

			return calculation;
		};

	const calculation = Object.freeze({
		dividedBy: method(preciseDivide, fallbackDivide),
		minus: method(preciseSubtract, fallbackSubtract),
		plus: method(preciseAdd, fallbackAdd),
		precise: left,
		times: method(preciseMultiply, fallbackMultiply),
		get total() {
			return isPrecise(left) ? preciseToNumber(...left) : left;
		},
	});

	return calculation;
};
