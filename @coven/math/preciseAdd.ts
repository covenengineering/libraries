import { memoFunction } from "@coven/memo";
import type { PreciseFunction } from "./PreciseFunction.ts";
import { precise } from "./precise.ts";
import { preciseToBigInt } from "./preciseToBigInt.ts";

/**
 * Curried add operation using the internal `Precise` type.
 *
 * @example
 * ```typescript
 * const addDot2 = preciseAdd(2n, 0n);
 *
 * addDot2(1n, -1n); // [3n, -1n]
 * ```
 * @see {@linkcode precise}
 * @see {@linkcode PreciseFunction}
 * @see {@linkcode preciseToBigInt}
 * @param augendBase Augend base to use in the right side of the addition.
 * @param augendExponent Augend exponent to use in the right side of the addition.
 * @returns Curried function with `augendBase` and `augendExponent` in context.
 */
export const preciseAdd: PreciseFunction = memoFunction(
	(augendBase, augendExponent) =>
		memoFunction((addendBase, addendExponent) => {
			const commonExponent =
				addendExponent < augendExponent ? addendExponent : (
					augendExponent
				);

			return precise(
				preciseToBigInt(augendBase, augendExponent - commonExponent)
					+ preciseToBigInt(
						addendBase,
						addendExponent - commonExponent,
					),
				commonExponent,
			);
		}),
);
