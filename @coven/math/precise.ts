import { memo, memoFunction } from "@coven/memo";
import type { Precise } from "./PreciseTuple.ts";
import { getBaseAndZeroes } from "./getBaseAndZeroes.ts";

/**
 * Takes a `base` and `exponent` and normalizes it returning a {@linkcode Precise}.
 *
 * @example
 * ```typescript
 * precise(13n, 0n); // [13n]
 * precise(13n, -1n); // [13n, -1n]
 * precise(1300n, 0n); // [13n, 2n]
 * ```
 * @see {@linkcode Precise}
 * @param base Base of the {@linkcode Precise}.
 * @param exponent Exponent of the {@linkcode Precise}.
 * @returns A normalized {@linkcode Precise} value.
 */
export const precise: {
	(base: bigint, exponent: bigint): Precise;
} = memoFunction<(base: bigint, exponent: bigint) => Precise>(
	(base, exponent) => {
		const { normalizedBase = "0", zeroes = "" } = getBaseAndZeroes(base);
		const normalizedExponent = BigInt(zeroes.length) + exponent;

		return memo([BigInt(normalizedBase), normalizedExponent]);
	},
);
