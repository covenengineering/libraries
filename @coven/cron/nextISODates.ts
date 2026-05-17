import { buildUnicode, DIGIT, escape, join, quantity } from "@coven/expression";
import { EMPTY_ITERABLE_ITERATOR, filter, map } from "@coven/iterables";
import { memoFunction } from "@coven/memo";
import { isString, isUndefined } from "@coven/predicates";
import type { ISODate, Maybe, Unary } from "@coven/types";
import type { CronObject } from "./CronObject.ts";
import type { CronString } from "./CronString.ts";
import { minutes } from "./minutes.ts";
import { parse } from "./parse.ts";
import { stringify } from "./stringify.ts";
import { timestampInCron } from "./timestampInCron.ts";

const dateReplace = join(
	quantity(2)(DIGIT),
	escape("."),
	quantity(3)(DIGIT),
	"Z",
);

const filterIsISODate = filter(
	isString as (value: Maybe<ISODate>) => value is ISODate,
);

/**
 * Get next ISO date string iterator for the given date and the given cron expression.
 *
 * @example Using `take` from `@coven/iterables` to get some ISO Dates following the given one with the given cron expression
 * ```typescript
 * import { take } from "@coven/iterables";
 *
 * take(2)(nextISODates("1989-10-13T10:15:00.000Z")("* * * * *"));
 * // ["1989-10-13T10:16:00.000Z", "1989-10-13T10:17:00.000Z"]
 * ```
 * @param date Base date to get the next date from.
 * @returns Curried function with date set.
 */
export const nextISODates: Unary<
	[isoDate: ISODate],
	Unary<[cron: CronString | Partial<CronObject>], IterableIterator<ISODate>>
> = memoFunction((isoDate) => {
	const minutesIterableIterator = minutes(
		Temporal.PlainDateTime.from(
			isoDate.replace(buildUnicode(dateReplace), "00.000"),
		),
	);

	return memoFunction((cron) => {
		const cronObject = parse(
			isString(cron) ? cron : (stringify(cron) ?? ("" as CronString)),
		);

		return isUndefined(cronObject) ?
				EMPTY_ITERABLE_ITERATOR
			:	filterIsISODate(
					map(timestampInCron(cronObject))(minutesIterableIterator),
				);
	});
});
