import { memoFunction } from "@coven/memo";
import type { PreciseToTypeFunction } from "./PreciseToTypeFunction.ts";

/**
 * Given a precise value (base, exponent pair), return a BigInt. If the exponent
 * is lower than zero, then the exponent is asumed to be zero because BigInt
 * doesn't support float values.
 *
 * ```typescript
 * preciseToBigInt(13n, 5n); // 1300000n
 * preciseToBigInt(13n, 0n); // 13n
 * preciseToBigInt(13n, -5n); // 13n
 * ```
 * @param base Base of the precise value.
 * @param exponent Exponent of the precise value.
 * @returns BigInt equivalent value to the given precise. If Infinity is passed,
 * the returned value is Infinity too.
 */
export const preciseToBigInt: PreciseToTypeFunction<bigint> = memoFunction(
	(base, exponent) => (exponent >= 0n ? base * 10n ** exponent : exponent),
);
