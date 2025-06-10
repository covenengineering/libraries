import { build, disjunction } from "@coven/expression";
import { memo } from "@coven/memo";
import type { KeyOf } from "@coven/types";
import type { FieldString } from "./FieldString.ts";
import { normalizeMap } from "./normalizeMap.ts";

const buildGIU = build("giu");

/**
 * Normalizes day and month 3 letter aliases into their number counterparts.
 *
 * @example
 * ```typescript
 * normalizeAliases("* * 13 oct fri"); // "* * 13 10 5"
 * ```
 * @param expression String expression.
 * @returns Normalized expression
 */
export const normalizeAliases: (expression: string) => FieldString = memo(
	(expression: string) =>
		expression.replaceAll(
			buildGIU(
				disjunction(
					...(Object.keys(normalizeMap) as ReadonlyArray<
						KeyOf<typeof normalizeMap>
					>),
				),
			),
			alias =>
				`${
					normalizeMap[
						alias.toLocaleLowerCase() as KeyOf<typeof normalizeMap>
					]
				}`,
		) as FieldString,
);
