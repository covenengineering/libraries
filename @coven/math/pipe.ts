import { memo } from "@coven/memo";
import type { Precise } from "./PreciseTuple.ts";
import { numberToPrecise } from "./numberToPrecise.ts";
import { preciseToNumber } from "./preciseToNumber.ts";

/**
 * Turns a {@linkcode Precise} operation into a number operation.
 *
 * @example
 * ```typescript
 * import { preciseAdd } from "@coven/math";
 *
 * const add = pipe(preciseAdd);
 *
 * add(0.1)(0.2); // 0.3
 * ```
 * @see {@linkcode numberToPrecise}
 * @see {@linkcode Precise}
 * @see {@linkcode preciseToNumber}
 * @param preciseOperation {@linkcode Precise} operation function.
 * @returns Number to number operation generated from `preciseOperation`.
 */
export const pipe = <
	PreciseOperation extends (
		...right: Precise
	) => (...left: Precise) => Precise,
>(
	preciseOperation: PreciseOperation,
): ((right: number) => (left: number) => number) =>
	memo(right => {
		const rightOperation = preciseOperation(...numberToPrecise(right));

		return memo(left =>
			preciseToNumber(...rightOperation(...numberToPrecise(left))),
		);
	});
