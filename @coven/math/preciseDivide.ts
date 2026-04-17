import { memoFunction } from "@coven/memo";
import { always } from "@coven/utils";
import type { Precise } from "./precise.ts";
import { precise } from "./precise.ts";
import type { PreciseFunction } from "./PreciseFunction.ts";

const alwaysInfinity = always(Infinity);

/**
 * Curried divide operation using the internal {@linkcode Precise} type.
 *
 * @example
 * ```typescript
 * const half = preciseDivide(2n, 0n);
 *
 * half(1n, 0n); // [5n, -1n]
 * ```
 * @see {@linkcode Precise}
 * @see {@linkcode PreciseFunction}
 * @param divisorBase Divisor base to use in the division.
 * @param divisorExponent Divisor exponent to use in the division.
 * @returns Curried function with `divisorBase` and `divisorExponent` in context.
 */
export const preciseDivide: PreciseFunction<Precise | number> = memoFunction(
	(divisorBase, divisorExponent) =>
		divisorBase === 0n ? alwaysInfinity : (
			memoFunction((dividendBase, dividendExponent) => {
				let exponent = 0n;
				let base = dividendBase / divisorBase;

				for (
					let dividend = dividendBase;
					base * divisorBase !== dividend;
				) {
					exponent += 1n;
					dividend = dividendBase * 10n ** exponent;
					base = dividend / divisorBase;
				}

				return precise(
					base,
					dividendExponent - exponent - divisorExponent,
				);
			})
		),
);
