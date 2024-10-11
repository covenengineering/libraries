import type { Primitive } from "./Primitive.ts";

/**
 * Supported structures for `structuredClone`
 *
 * @example
 * ```typescript
 * const clone = structuredClone({} satisfies StructuredData);
 * ```
 * @see {@link Primitive}
 * @see [structuredClone](https://mdn.io/structuredClone)
 */
export type StructuredData =
	| {
		/**
		 * @see {@link StructuredData} untyped property.
		 */
		readonly [property: string]: StructuredData;
	}
	| Exclude<Primitive, symbol>
	| ReadonlyArray<StructuredData>;
