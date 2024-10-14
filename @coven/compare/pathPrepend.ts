import { EMPTY_ARRAY } from "@coven/constants";
import { prepend } from "@coven/iterables";
import { set } from "@coven/utils";
import type { WithDifferencePath } from "./WithDifferencePath.ts";

const setPath = set("path");

/**
 * Prepends the given property to the given {@linkcode WithDifferencePath}'s path.
 *
 * @example
 * ```typescript
 * pathPrepend("foo")({ path: ["bar"].values() }); // yields ["foo", "bar"]
 * ```
 * @param prepend Property to prepend.
 * @returns Curried generator with `prepend` in context.
 */
export const pathPrepend = <SourceDifference extends WithDifferencePath>(
	property: PropertyKey,
): (difference: SourceDifference) => SourceDifference => {
	const prependProperty = prepend([property]);

	/**
	 * Curried {@linkcode pathPrepend} with `prepend` in context
	 *
	 * @param Difference to add the `prepend` to.
	 * @yields Difference's path with prepended `prepend`.
	 */
	return ({ path, ...difference }) =>
		setPath(prependProperty(path ?? EMPTY_ARRAY))(
			difference,
		) as SourceDifference;
};
