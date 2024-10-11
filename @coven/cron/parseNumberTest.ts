import {
	build,
	DIGIT,
	END,
	group,
	join,
	or,
	range,
	set,
	START,
} from "@coven/expression";
import { test } from "@coven/predicates";
import { paddedRegExp } from "./paddedRegExp.ts";

/**
 * Matches only valid number values for a cron expression (from `0` or `00` to
 * `59`).
 *
 * @example
 * ```typescript
 * parseNumberTest("13"); // true
 * parseNumberTest("05"); // true
 * parseNumberTest("60"); // false
 * parseNumberTest("foo"); // false
 * ```
 *
 * @see {@link paddedRegExp}
 */
export const parseNumberTest: (text: string) => boolean = test(
	build("u")(
		START,
		group(or(paddedRegExp(DIGIT), join(set(range(1)(5)), DIGIT))),
		END,
	),
);
