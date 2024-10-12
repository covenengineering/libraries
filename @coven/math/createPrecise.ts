import { EMPTY_ARRAY, EMPTY_STRING } from "@coven/constants";
import { isBigInt } from "@coven/predicates";
import type { MaybeInfinity } from "./MaybeInfinity.ts";
import type { Precise } from "./Precise.ts";

/**
 * Takes a `base` and `exponent` and normalizes it returning a {@link Precise}.
 *
 * @example
 * ```typescript
 * createPrecise(13n); // [13n]
 * createPrecise(13n, -1n); // [13n, -1n]
 * createPrecise(1300n, 0n); // [13n, 2n]
 * ```
 * @see {@link Precise}
 * @param base Base of the {@link Precise}.
 * @param exponent Exponent of the {@link Precise}.
 * @returns A normalized {@link Precise} value.
 */
export const createPrecise: {
	(base: bigint, exponent?: bigint): Precise;
	(base: number): Precise;
} = (base: MaybeInfinity, exponent = 0n): Precise => {
	if (isBigInt(base)) {
		const stringBase = `${base}`;
		const normalizedBase = stringBase.replace(/0+$/u, EMPTY_STRING);
		const normalizedExponent =
			BigInt(stringBase.length - normalizedBase.length) +
			(exponent as bigint);

		return Object.freeze([
			BigInt(normalizedBase),
			...(normalizedExponent === 0n ? EMPTY_ARRAY : [normalizedExponent]),
		]) as Precise;
	} else {
		return Object.freeze([base]) as Precise;
	}
};
