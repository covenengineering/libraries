import { buildUnicode, DIGIT, escape, join, quantity } from "@coven/expression";
import { EMPTY_ITERABLE_ITERATOR, filter, map, range } from "@coven/iterables";
import { memo } from "@coven/memo";
import { isString, isUndefined } from "@coven/predicates";
import type { ISODate, Maybe } from "@coven/types";
import type { CronObject } from "./CronObject.ts";
import type { CronString } from "./CronString.ts";
import { parse } from "./parse.ts";
import { stringify } from "./stringify.ts";
import { timestampInCron } from "./timestampInCron.ts";

const dateReplace = join(quantity(2)(DIGIT), escape("."), quantity(3)(DIGIT));

const minuteRange = range(6e4)(6e4)(Infinity);

const filterIsISODate = filter(
	isString as (value: Maybe<ISODate>) => value is ISODate,
);

/**
 * Get next ISO date string iterator for the given date and the given cron expression.
 *
 * @example
 * ```typescript
 * import { take } from "@coven/iterables";
 *
 * take(2)(nextISODates("1989-10-13T10:15:00.000Z")("* * * * *"));
 * // ["1989-10-13T10:16:00.000Z", "1989-10-13T10:17:00.000Z"]
 * ```
 * @param date Base date to get the next date from.
 * @returns Curried function with date set.
 */
export const nextISODates: (
	isoDate: ISODate,
) => (cron: CronString | Partial<CronObject>) => IterableIterator<ISODate> =
	memo(isoDate => {
		const initialTimestamp = new Date(
			isoDate.replace(buildUnicode(dateReplace), "00.000"),
		).getTime();

		return memo(cron => {
			const cronObject = parse(
				isString(cron) ? cron : (stringify(cron) ?? ("" as CronString)),
			);

			if (isUndefined(cronObject)) {
				return EMPTY_ITERABLE_ITERATOR;
			} else {
				const validDate = timestampInCron(cronObject);
				const mapValidDate = map((minute: number) =>
					validDate(initialTimestamp + minute),
				);

				return filterIsISODate(mapValidDate(minuteRange));
			}
		});
	});
