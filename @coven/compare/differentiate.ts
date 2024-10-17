import { EMPTY_ARRAY } from "@coven/constants";
import {
	iteratorFunctionToIterableIterator,
	toIterable,
} from "@coven/iterables";
import { CREATE_KIND } from "./CREATE_KIND.ts";
import type { CurriedComparison } from "./CurriedComparison.ts";
import { DELETE_KIND } from "./DELETE_KIND.ts";
import type { Difference } from "./Difference.ts";
import { MISSING_VALUE } from "./MISSING_VALUE.ts";
import { UPDATE_KIND } from "./UPDATE_KIND.ts";

/**
 * Base difference (path with an iterable that doesn't have items).
 */
const differenceBase = { path: toIterable(EMPTY_ARRAY) };

/**
 * Yields a {@linkcode Difference} object out of a `left` and a `right` value.
 *
 * The possible yielded values are:
 *
 * -   If only `left` is present: `DeleteDifference`.
 * -   If only `right` is present: `CreateDifference`.
 * -   If both `left` and `right` are present: `UpdateDifference`.
 *
 * @example Missing right value
 * ```typescript
 * import { MISSING_VALUE, flat } from "@coven/compare";
 * import { assertEquals } from "@std/assert";
 *
 * assertEquals(
 * 	flat(differentiate("🧙‍♀️")(MISSING_VALUE)),
 * 	[{ kind: "DELETE", left: "🧙‍♀️", path: [] }]
 * );
 * ```
 * @example Missing left value
 * ```typescript
 * import { MISSING_VALUE, flat } from "@coven/compare";
 * import { assertEquals } from "@std/assert";
 *
 * assertEquals(
 * 	flat(differentiate(MISSING_VALUE)("🎃")),
 * 	[{ kind: "CREATE", right: "🎃", path: [] }]
 * );
 * ```
 * @example Both values set
 * ```typescript
 * import { flat } from "@coven/compare";
 * import { assertEquals } from "@std/assert";
 *
 * assertEquals(
 * 	flat(differentiate("🧙‍♀️")("🎃")),
 * 	[{ kind: "UPDATE", left: "🧙‍♀️", right: "🎃", path: [] }]
 * );
 * differentiate("🧙‍♀️")("🧙‍♀️"); // yields []
 * ```
 * @example Both values missing
 * ```typescript
 * import { MISSING_VALUE, flat } from "@coven/compare";
 * import { assertEquals } from "@std/assert";
 *
 * assertEquals(
 * 	flat(differentiate(MISSING_VALUE)(MISSING_VALUE)),
 * 	[]
 * );
 * ```
 * @see {@linkcode Difference}
 * @param left Left/Original value.
 * @returns Curried generator with `left` in context.
 */
export const differentiate = (
	left: unknown,
): CurriedComparison<unknown> =>
(right) =>
	iteratorFunctionToIterableIterator(
		left === MISSING_VALUE
			/**
			 * Curried {@linkcode valueToDifference} with `left` in context.
			 *
			 * @param right Right/New value.
			 * @returns Difference object.
			 */
			? function* (): Generator<Difference> {
				right === MISSING_VALUE ? undefined : yield ({
					...differenceBase,
					kind: CREATE_KIND,
					right: right,
				});
			}
			/**
			 * Curried {@linkcode valueToDifference} with `left` in context.
			 *
			 * @param right Right/New value.
			 * @returns Difference object.
			 */
			: function* (): Generator<Difference> {
				yield ({
					...differenceBase,
					left,
					...(right === MISSING_VALUE
						? { kind: DELETE_KIND }
						: { kind: UPDATE_KIND, right: right }),
				});
			},
	);
