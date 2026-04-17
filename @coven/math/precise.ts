import { memo, memoFunction } from "@coven/memo";
import { getBaseAndZeroes } from "./getBaseAndZeroes.ts";

/**
 * Type to precisely represent a number as a tuple `[base, exponent]`.
 */
export type Precise = Readonly<[base: bigint, exponent: bigint]>;

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
