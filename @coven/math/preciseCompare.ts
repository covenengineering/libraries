import { memoFunction } from "@coven/memo";
import { is } from "@coven/predicates";
import type { Unary } from "@coven/types";
import { getPreciseCoefficient } from "./getPreciseCoefficient.ts";
import { isPreciseNaN } from "./isPreciseNaN.ts";
import type { Precise } from "./precise.ts";
import { PRECISE_NAN } from "./PRECISE_NAN.ts";
import { PRECISE_NEGATIVE_ONE } from "./PRECISE_NEGATIVE_ONE.ts";
import { PRECISE_ONE } from "./PRECISE_ONE.ts";
import { PRECISE_ZERO } from "./PRECISE_ZERO.ts";
import { preciseSubtract } from "./preciseSubtract.ts";

/**
 * Compare two {@linkcode Precise} values, returning {@linkcode PRECISE_ZERO}
 * when the values are equal, {@linkcode PRECISE_NEGATIVE_ONE} when the left
 * value is smaller than the right value, {@linkcode PRECISE_ONE} when the right
 * value is smaller than the left value, and {@linkcode PRECISE_NAN} if only one
 * of the values is {@license PRECISE_NAN} (if both are, that equals to
 * {@linkcode PRECISE_ZERO}).
 *
 * @example
 * ```typescript
 * import { precise, PRECISE_NAN } from "@coven/math";
 *
 * const compareWith2 = preciseCompare(precise(2n, 0n));
 * const compareWithNan = preciseCompare(PRECISE_NAN);
 *
 * compareWith2(precise(1n, 0n)); // PRECISE_NEGATIVE_ONE
 * compareWith2(precise(2n, 0n)); // PRECISE_ZERO
 * compareWith2(precise(3n, 0n)); // PRECISE_ONE
 * compareWith2(PRECISE_NAN); // PRECISE_NAN
 * compareWithNan(precise(1n, 0n)); // PRECISE_NAN
 * compareWithNan(precise(2n, 0n)); // PRECISE_NAN
 * compareWithNan(precise(3n, 0n)); // PRECISE_NAN
 * compareWithNan(PRECISE_NAN); // PRECISE_ZERO
 * ```
 */
export const preciseCompare: Unary<
	[right: Precise],
	Unary<[left: Precise], Precise>
> = memoFunction((right) => {
	if (isPreciseNaN(right)) {
		return memoFunction((left) =>
			isPreciseNaN(left) ? PRECISE_ZERO : PRECISE_NAN,
		);
	} else {
		const subtractRight = preciseSubtract(right);
		const isRight = is(right);

		return memoFunction((left) =>
			isPreciseNaN(left) ? PRECISE_NAN
			: isRight(left) ? PRECISE_ZERO
			: getPreciseCoefficient(subtractRight(left)) > 0n ? PRECISE_ONE
			: PRECISE_NEGATIVE_ONE,
		);
	}
});
