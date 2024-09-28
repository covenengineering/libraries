/**
 * JSON parsing has a proto poisoning vulnerability that can be exploited by
 * passing a JSON string with a `__proto__` key. This reviver can be used to
 * prevent that.
 *
 * @example
 * ```typescript
 * JSON.parse('{"__proto__":"😈"}', omitProto); // {}
 * ```
 * @param key Current key.
 * @param value Current value.
 * @returns The current value or `undefined` if the key is `"__proto__"`.
 */
export const omitProtoReviver = (key: string, value: unknown): unknown =>
	key === "__proto__" ? undefined : value;
