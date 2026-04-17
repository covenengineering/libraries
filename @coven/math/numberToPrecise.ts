import { memoFunction } from "@coven/memo";
import type { Maybe, Unary } from "@coven/types";
import { getNumberParts } from "./getNumberParts.ts";
import { precise } from "./precise.ts";
import type { Precise } from "./PreciseTuple.ts";

/**
 * Turns a `number` into a {@linkcode Precise}.
 *
 * @example
 * ```typescript
 * numberToPrecise(13); // [13n, 0n]
 * numberToPrecise(1.3); // [13n, -1n]
 * numberToPrecise(1300); // [13n, 2n]
 * numberToPrecise(Infinity); // undefined
 * numberToPrecise(-Infinity); // undefined
 * numberToPrecise(NaN); // undefined
 * ```
 * @see {@linkcode precise}
 * @param number Number to convert.
 * @returns A {@linkcode Precise} representation of the given `number`.
 */
export const numberToPrecise: Unary<
	[number: number],
	Maybe<Precise>
> = memoFunction((number: number) => {
	if (Number.isFinite(number) && !Number.isInteger(number)) {
		const {
			integral = "",
			fractional = "",
			exponent = "0",
		} = getNumberParts(number);

		return precise(
			BigInt(`${integral}${fractional}`),
			-(BigInt(fractional.length) - BigInt(exponent)),
		);
	} else {
		return Number.isFinite(number) && !Number.isNaN(number) ?
				precise(BigInt(number), 0n)
			:	undefined;
	}
});
