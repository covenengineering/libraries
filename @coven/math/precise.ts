import { EMPTY_ARRAY } from "@coven/constants";
import {
	allow,
	buildUnicode,
	captureNamed,
	complementClass,
	END,
	START,
	WILDCARD,
} from "@coven/expression";
import { memo } from "@coven/memo";
import { isBigInt } from "@coven/predicates";
import type { MaybeInfinity } from "./MaybeInfinity.ts";
import type { Precise } from "./PreciseTuple.ts";

const rightSideZeroes = buildUnicode(
	START,
	captureNamed("normalizedBase")(allow(WILDCARD), complementClass(0)),
	captureNamed("zeroes")(allow(0)),
	END,
);

/**
 * Takes a `base` and `exponent` and normalizes it returning a {@linkcode Precise}.
 *
 * @example
 * ```typescript
 * precise(13n); // [13n]
 * precise(13n, -1n); // [13n, -1n]
 * precise(1300n, 0n); // [13n, 2n]
 * ```
 * @see {@linkcode Precise}
 * @param base Base of the {@linkcode Precise}.
 * @param exponent Exponent of the {@linkcode Precise}.
 * @returns A normalized {@linkcode Precise} value.
 */
export const precise: {
	(base: bigint, exponent?: bigint): Precise;
	(base: number): Precise;
} = memo((base: MaybeInfinity, exponent = 0n): Precise => {
	if (isBigInt(base)) {
		const { normalizedBase, zeroes } = rightSideZeroes.exec(`${base}`)
			?.groups as Readonly<{
			normalizedBase: `${bigint}`;
			zeroes: `${bigint}`;
		}>;
		const normalizedExponent = BigInt(zeroes.length) + (exponent as bigint);

		return memo([
			BigInt(normalizedBase),
			...(normalizedExponent === 0n ? EMPTY_ARRAY : [normalizedExponent]),
		]) as Precise;
	} else {
		return memo([base]) as Precise;
	}
});
