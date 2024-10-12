import { prepend } from "@coven/iterables";
import { set } from "@coven/utils";
import type { Difference } from "./Difference.ts";
import { PATH } from "./constants.ts";

const setPath = set(PATH);

/**
 * Prepends the given property to the given {@link Difference}'s path.
 *
 * @example
 * ```typescript
 * pathPrepend("foo")({ path: ["bar"] }); // yields ["foo", "bar"]
 * ```
 * @param prepend Property to prepend.
 * @returns Curried generator with `prepend` in context.
 */
export const pathPrepend = <SourceDifference extends Difference>(
	property: PropertyKey,
): (difference: SourceDifference) => SourceDifference => {
	const prependProperty = prepend([property]);

	/**
	 * Curried {@link pathPrepend} with `prepend` in context
	 *
	 * @param Difference to add the `prepend` to.
	 * @yields Difference's path with prepended `prepend`.
	 */
	return ({ [PATH]: path, ...difference }) =>
		setPath(prependProperty(path ?? []))(difference) as SourceDifference;
};
