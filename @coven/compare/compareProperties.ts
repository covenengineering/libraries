import { compare } from "./compare.ts";
import { MISSING } from "./constants.ts";
import type { CurriedComparison } from "./CurriedComparison.ts";
import { getKeys } from "./getKeys.ts";
import { pathPrepend } from "./pathPrepend.ts";

/**
 * Function to compare a `left` and a `right` properties which are both objects.
 *
 * @example
 * ```typescript
 * const compareFoo = compareProperties({ foo: "🧙‍♀️" });
 * compareFoo({ foo: "🎃" }); // yields [{ kind: "UPDATE", left: "🧙‍♀️", right: "🎃", path: ["foo"] }]
 * ```
 * @see {@link compare}
 * @see {@link getKeys}
 * @param left Left/Original object.
 * @returns Curried generator with `left` in context.
 */
export const compareProperties = (left: object): CurriedComparison<object> => {
	const ownKeysLeft = getKeys(left);

	/**
	 * Curried {@link compareProperties} with `left` set in context.
	 * @param right Right/New object.
	 * @yields Differences.
	 */
	return right =>
		new Set([...ownKeysLeft, ...getKeys(right)])
			.values()
			.flatMap(key =>
				compare(key in left ? left[key as keyof typeof left] : MISSING)(
					key in right ? right[key as keyof typeof right] : MISSING,
				).map(pathPrepend(key)),
			);
};
