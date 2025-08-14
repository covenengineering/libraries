import type { JSONValue, Maybe } from "@coven/types";
import { attempt } from "./attempt.ts";
import { omitProtoReviver } from "./omitProtoReviver.ts";

/**
 * `JSON.parse` wrapped in {@linkcode attempt} and using
 * {@linkcode omitProtoReviver}.
 *
 * `JSON.parse` is unsafe by default, allowing `__proto__` poisoning. This
 * function takes care of it while making its types safer as well.
 *
 * @example
 * ```typescript
 * parseJSON('{"__proto__":"😈"}'); // {}
 * parseJSON("invalid"); // undefined
 * ```
 * @see {@linkcode attempt}
 * @see {@linkcode omitProtoReviver}
 * @template Output Generic of the output (has to be a `JSONValue`).
 * @param string String to be parsed.
 * @returns Parsed string or `undefined` if invalid JSON.
 */
export const parseJSON: {
	<Output extends JSONValue = JSONValue>(string: string): Maybe<Output>;
	<Output>(
		string: string,
		reviver?: (key: string, value: unknown) => unknown,
	): Maybe<Output>;
} = attempt<
	[string: string, reviver?: (key: string, value: unknown) => unknown],
	JSONValue
>((string, reviver) =>
	JSON.parse(
		string,
		(key, value) => omitProtoReviver(key, reviver?.(key, value) ?? value),
	)
) as <Output extends JSONValue = JSONValue>(string: string) => Maybe<Output>;
