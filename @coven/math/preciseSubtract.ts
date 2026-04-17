import { memoFunction } from "@coven/memo";
import { preciseAdd } from "./preciseAdd.ts";
import type { PreciseFunction } from "./PreciseFunction.ts";

/**
 * Curried subtract operation using the internal `Precise` type.
 *
 * @example
 * ```typescript
 * const previous = preciseSubtract(1n, 0n);
 *
 * previous(14n, 0n); // [13n, 0n]
 * ```
 * @see {@linkcode PreciseFunction}
 * @see {@linkcode preciseAdd}
 * @param subtrahendBase Subtrahend base to use in the subtraction.
 * @param subtrahendExponent Subtrahend exponent to use in the subtraction.
 * @returns Curried function with `subtrahendBase` and `subtrahendExponent` in context.
 */
export const preciseSubtract: PreciseFunction = memoFunction(
	(subtrahendBase, subtrahendExponent) =>
		preciseAdd(-subtrahendBase, subtrahendExponent),
);
