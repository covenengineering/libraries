import type { DELETE } from "./constants.ts";
import type { DifferencePath } from "./DifferencePath.ts";

/**
 * Object that represents a deletion difference (a value or property was removed).
 *
 * @example
 * ```typescript
 * const deleteDifference = {
 * 	kind: "DELETE",
 * 	left: "removed value",
 * 	path: ["foo", "bar"],
 * } as const satisfies DeleteDifference<string>;
 * ```
 * @template Left Type of the removed value.
 */
export type DeleteDifference<Left = unknown> = {
	/**
	 * Deletion kind.
	 */
	readonly kind: typeof DELETE;
	/**
	 * Original value.
	 */
	readonly left: Left;
} & DifferencePath;
