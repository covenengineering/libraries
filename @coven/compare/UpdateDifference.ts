import type { UPDATE_KIND } from "./UPDATE_KIND.ts";
import type { WithPropertyPath } from "./WithPropertyPath.ts";

/**
 * Update difference (property or value changed).
 *
 * @example Object that satisfies an update difference
 * ```typescript
 * const updateDifference = {
 * 	kind: "UPDATE",
 * 	left: "old value",
 * 	path: ["property", "path"].values(),
 * 	right: "new value",
 * } as const satisfies UpdateDifference<string, string>;
 * ```
 * @template Left Type of the original value.
 * @template Right Type of the new value.
 */
export type UpdateDifference<Left = unknown, Right = unknown> = {
	/**
	 * Update kind.
	 */
	readonly kind: typeof UPDATE_KIND;
	/**
	 * Original value.
	 */
	readonly left: Left;
	/**
	 * New value.
	 */
	readonly right: Right;
} & WithPropertyPath;
