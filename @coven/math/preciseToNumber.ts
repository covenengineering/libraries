import { memo } from "@coven/memo";

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
export const preciseToNumber = memo(
	(base: bigint | typeof Infinity, exponent = 0n): number =>
		parseFloat(`${base}e${exponent}`),
);
