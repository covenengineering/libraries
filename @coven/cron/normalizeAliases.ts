import { build, or } from "@coven/expression";
import type { KeyOf, ReadonlyArray } from "@coven/types";
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
export const normalizeAliases = (expression: string): FieldString =>
	expression.replaceAll(
		buildGIU(
			or(
				...(Object.keys(normalizeMap) as ReadonlyArray<
					KeyOf<typeof normalizeMap>
				>),
			),
		),
		(alias) =>
			`${
				normalizeMap[
					alias.toLocaleLowerCase() as KeyOf<typeof normalizeMap>
				]
			}`,
	) as FieldString;
