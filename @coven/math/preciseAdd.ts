import { memo } from "@coven/memo";
import type { MaybeInfinity } from "./MaybeInfinity.ts";
import type { Precise } from "./PreciseTuple.ts";
import { bigIntMin } from "./bigIntMin.ts";
import { precise } from "./precise.ts";
import { preciseToNumber } from "./preciseToNumber.ts";

/**
 * Curried add operation using the internal {@linkcode Precise} type.
 *
 * @example
 * ```typescript
 * const addDot2 = preciseAdd(2n);
 *
 * addDot2(1n, -1n); // [3n, -1n]
 * ```
 * @see {@linkcode bigIntMin}
 * @see {@linkcode precise}
 * @see {@linkcode Precise}
 * @see {@linkcode preciseToNumber}
 * @param augendBase Augend base to use in the right side of the addition.
 * @param augendExponent Augend exponent to use in the right side of the addition.
 * @returns Curried function with `augendBase` and `augendExponent` in context.
 */
export const preciseAdd = memo(
	(
		augendBase: MaybeInfinity,
		augendExponent = 0n,
	): ((addendBase: MaybeInfinity, addendExponent?: bigint) => Precise) =>
		memo((addendBase, addendExponent = 0n) => {
			const commonExponent = bigIntMin(addendExponent, augendExponent);

			return precise(
				BigInt(
					preciseToNumber(
						addendBase,
						addendExponent - commonExponent,
					) +
						preciseToNumber(
							augendBase,
							augendExponent - commonExponent,
						),
				),
				commonExponent,
			);
		}),
);
