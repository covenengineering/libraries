import type { Primitive } from "./Primitive.ts";

/**
 * Supported structures for `structuredClone`
 *
 * @example
 * ```typescript
 * const clone = structuredClone({} satisfies StructuredData);
 * ```
 * @see {@linkcode Primitive}
 * @see [structuredClone](https://mdn.io/structuredClone)
 */
export type StructuredData =
	| {
			/**
			 * @see {@linkcode StructuredData} untyped property.
			 */
			readonly [property: string]: StructuredData;
	  }
	| Exclude<Primitive, symbol>
	| ReadonlyArray<StructuredData>;
