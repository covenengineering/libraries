import { prepend } from "@coven/iterables";
import type { Difference } from "./Difference.ts";
import { setPath } from "./setPath.ts";

/**
 * Prepends the given property to the given {@linkcode Difference}'s path.
 *
 * @example Prepend string to path
 * ```typescript
 * pathPrepend("coven")({
 * 	kind: "DELETE",
 * 	left: 13,
 * 	path: ["engineering"].values()
 * }); // Yields { kind: "DELETE", left: 13, path: ["coven", "engineering"] }
 * ```
 * @param prepend Property to prepend.
 * @returns Curried generator with `prepend` in context.
 */
export const pathPrepend = (
	property: PropertyKey,
): ((difference: Difference) => Difference) => {
	const prependProperty = prepend([property]);

	/**
	 * Curried {@linkcode pathPrepend} with `prepend` in context
	 *
	 * @param Difference to add the `prepend` to.
	 * @yields Difference's path with prepended `prepend`.
	 */
	return ({ path, ...difference }) =>
		setPath(prependProperty(path))(difference) as Difference;
};
