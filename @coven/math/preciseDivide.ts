import { memoFunction } from "@coven/memo";
import type { Maybe } from "@coven/types";
import { always } from "@coven/utils";
import { precise } from "./precise.ts";
import type { PreciseFunction } from "./PreciseFunction.ts";
import type { Precise } from "./PreciseTuple.ts";

const alwaysUndefined = always(undefined);

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
export const preciseDivide: PreciseFunction<Maybe<Precise>> = memoFunction(
	(divisorBase, divisorExponent) =>
		divisorBase === 0n ? alwaysUndefined : (
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
