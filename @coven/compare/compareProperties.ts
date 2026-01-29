import { SIGIL } from "@coven/constants";
import {
	append,
	EMPTY_ITERABLE_ITERATOR,
	flat,
	map,
	unique,
} from "@coven/iterables";
import { is, isObject } from "@coven/predicates";
import { compare } from "./compare.ts";
import type { CurriedComparison } from "./CurriedComparison.ts";
import { differentiate } from "./differentiate.ts";
import { getKeys } from "./getKeys.ts";
import { pathPrepend } from "./pathPrepend.ts";

/**
 * Deep-compare object properties.
 *
 * {@linkcode compareObjects} yields the differences found between `left` and
 * `right` with a descriptive object.
 *
 * @example Compare objects
 * ```typescript
 * const compareMagic = compareProperties({ magic: "✨" });
 * compareMagic({ magic: "🎃" }); // Yields { kind: "UPDATE", left: "✨", right: "🎃", path: ["magic"] }
 * ```
 * @see {@linkcode compare}
 * @see {@linkcode getKeys}
 * @param left Original object.
 * @returns Curried generator with `left` in context.
 */
export const compareProperties = (left: object): CurriedComparison<unknown> => {
	const ownKeysLeft = getKeys(left);
	const isLeft = is(left);
	const differentiateLeft = differentiate(left);

	/**
	 * Curried {@linkcode compareProperties} with `left` set in context.
	 *
	 * @param right New object.
	 * @yields Differences.
	 */
	return (right) =>
		isLeft(right) ? EMPTY_ITERABLE_ITERATOR
		: isObject(right) ?
			flat(
				map((key: string | symbol) =>
					map(pathPrepend(key))(
						compare(
							key in left ?
								left[key as keyof typeof left]
							:	SIGIL,
						)(
							key in right ?
								right[key as keyof typeof right]
							:	SIGIL,
						),
					),
				)(unique(append(getKeys(right))(ownKeysLeft))),
			)
		:	differentiateLeft(right);
};
