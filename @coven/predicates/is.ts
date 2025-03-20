/**
 * Curried wrapper for `Object.is`.
 *
 * @example
 * ```typescript
 * const is2 = is(2);
 *
 * is2(2); // true
 * is2(8); // false
 * ```
 * @see [Object.is](https://mdn.io/Object.is)
 * @returns Curried function with `expected` in context.
 */
export const is =
	<const Expected>(
		expected: Expected,
	): ((actual: unknown) => actual is Expected) =>
	(actual): actual is Expected =>
		Object.is(expected, actual);
