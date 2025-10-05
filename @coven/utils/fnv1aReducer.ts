import { memo } from "@coven/memo";

/**
 * 32-bit FNV prime.
 */
export const FNV_PRIME_32 = 0x01000193;

/**
 * Initial 32-bit FNV offset.
 */
export const FNV_OFFSET_32 = 0x811c9dc5;

/**
 * Combines a single byte into a running 32-bit hash using the FNV-1a algorithm.
 *
 * FNV-1a is a fast, non-cryptographic hash function designed to produce
 * low-collision outputs for arbitrary byte sequences. This reducer function
 * allows to fold bytes incrementally into a hash value.
 *
 * > [!IMPORTANT]
 * > This is not cryptographically safe, use `crypto` for that.
 *
 * @example
 * ```typescript
 * const bytes = new TextEncoder().encode("hello");
 * const hash = bytes.reduce(fnv1aReducer, FNV_OFFSET_32); // deterministic 32-bit integer
 * ```
 * @see {@linkcode https://en.wikipedia.org/wiki/Fowler–Noll–Vo_hash_function#FNV-1a_hash FNV-1a hash}
 * @see {@linkcode https://en.wikipedia.org/wiki/Rolling_hash Rolling hash}
 *
 * @param hash Current 32-bit hash value.
 * @param byte Byte (`0` to `255`) to incorporate into the hash.
 * @returns Updated 32-bit unsigned hash value.
 */
export const fnv1aReducer: (hash: number, byte: number) => number = memo(
	(hash, byte) => ((hash ^ byte) * FNV_PRIME_32) >>> 0,
);
