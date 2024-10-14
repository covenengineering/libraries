import type { CREATE_KIND } from "./CREATE_KIND.ts";
import type { WithDifferencePath } from "./WithDifferencePath.ts";

/**
 * Creation difference (property or value added).
 *
 * @example Object that satisfies a creation difference
 * ```typescript
 * const createDifference = ({
 * 	kind: "CREATE",
 * 	path: ["property", "path"].values(),
 * 	right: "created value",
 * }) as const satisfies CreateDifference<string>;
 * ```
 * @template Right Type of the new value.
 */
export type CreateDifference<Right = unknown> = {
	/**
	 * Creation kind.
	 */
	readonly kind: typeof CREATE_KIND;

	/**
	 * New value.
	 */
	readonly right: Right;
} & WithDifferencePath;
