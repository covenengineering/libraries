import type { Filter, ReadonlyRecord } from "@coven/types";

/**
 * Check if the given key is present in the given object (not inherited).
 *
 * @example
 * ```typescript
 * const isPropertyOfFoo = isPropertyOf({ "✨": "🎃" } as Record<string, string>);
 * isPropertyOfFoo("✨"); // true
 * isPropertyOfFoo("🎃"); // false
 * ```
 * @param object Object to check.
 * @returns Curried function with `context` set.
 */
export const isPropertyOf =
	<Key extends PropertyKey>(
		object: ReadonlyRecord<Key>,
	): Filter<[key: Key]> =>
	(key) =>
		Object.hasOwn(object, key);
