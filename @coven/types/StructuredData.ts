import type { Primitive } from "./Primitive.ts";

/**
 * Supported structures for `structuredClone`
 *
 * @example
 * ```typescript
 * const clone = structuredClone({} satisfies StructuredData);
 * ```
 * @see {@linkcode Primitive}
 * @see [structuredClone](https://coven.to/mdn/Window/structuredClone)
 */
export type StructuredData =
	| Readonly<{
		/**
		 * @see {@linkcode StructuredData} untyped property.
		 */
		[property: string]: StructuredData;
	}>
	| Exclude<Primitive, symbol>
	| ReadonlyArray<StructuredData>;
