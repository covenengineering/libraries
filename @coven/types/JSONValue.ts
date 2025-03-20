import type { Primitive } from "./Primitive.ts";

/**
 * Following the JSON specification, the result of a `JSON.parse` call can be
 * one of a given set of types. This type is a union of all of those types.
 *
 * @example
 * ```typescript
 * const json = JSON.parse('{"🧙‍♀️": "🔮"}') satisfies JSONValue;
 * ```
 * @see {@linkcode Primitive}
 * @see [JSON](https://www.json.org/json-en.html)
 */
export type JSONValue =
	| {
			/**
			 * @see {@linkcode JSONValue} untyped property.
			 */
			readonly [property: string]: JSONValue;
	  }
	| Exclude<Primitive, bigint | symbol | undefined>
	| ReadonlyArray<JSONValue>;
