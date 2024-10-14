import { compare } from "./compare.ts";
import type { CurriedComparison } from "./CurriedComparison.ts";
import type { Difference } from "./Difference.ts";
import { getKeys } from "./getKeys.ts";
import { MISSING_VALUE } from "./MISSING_VALUE.ts";
import { pathPrepend } from "./pathPrepend.ts";

/**
 * Deep-compare object properties.
 *
 * {@linkcode compareObjects} yields the differences found between `left` and
 * `right` with a descriptive object.
 *
 * @example
 * ```typescript
 * const compareFoo = compareProperties({ foo: "🧙‍♀️" });
 * compareFoo({ foo: "🎃" }); // yields [{ kind: "UPDATE", left: "🧙‍♀️", right: "🎃", path: ["foo"] }]
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
	return function* (right): Generator<Difference> {
		yield* new Set([...ownKeysLeft, ...getKeys(right)])
			.values()
			.flatMap((key) =>
				compare(
					key in left
						? left[key as keyof typeof left]
						: MISSING_VALUE,
				)(
					key in right
						? right[key as keyof typeof right]
						: MISSING_VALUE,
				).map(pathPrepend(key))
			);
	};
};
