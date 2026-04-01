/**
 * Check if given `input` is an instance of `Array`.
 *
 * @example
 * ```typescript
 * isArray([]); // true
 * isArray({ length: 42 }); // false
 * ```
 * @returns `true` if the given value is an array, `false` otherwise.
 */
export const isArray = Array.isArray as <
	Array extends ReadonlyArray<unknown> = ReadonlyArray<unknown>,
>(
	input: unknown,
) => input is Array;
