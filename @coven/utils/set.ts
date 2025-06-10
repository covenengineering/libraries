import { createObject } from "./createObject.ts";

/**
 * Set the value of a property in an object (doesn't mutate, use `mutate` to
 * apply the changes).
 *
 * @example
 * ```typescript
 * const setFoo = set("foo");
 *
 * setFoo("baz")({ foo: "bar" }); // { foo: "baz" }
 * setFoo("baz")({ bar: "foo" }); // { bar: "foo", foo: "baz" }
 * setFoo("baz")({}); // { foo: "baz" }
 * ```
 * @returns Curried function with `key` in context.
 */
export const set =
	<const Key extends PropertyKey>(
		key: Key,
	): (<const Value>(
		value: Value,
	) => <const Source extends object>(
		object: Source,
	) => Omit<Source, Key> & Record<Key, Value>) =>
	<const Value>(value: Value) =>
	<const Source extends object>(object: Source) =>
		createObject({ ...object, [key]: value }) as Omit<Source, Key> &
			Record<Key, Value>;
