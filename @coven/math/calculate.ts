import { memo } from "@coven/memo";
import { always } from "@coven/utils";
import { add } from "./add.ts";
import type { Calculation } from "./Calculation.ts";
import { divide } from "./divide.ts";
import { multiply } from "./multiply.ts";
import { subtract } from "./subtract.ts";

/**
 * A chainable set of operations.
 *
 * @example
 * ```typescript
 * calculate(0.1).plus(0.2); // 0.3
 * calculate(0.7).plus(0.3).dividedBy(4).times(2).minus(0.2); // 0.3
 * ```
 * @see {@linkcode add}
 * @see {@linkcode divide}
 * @see {@linkcode multiply}
 * @see {@linkcode subtract}
 * @param value Value to run operations on.
 * @returns An object with `divideBy`, `minus`, `plus` and `times` methods and a `value` property.
 */
export const calculate: (value: number) => Calculation = memo(
	(value: number): Calculation => ({
		/**
		 * Divide previous `value` in calculation by the given `divisor`.
		 *
		 * @param divisor Value to divide by.
		 * @returns Calculation (use `toValue()` to get the final value).
		 */
		dividedBy: (divisor: number) => calculate(divide(divisor)(value)),

		/**
		 * Subtracts given `subtrahend` to the current `value` in the calculation.
		 *
		 * @param subtrahend Value to subtract.
		 * @returns Calculation (use `toValue()` to get the final value).
		 */
		minus: (subtrahend: number) => calculate(subtract(subtrahend)(value)),

		/**
		 * Adds given `addend` to the current `value` in the calculation.
		 *
		 * @param subtrahend Value to add.
		 * @returns Calculation (use `toValue()` to get the final value).
		 */
		plus: (augend: number) => calculate(add(augend)(value)),

		/**
		 * Multiplies previous `value` in calculation times the given `multiplier`.
		 *
		 * @param divisor Value to multiply by.
		 * @returns Calculation (use `toValue()` to get the final value).
		 */
		times: (multiplier: number) => calculate(multiply(multiplier)(value)),

		/**
		 * Current value of the calculation.
		 */
		valueOf: always(value),
	}),
);
