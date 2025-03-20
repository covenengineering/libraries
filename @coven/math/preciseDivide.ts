import { memo } from "@coven/memo";
import { always } from "@coven/utils";
import type { MaybeInfinity } from "./MaybeInfinity.ts";
import type { Precise } from "./PreciseTuple.ts";
import { numberToPrecise } from "./numberToPrecise.ts";
import { precise } from "./precise.ts";
import { preciseMultiply } from "./preciseMultiply.ts";
import { preciseToNumber } from "./preciseToNumber.ts";

/**
 * Curried divide operation using the internal {@linkcode Precise} type.
 *
 * @example
 * ```typescript
 * const half = preciseDivide(2n);
 *
 * half(1n); // [5n, -1n]
 * ```
 * @see {@linkcode numberToPrecise}
 * @see {@linkcode Precise}
 * @see {@linkcode preciseMultiply}
 * @see {@linkcode preciseToNumber}
 * @param divisorBase Divisor base to use in the division.
 * @param divisorExponent Divisor exponent to use in the division.
 * @returns Curried function with `divisorBase` and `divisorExponent` in context.
 */
export const preciseDivide = memo(
	(
		divisorBase: MaybeInfinity,
		divisorExponent = 0n,
	): ((dividendBase: MaybeInfinity, dividendExponent?: bigint) => Precise) =>
		divisorBase === 0n ?
			always(precise(Infinity))
		:	preciseMultiply(
				...numberToPrecise(
					preciseToNumber(1n, -divisorExponent) /
						preciseToNumber(divisorBase, 0n),
				),
			),
);
