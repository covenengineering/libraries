import type { ReadonlyIterator } from "@coven/types";
import type { Difference } from "./Difference.ts";
import { PATH } from "./constants.ts";

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
export const pathPrepend =
	<SourceDifference extends Difference>(
		prepend: PropertyKey,
	): ((difference: SourceDifference) => SourceDifference) =>
	/**
	 * Curried {@link pathPrepend} with `prepend` in context
	 *
	 * @param Difference to add the `prepend` to.
	 * @yields Difference's path with prepended `prepend`.
	 */
	({ [PATH]: path, ...difference }) =>
		({
			...difference,
			[PATH]: (function* (): ReadonlyIterator<PropertyKey> {
				yield prepend;
				if (path !== undefined) yield* path;
			})(),
		}) as SourceDifference;
