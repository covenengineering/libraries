import {
	allow,
	buildUnicode,
	captureNamed,
	complementClass,
	disjunction,
	END,
	exists,
	getGroups,
	optional,
	START,
	WILDCARD,
} from "@coven/expression";
import type { Stringable } from "@coven/types";

/**
 * Get right side zeroes (to be added to the exponent).
 *
 * @example
 * ```typescript
 * getBaseAndZeroes(1000n); // { normalizedBase: "1", zeroes: "000" }
 * getBaseAndZeroes(1n); // { normalizedBase: "1", zeroes: undefined }
 * ```
 */
export const getBaseAndZeroes: (
	stringable: Stringable,
) => Partial<Readonly<Record<"normalizedBase" | "zeroes", string>>> = getGroups<
	["normalizedBase", "zeroes"]
>(
	buildUnicode(
		START,
		captureNamed("normalizedBase")(
			allow(WILDCARD),
			disjunction(complementClass(0), 0),
		),
		optional(captureNamed("zeroes")(exists(0))),
		END,
	),
);
