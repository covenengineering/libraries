import type { ReadonlyRecord } from "@coven/types";

/**
 * Get the value of a property in an object.
 *
 * @example
 * ```typescript
 * const getMagic = get("magic");
 *
 * getMagic({ magic: "✨" }); // "✨"
 * ```
 * @returns Curried function with `key` in context.
 */
export const get =
	<const Key extends PropertyKey>(
		key: Key,
	): (<const Source extends ReadonlyRecord<Key>>(
		object: Source,
	) => Source[Key & keyof Source]) =>
	object =>
		object[key];
