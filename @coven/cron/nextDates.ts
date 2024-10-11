import { EMPTY_STRING } from "@coven/constants";
import { build, DIGIT, escape, quantity } from "@coven/expression";
import { iteratorFunctionToIterableIterator } from "@coven/iterables";
import { isString, isUndefined } from "@coven/predicates";
import type { CronObject } from "./CronObject.ts";
import type { CronString } from "./CronString.ts";
import { dateInCron } from "./dateInCron.ts";
import { parse } from "./parse.ts";
import { stringify } from "./stringify.ts";

/**
 * Get next ISO date iterator for the given date and the given cron expression.
 *
 * @example
 * ```typescript
 * take(2)(nextDates(new Date("1989-10-13T10:15:00.000Z"))("* * * * *"));
 * // [Date("1989-10-13T10:16:00.000"), Date("1989-10-13T10:17:00.000Z")]
 * ```
 * @param date Base date to get the next date from.
 * @returns Curried function with date set.
 */
export const nextDates = (
	date: Readonly<Date>,
): (cron: CronString | Partial<CronObject>) => IterableIterator<Date> =>
(cron) =>
	iteratorFunctionToIterableIterator(function* (): Generator<Date> {
		const cronObject = parse(
			isString(cron) ? cron : (
				stringify(cron) ?? (EMPTY_STRING as CronString)
			),
		);

		if (!isUndefined(cronObject)) {
			const validDate = dateInCron(cronObject);
			const now = new Date(
				date
					.toISOString()
					.replace(
						build()(
							quantity(2)(DIGIT),
							escape("."),
							quantity(3)(DIGIT),
						),
						"00.000",
					),
			);

			for (;;) {
				validDate((now.setMinutes(now.getMinutes() + 1), now))
					? yield new Date(now)
					: undefined;
			}
		}
	});
