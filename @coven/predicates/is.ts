/**
 * Curried wrapper for `Object.is`. Given and `expected` value and an `actual`
 * value, returns `true` if those values are equal, or `false` if not.
 *
 * @example
 * ```typescript
 * const is2 = is(2);
 *
 * is2(2); // true
 * is2(8); // false
 * ```
 * @returns Curried function with `expected` in context.
 */
export const is =
	<const Expected>(
		expected: Expected,
	): ((actual: unknown) => actual is Expected) =>
	(actual): actual is Expected =>
		Object.is(expected, actual);
