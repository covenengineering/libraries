/**
 * Validate given value is an `object` skipping `null`.
 *
 * @example
 * ```typescript
 * isObject([]); // true
 * isObject({}); // true
 * isObject("🧙🏻‍♀️"); // false
 * isObject(null); // false
 * ```
 * @param value Value to check.
 * @returns `true` when `value` is an object, `false` otherwise.
 */
export const isObject = (value: unknown): value is object =>
	typeof value === "object" && value !== null;
