import { append, flat, map, unique } from "@coven/iterables";
import { compare } from "./compare.ts";
import type { CurriedComparison } from "./CurriedComparison.ts";
import { getKeys } from "./getKeys.ts";
import { MISSING_VALUE } from "./MISSING_VALUE.ts";
import { pathPrepend } from "./pathPrepend.ts";

/**
 * Deep-compare object properties.
 *
 * {@linkcode compareObjects} yields the differences found between `left` and
 * `right` with a descriptive object.
 *
 * @example Compare objects
 * ```typescript
 * const compareWitch = compareProperties({ witch: "🧙‍♀️" });
 * compareWitch({ witch: "🎃" }); // Yields { kind: "UPDATE", left: "🧙‍♀️", right: "🎃", path: ["witch"] }
 * ```
 * @see {@linkcode compare}
 * @see {@linkcode getKeys}
 * @param left Original object.
 * @returns Curried generator with `left` in context.
 */
export const compareProperties = (left: object): CurriedComparison<object> => {
	const ownKeysLeft = getKeys(left);

	/**
	 * Curried {@linkcode compareProperties} with `left` set in context.
	 *
	 * @param right New object.
	 * @yields Differences.
	 */
	return right =>
		flat(
			map((key: string | symbol) =>
				map(pathPrepend(key))(
					compare(
						key in left ?
							left[key as keyof typeof left]
						:	MISSING_VALUE,
					)(
						key in right ?
							right[key as keyof typeof right]
						:	MISSING_VALUE,
					),
				),
			)(unique(append(getKeys(right))(ownKeysLeft))),
		);
};
