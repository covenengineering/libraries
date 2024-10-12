import { EMPTY_OBJECT } from "@coven/constants";
import { build } from "@coven/expression";
import { entriesToObject, length, objectToEntries } from "@coven/iterables";
import type { KeyOf, Maybe, ReadonlyRecord } from "@coven/types";
import type { CronObject } from "./CronObject.ts";
import type { CronString } from "./CronString.ts";
import { cronRegExp } from "./cronRegExp.ts";
import { normalizeAliases } from "./normalizeAliases.ts";
import { parseFieldTuplesMap } from "./parseFieldTuplesMap.ts";

/**
 * Parses a cron expression into an object representation.
 *
 * @example
 * ```typescript
 * parse("* * * * *"); // { minute: "*", hour: "*", dayOfMonth: "*", month: "*", dayOfWeek: "*" }
 * parse("* * 13 10 *"); // { minute: "*", hour: "*", dayOfMonth: 13, month: 10, dayOfWeek: "*" }
 * parse("5 * 10,11,13 1-10 *"); // { minute: 5, hour: "*", dayOfMonth: [10, 11, 13], month: { from: 1, to: 10 }, dayOfWeek: "*" }
 * parse("* * 31 2 *"); // undefined
 * parse("nope"); // undefined
 * ```
 * @see {@link parseFieldTuplesMap}
 * @see {@link normalizeAliases}
 *
 * @param expression Cron expression to be parsed.
 * @returns Object representing that expression or `undefined` if expression is
 * invalid.
 */
export const parse = (expression: CronString): Maybe<CronObject> => {
	const entries = parseFieldTuplesMap(
		objectToEntries(
			(build("iu")(cronRegExp).exec(normalizeAliases(expression))
				?.groups ?? EMPTY_OBJECT) as ReadonlyRecord<
					KeyOf<CronObject>,
					string
				>,
		),
	);

	return (
		length(entries) === 0 ? undefined : (
			entriesToObject(entries)
		)
	) as Maybe<CronObject>;
};
