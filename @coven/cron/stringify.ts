import { EMPTY_OBJECT } from "@coven/constants";
import type { Maybe } from "@coven/types";
import type { CronObject } from "./CronObject.ts";
import type { CronString } from "./CronString.ts";
import { fieldNamesTuple } from "./fieldNamesTuple.ts";
import { isValidExpression } from "./isValidExpression.ts";
import { stringifyField } from "./stringifyField.ts";
import { ALL_TOKEN } from "./tokens.ts";

/**
 * Takes a cron object and returns a sting expression.
 *
 * @example
 * ```typescript
 * stringify({}); // "* * * * *"
 * stringify({ dayOfMonth: 13, month: 10 }); // "* * 13 10 *"
 * stringify({
 * 	minute: 5,
 * 	dayOfMonth: [10, 11, 13],
 * 	month: { from: 1, to: 10 }
 * }); // "5 * 10,11,13 1-10 *"
 * stringify({ month: 2, dayOfMonth: 31 }); // undefined
 * ```
 * @see {@link fieldNamesTuple}
 * @see {@link stringifyField}
 * @see {@link isValidExpression}
 *
 * @param cron Cron object.
 * @returns Cron string expression.
 */
export const stringify = (
	cron: Partial<CronObject> = EMPTY_OBJECT,
): Maybe<CronString> => {
	const expression = fieldNamesTuple
		.map((name) => stringifyField(cron[name] ?? ALL_TOKEN))
		.join(" ");

	return isValidExpression(expression) ? expression : undefined;
};
