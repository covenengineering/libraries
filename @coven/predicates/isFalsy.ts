import type { Falsy } from "@coven/types";

/**
 * Check if given `input` is falsy (0, NaN, "", false, or nullish).
 *
 * @example
 * ```typescript
 * isFalsy(false); // true
 * isFalsy(0); // true
 * isFalsy(NaN); // true
 * isFalsy(""); // true
 * isFalsy(null); // true
 * isFalsy(undefined); // true
 * isFalsy(42); // false
 * ```
 * @param input Value to check.
 * @returns Returns `true` if falsy, `false` otherwise.
 */
export const isFalsy = (
	input: unknown,
): input is Falsy => !input;
