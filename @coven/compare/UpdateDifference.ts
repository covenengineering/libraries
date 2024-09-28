import type { UPDATE } from "./constants.ts";
import type { DifferencePath } from "./DifferencePath.ts";

/**
 * Object that represents an update difference (a value or property changed).
 *
 * @example
 * ```typescript
 * const updateDifference = {
 * 	kind: "UPDATE",
 * 	left: "old value",
 * 	path: ["foo", "bar"],
 * 	right: "new value",
 * } as const satisfies UpdateDifference<string, string>;
 * ```
 * @template Left Type of the new value.
 * @template Right Type of the original value.
 */
export type UpdateDifference<Left = unknown, Right = unknown> = {
	/**
	 * Update kind.
	 */
	readonly kind: typeof UPDATE;
	/**
	 * Original value.
	 */
	readonly left: Left;
	/**
	 * New value.
	 */
	readonly right: Right;
} & DifferencePath;
