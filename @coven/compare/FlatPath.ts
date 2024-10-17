import type { ReadonlyArray } from "@coven/types";

/**
 * Flattened `path` property.
 *
 * @example Array of PropertyKey
 * ```
 * import type { Difference } from "@coven/compare";
 *
 * const flatPath = {
 * 	path: ["property", "path"],
 * } satisfies FlatPath;
 * ```
 * @see {@linkcode CreateDifference}
 * @see {@linkcode DeleteDifference}
 * @see {@linkcode FlatPath}
 * @see {@linkcode UpdateDifference}
 */
export type FlatPath = {
	/**
	 * Path iterable as an array.
	 */
	readonly path: ReadonlyArray<PropertyKey>;
};
