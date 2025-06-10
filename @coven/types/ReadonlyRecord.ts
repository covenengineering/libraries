/**
 * Read-only record. This is similar to doing `Readonly<Record<Key, Value>>`,
 * but with two differences:
 *
 * -   `Key` is set to `PropertyKey` by default.
 * -   `Value` is set to `unknown` by default.
 *
 * @example
 * ```typescript
 * const record = {
 * 	"✨": [13, 42],
 * 	"😈": [665, 666],
 * } as const satisfies ReadonlyRecord<string, ReadonlyArray<number>>;
 * ```
 * @template Key Type of the keys in the record.
 * @template Value Type of the values in the record.
 */
export type ReadonlyRecord<
	Key extends PropertyKey = PropertyKey,
	Value = unknown,
> = Readonly<Record<Key, Value>>;
