import type { Unary } from "@coven/types";

/**
 * Check if value passed is a safe integer.
 *
 * @example
 * ```typescript
 * isSafeInteger(13); // true
 * isSafeInteger(10.13); // false
 * ```
 */
export const isSafeInteger = Number.isSafeInteger as Unary<
	[value: number],
	boolean
>;
