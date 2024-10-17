import type { CREATE_KIND } from "./CREATE_KIND.ts";
import type { WithPropertyPath } from "./WithPropertyPath.ts";

/**
 * Creation difference (property or value added).
 *
 * @example Object that satisfies a creation difference
 * ```typescript
 * const createDifference = ({
 * 	kind: "CREATE",
 * 	right: "created value",
 * 	path: ["property", "path"].values()
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
} & WithPropertyPath;
