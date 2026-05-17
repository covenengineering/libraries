import {
	buildUnicode,
	capture,
	DIGIT,
	exists,
	quantity,
} from "@coven/expression";
import { join, repeat } from "@coven/iterables";
import { memoFunction } from "@coven/memo";
import type { Unary } from "@coven/types";
import type { PreciseString } from "./PreciseString.ts";
import { getBigIntParts } from "./getBigIntParts.ts";
import { getPreciseCoefficient } from "./getPreciseCoefficient.ts";
import { getPreciseExponent } from "./getPreciseExponent.ts";
import { isPreciseNaN } from "./isPreciseNaN.ts";
import type { Precise } from "./precise.ts";

/**
 * Convert a {@linkcode Precise} to a human-readable string.
 *
 * @example
 * ```typescript
 * import { precise } from "@coven/math";
 *
 * preciseToString(precise(13n, 0n)); // "13"
 * preciseToString(precise(42n, 0n)); // "42"
 * preciseToString(precise(-134269n, -2n)); // "-1342.69"
 * ```
 * @see {@linkcode PreciseString}
 * @param precise Value to convert to string.
 * @returns String representation of given `Precise`.
 */
export const preciseToString: Unary<[precise: Precise], PreciseString> =
	memoFunction((precise) => {
		if (isPreciseNaN(precise)) {
			return "NaN" as const;
		} else {
			const coefficient = getPreciseCoefficient(precise);

			if (coefficient === 0n) {
				return "0" as const;
			} else {
				const exponent = getPreciseExponent(precise);
				const { sign, digits = "" } = getBigIntParts(coefficient);

				return `${sign}${
					exponent < 0n ?
						`${join("")(repeat(-(exponent - 1n + BigInt(digits.length)))("0"))}${digits}`.replace(
							buildUnicode(
								capture(exists(DIGIT)),
								capture(quantity(-exponent)(DIGIT)),
							),
							"$1.$2",
						)
					:	digits
				}` as PreciseString;
			}
		}
	});
