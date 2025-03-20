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
export const preciseAdd: (
	augendBase: MaybeInfinity,
	augendExponent?: bigint,
) => (addendBase: MaybeInfinity, addendExponent?: bigint) => Precise = memo(
	(augendBase, augendExponent) =>
		memo((addendBase, addendExponent) => {
			const commonExponent = bigIntMin(
				addendExponent ?? 0n,
				augendExponent ?? 0n,
			);

			return precise(
				BigInt(
					preciseToNumber(
						addendBase,
						(addendExponent ?? 0n) - commonExponent,
					) +
						preciseToNumber(
							augendBase,
							(augendExponent ?? 0n) - commonExponent,
						),
				),
				commonExponent,
			);
		}),
);
