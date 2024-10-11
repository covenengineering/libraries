import type { MaybeInfinity } from "./MaybeInfinity.ts";
import type { Precise } from "./Precise.ts";
import { preciseAdd } from "./preciseAdd.ts";

/**
 * Curried subtract operation using the internal {@link Precise} type.
 *
 * @example
 * ```typescript
 * const previous = preciseSubtract(1n);
 *
 * previous(14n); // [13n]
 * ```
 * @see {@link Precise}
 * @see {@link preciseAdd}
 * @param subtrahendBase Subtrahend base to use in the subtraction.
 * @param subtrahendExponent Subtrahend exponent to use in the subtraction.
 * @returns Curried function with `subtrahendBase` and `subtrahendExponent` in context.
 */
export const preciseSubtract = (
	subtrahendBase: MaybeInfinity,
	subtrahendExponent = 0n,
): (minuendBase: MaybeInfinity, minuendExponent?: bigint) => Precise =>
	preciseAdd(-subtrahendBase, subtrahendExponent);
