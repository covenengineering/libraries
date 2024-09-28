/**
 * Couple (tuple of two items) that represents an object entry. The first item
 * represents the `Key` and the second the `Value` of the property.
 *
 * @example
 * ```typescript
 * const entry = ["🧙‍♀️", 13] as const satisfies Entry<string, number>;
 * ```
 * @template Key Object's property key type.
 * @template Value Object's property value type.
 */
export type Entry<Key = PropertyKey, Value = unknown> = readonly [
	key: Key,
	value: Value,
];
