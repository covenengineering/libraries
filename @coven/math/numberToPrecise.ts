import { memo } from "@coven/memo";
import { precise } from "./precise.ts";
import type { Precise } from "./PreciseTuple.ts";

/**
 * Turns a `number` into a {@linkcode Precise}.
 *
 * @example
 * ```typescript
 * numberToPrecise(13); // [13n]
 * numberToPrecise(1.3); // [13n, -1n]
 * numberToPrecise(1300); // [13n, 2n]
 * ```
 * @see {@linkcode precise}
 * @param number Number to convert.
 * @returns A {@linkcode Precise} representation of the given `number`.
 */
export const numberToPrecise: (number: number) => Precise = memo(
	(number: number) => {
		if (Number.isFinite(number) && !Number.isInteger(number)) {
			const [base = "0", exponent = "0"] = `${number}`.split("e");
			const [integral = "0", fractional = ""] = `${base}`.split(".");

			return precise(
				BigInt(`${integral}${fractional}`),
				-(BigInt(fractional.length) - BigInt(exponent)),
			);
		} else {
			return precise(
				(Number.isInteger(number) ? BigInt(number) : number) as number,
			);
		}
	},
);
