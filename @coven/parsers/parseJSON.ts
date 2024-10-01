import type { JSONValue, Maybe } from "@coven/types";
import { attempt } from "./attempt.ts";
import { omitProtoReviver } from "./omitProtoReviver.ts";

/**
 * `JSON.parse` is unsafe by default, allowing __proto__ poisoning. This
 * function takes care of it while making its types safer as well.
 *
 * @example
 * ```typescript
 * parseJSON('{"__proto__":"😈"}'); // {}
 * parseJSON("invalid"); // undefined
 * ```
 * @see {@link attempt}
 * @see {@link omitProtoReviver}
 * @template Output Generic of the output (has to be a `JSONValue`).
 * @param string String to be parsed.
 * @returns Parsed string or `undefined` if invalid JSON.
 */
export const parseJSON: <Output extends JSONValue = JSONValue>(
	string: string,
) => Maybe<Output> = attempt<[string: string], JSONValue>(string =>
	JSON.parse(string, omitProtoReviver),
) as <Output extends JSONValue = JSONValue>(string: string) => Maybe<Output>;
