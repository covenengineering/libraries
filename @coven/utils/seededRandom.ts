import type { Stringable, Unary } from "@coven/types";
import { fnv1aReducer, FNV_OFFSET_32 } from "./fnv1aReducer.ts";
import { memo } from "@coven/memo";

/**
 * Unsigned 32-bit integer.
 */
export const UINT32 = 2 ** 32;

/**
 * LCG multiplier value.
 */
export const LCG_MULTIPLIER = 1_664_525;

/**
 * LCG increment value.
 */
export const LCG_INCREMENT = 1_013_904_223;

/**
 * Text encoder do be used by {@linkcode seededRandom}.
 */
const textEncoder = new TextEncoder();

/**
 * Generates a deterministic pseudo-random number from `0` to `1` from a `seed`.
 *
 * It achieves this by hashing the seed using an
 * {@linkcode https://en.wikipedia.org/wiki/Fowler–Noll–Vo_hash_function#FNV-1a_hash FNV-1a}
 * reducer, and then running a
 * {@linkcode https://en.wikipedia.org/wiki/Linear_congruential_generator LCG}
 * function on top of that hash.
 *
 * > [!IMPORTANT]
 * > This is not cryptographically safe, use `crypto.getRandomValues` for that.
 *
 * @example
 * ```typescript
 * const seededRandom1 = seededRandom("some seed");
 * const seededRandom2 = seededRandom("some seed");
 *
 * seededRandom1 === seededRandom2; // true because it has the same seed
 * ```
 * @see {@linkcode https://coven.to/mdn/Crypto/getRandomValues getRandomValues}
 * @see {@linkcode https://en.wikipedia.org/wiki/Fowler–Noll–Vo_hash_function#FNV-1a_hash FNV-1a hash}
 * @see {@linkcode https://en.wikipedia.org/wiki/Linear_congruential_generator Linear congruential generator}
 * @see {@linkcode fnv1aReducer}
 * @param seed String seed used to generate the pseudo-random number.
 * @returns A floating-point number between 0 (inclusive) and 1 (exclusive).
 */
export const seededRandom: Unary<[seed: Stringable], number> = memo(
	(seed) =>
		((textEncoder.encode(`${seed}`).reduce(fnv1aReducer, FNV_OFFSET_32)
			* LCG_MULTIPLIER
			+ LCG_INCREMENT)
			>>> 0)
		/ UINT32,
);
