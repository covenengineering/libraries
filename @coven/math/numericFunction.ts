import { memoFunction } from "@coven/memo";
import type { Numeric, Unary } from "@coven/types";
import { numericToPrecise } from "./numericToPrecise.ts";
import type { PreciseFunction } from "./PreciseFunction.ts";
import { preciseToNumber } from "./preciseToNumber.ts";

/**
 * Type to represent curried arithmetic functions.
 */
export type NumericFunction = Unary<
	[right: Numeric],
	Unary<[left: Numeric], number>
>;

/**
 * Curried function to generate {@linkcode Numeric} to `number` arithmetic
 * functions out of `Precise` arithmetic functions.
 *
 * @example
 * ```typescript
 * import { preciseDivide } from "@coven/math";
 *
 * const divide = numericFunction(preciseDivide);
 * const half = divide(2);
 *
 * half(1); // 0.5
 * ```
 * @param preciseFunction `Precise` arithmetic function to be used.
 * @returns Curried function {@linkcode Numeric} to number operations.
 */
export const numericFunction = (
	preciseFunction: PreciseFunction,
): NumericFunction =>
	memoFunction((right) => {
		const preciseOperationRight = preciseFunction(numericToPrecise(right));

		return memoFunction((left) =>
			preciseToNumber(preciseOperationRight(numericToPrecise(left))),
		);
	});
