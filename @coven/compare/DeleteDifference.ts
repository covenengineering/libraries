import type { DELETE_KIND } from "./DELETE_KIND.ts";
import type { WithPropertyPath } from "./WithPropertyPath.ts";

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
export type DeleteDifference<Left = unknown> = {
	/**
	 * Deletion kind.
	 */
	readonly kind: typeof DELETE_KIND;

	/**
	 * Removed/original value.
	 */
	readonly left: Left;
} & WithPropertyPath;
