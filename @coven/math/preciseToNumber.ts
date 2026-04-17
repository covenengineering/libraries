import { memoFunction } from "@coven/memo";
import type { PreciseToTypeFunction } from "./PreciseToTypeFunction.ts";

/**
 * Turns a `Precise` into a `number`.
 *
 * @example
 * ```typescript
 * preciseToNumber(3n, -1n); // 0.3
 * ```
 * @param precise `Precise` to convert.
 * @returns Number represented by the passed `Precise` value.
 */
export const preciseToNumber: PreciseToTypeFunction<number> = memoFunction(
	(base, exponent) =>
		exponent === 0n ? Number(base)
		: exponent > 0n ? Number(base) * 10 ** Number(exponent)
		: Number(base) / 10 ** Number(-exponent),
);
