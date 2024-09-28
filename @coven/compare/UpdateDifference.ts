import type { KIND, LEFT, RIGHT, UPDATE } from "./constants.ts";
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
	readonly [KIND]: typeof UPDATE;
	/**
	 * Original value.
	 */
	readonly [LEFT]: Left;
	/**
	 * New value.
	 */
	readonly [RIGHT]: Right;
} & DifferencePath;
