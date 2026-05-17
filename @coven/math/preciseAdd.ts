import { memoFunction } from "@coven/memo";
import { alwaysPreciseNaN } from "./alwaysPreciseNaN.ts";
import { getPreciseCoefficient } from "./getPreciseCoefficient.ts";
import { getPreciseExponent } from "./getPreciseExponent.ts";
import { isPreciseNaN } from "./isPreciseNaN.ts";
import { powerOf10 } from "./powerOf10.ts";
import { precise } from "./precise.ts";
import { PRECISE_NAN } from "./PRECISE_NAN.ts";
import type { PreciseFunction } from "./PreciseFunction.ts";

/**
 * Curried add operation using the internal `Precise` type.
 *
 * @example
 * ```typescript
 * import { precise } from "@coven/math";
 *
 * const addDot2 = preciseAdd(precise(2n, 0n));
 *
 * addDot2(precise(1n, -1n)); // precise(3n, -1n)
 * ```
 * @see {@linkcode PreciseFunction}
 * @param augend Augend to use in the right side of the addition.
 * @returns Curried function with `augend` in context.
 */
export const preciseAdd: PreciseFunction = memoFunction((augend) => {
	if (isPreciseNaN(augend)) {
		return alwaysPreciseNaN;
	} else {
		const augendCoefficient = getPreciseCoefficient(augend);
		const augendExponent = getPreciseExponent(augend);

		return memoFunction((addend) => {
			if (isPreciseNaN(addend)) {
				return PRECISE_NAN;
			} else {
				const addendExponent = getPreciseExponent(addend);

				const commonExponent =
					addendExponent < augendExponent ? addendExponent : (
						augendExponent
					);

				return precise(
					augendCoefficient
						* powerOf10(augendExponent - commonExponent)
						+ getPreciseCoefficient(addend)
							* powerOf10(addendExponent - commonExponent),
					commonExponent,
				);
			}
		});
	}
});
