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
export const isArray = Array.isArray as <Item>(
	input: unknown,
) => input is ReadonlyArray<Item>;
