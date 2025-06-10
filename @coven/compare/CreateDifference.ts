import type { CREATE_KIND } from "./CREATE_KIND.ts";

/**
 * Creation difference (property or value added).
 *
 * @example Object that satisfies a creation difference
 * ```typescript
 * ({
 * 	kind: "CREATE",
 * 	right: "created value",
 * 	path: ["property", "path"].values()
 * }) as const satisfies CreateDifference<string>;
 * ```
 * @template Right Type of the new value.
 */
export type CreateDifference<Right = unknown> = Readonly<{
	/**
	 * Creation kind.
	 */
	kind: typeof CREATE_KIND;

	/**
	 * Property path of created property.
	 */
	path: IterableIterator<PropertyKey>;

	/**
	 * New value.
	 */
	right: Right;
}>;
