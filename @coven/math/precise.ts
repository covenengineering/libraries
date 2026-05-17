import { memoFunction } from "@coven/memo";
import type { Branded, Multary } from "@coven/types";
import { EXPONENT_MASK } from "./EXPONENT_MASK.ts";
import { EXPONENT_MAX } from "./EXPONENT_MAX.ts";
import { EXPONENT_MIN } from "./EXPONENT_MIN.ts";
import { EXPONENT_SIZE } from "./EXPONENT_SIZE.ts";
import { powerOf10 } from "./powerOf10.ts";
import { PRECISE_NAN } from "./PRECISE_NAN.ts";
import { PRECISE_ZERO } from "./PRECISE_ZERO.ts";

/**
 * `Precise` is a `bigint` representation of a number stored as an N bits
 * _coefficient_ and an 8 bit _exponent_:
 *
 * ```
 * N                      8 7                   0
 * [ coefficient (N bits) ] [ exponent (8 bits) ]
 * ```
 * The _exponent_ is in the range `-255` thru `0`. Numbers may not use an
 * _exponent_ of `-255`. The value of a number is obtained from this formula:
 *
 * ```
 * value = coefficient * 10 ** exponent
 * ```
 */
export type Precise = Branded<"Precise", bigint>;

/**
 * Utility to create a {@linkcode Precise} from a `coefficient` and `exponent`.
 *
 * @param coefficient Coefficient part of the number.
 * @param exponent Exponent part of the number.
 * @returns `Precise` value.
 */
export const precise: Multary<
	[coefficient: bigint, exponent: bigint],
	Precise
> = memoFunction(
	(coefficient, exponent) =>
		(exponent < EXPONENT_MIN ? PRECISE_NAN
		: coefficient === 0n ? PRECISE_ZERO
		: exponent > EXPONENT_MAX ?
			(coefficient * powerOf10(exponent)) << EXPONENT_SIZE
		:	(coefficient << EXPONENT_SIZE)
			| (exponent & EXPONENT_MASK)) as Precise,
);
