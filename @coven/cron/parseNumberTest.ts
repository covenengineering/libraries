import {
	buildUnicode,
	characterClass,
	DIGIT,
	disjunction,
	END,
	group,
	join,
	range,
	START,
} from "@coven/expression";
import { test } from "@coven/predicates";
import { paddedRegExp } from "./paddedRegExp.ts";

/**
 * Matches only valid number values for a cron expression (from `0` or `00` to
 * `59`).
 *
 * @example Regular expression test to parse cron numbers
 * ```typescript
 * parseNumberTest("13"); // true
 * parseNumberTest("05"); // true
 * parseNumberTest("60"); // false
 * parseNumberTest("foo"); // false
 * ```
 *
 * @see {@linkcode paddedRegExp}
 */
export const parseNumberTest: (text: string) => boolean = test(
	buildUnicode(
		START,
		group(
			disjunction(
				paddedRegExp(DIGIT),
				join(characterClass(range(1)(5)), DIGIT),
			),
		),
		END,
	),
);
