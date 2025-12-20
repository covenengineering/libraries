import type { Primitive } from "./Primitive.ts";

/**
 * Following the JSON specification, the result of a `JSON.parse` call can be
 * one of a given set of types. This type is a union of all of those types.
 *
 * @example
 * ```typescript
 * const json = JSON.parse('{"✨": "🔮"}') satisfies JSONValue;
 * ```
 * @see {@linkcode Primitive}
 * @see {@linkcode https://www.json.org/json-en.html JSON}
 */
export type JSONValue =
	| Readonly<{
			/**
			 * @see {@linkcode JSONValue} untyped property.
			 */
			[property: string]: JSONValue;
	  }>
	| Exclude<Primitive, bigint | symbol | undefined>
	| ReadonlyArray<JSONValue>;
