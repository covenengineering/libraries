import type { Stringable } from "@coven/types";
import { fnv1aReducer } from "./fnv1aReducer.ts";
import { FNV_OFFSET_32 } from "./FNV_OFFSET_32.ts";
import { LCG_INCREMENT } from "./LCG_INCREMENT.ts";
import { LCG_MULTIPLIER } from "./LCG_MULTIPLIER.ts";
import { stringToUint8Array } from "./stringToUint8Array.ts";
import { UINT32 } from "./UINT32.ts";

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
export const seededRandom = (seed: Stringable): number =>
	((stringToUint8Array(`${seed}`).reduce(fnv1aReducer, FNV_OFFSET_32)
		* LCG_MULTIPLIER
		+ LCG_INCREMENT)
		>>> 0)
	/ UINT32;
