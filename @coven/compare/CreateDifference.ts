import type { CREATE } from "./constants.ts";
import type { DifferencePath } from "./DifferencePath.ts";

/**
 * Object that represents a creation difference (a new value or property).
 *
 * @example
 * ```typescript
 * const createDifference = {
 * 	kind: "CREATE",
 * 	path: ["foo", "bar"],
 * 	right: "new value",
 * } as const satisfies CreateDifference<string>;
 * ```
 * @template Right Type of the new value.
 */
export type CreateDifference<Right = unknown> = {
	/**
	 * Creation kind.
	 */
	readonly kind: typeof CREATE;
	/**
	 * New value.
	 */
	readonly right: Right;
} & DifferencePath;
