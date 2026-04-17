import { memoFunction } from "@coven/memo";
import { isFunction } from "@coven/predicates";
import type { Unary } from "@coven/types";
import { isPrecise } from "./isPrecise.ts";
import { numberToPrecise } from "./numberToPrecise.ts";
import type { Precise } from "./precise.ts";
import type { PreciseFunction } from "./PreciseFunction.ts";
import { preciseToNumber } from "./preciseToNumber.ts";

/**
 * Type to represent curried math functions.
 */
export type NumberFunction = Unary<
	[right: number],
	Unary<[left: number], number>
>;

/**
 * Curried function to generate number to number math functions out of precies
 * functions.
 *
 * @example
 * ```typescript
 * import { preciseDivide } from "@coven/math";
 *
 * const divide = numberFunction(preciseDivide, (right) => (left) => left / right);
 * const half = divide(2);
 *
 * half(1); // 0.5
 * ```
 * @param preciseFunction Precise function to be used.
 * @param fallback Optional fallback function for NaN/Infinite values.
 * @returns Curried function number to number operations.
 */
export const numberFunction = (
	preciseFunction: PreciseFunction<Precise | number>,
	fallback: NumberFunction,
): NumberFunction =>
	memoFunction((right) => {
		const preciseRight = numberToPrecise(right);
		const preciseOperationRight =
			isPrecise(preciseRight) ?
				preciseFunction(...preciseRight)
			:	preciseRight;

		return isFunction(preciseOperationRight) ?
				memoFunction((left) => {
					const preciseLeft = numberToPrecise(left);
					const result =
						isPrecise(preciseLeft) ?
							preciseOperationRight(...preciseLeft)
						:	left;

					return isPrecise(result) ?
							preciseToNumber(...result)
						:	result;
				})
			:	fallback(right);
	});
