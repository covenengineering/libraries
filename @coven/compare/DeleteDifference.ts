import type { DELETE_KIND } from "./DELETE_KIND.ts";

/**
 * Deletion difference (property or value removed).
 *
 * @example Object that satisfies a deletion difference
 * ```typescript
 * const deleteDifference = {
 * 	kind: "DELETE",
 * 	left: "removed value",
 * 	path: ["property", "path"].values(),
 * } as const satisfies DeleteDifference<string>;
 * ```
 * @template Left Type of the removed/original value.
 */
export type DeleteDifference<Left = unknown> = Readonly<{
	/**
	 * Deletion kind.
	 */
	kind: typeof DELETE_KIND;

	/**
	 * Removed/original value.
	 */
	left: Left;

	/**
	 * Property path of deleted property.
	 */
	path: IterableIterator<PropertyKey>;
}>;
