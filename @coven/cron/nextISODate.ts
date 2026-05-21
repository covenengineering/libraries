import { head } from "@coven/iterables";
import { memoFunction } from "@coven/memo";
import type { ISODate, Maybe, Unary } from "@coven/types";
import type { CronObject } from "./CronObject.ts";
import type { CronString } from "./CronString.ts";
import { nextISODates } from "./nextISODates.ts";

/**
 * Get next ISO date string for the given date and the given cron expression.
 *
 * @example Getting the next ISO Date string corresponding to the given cron expression
 * ```typescript
 * nextISODate("1989-10-13T10:15:00.000Z")("* * * * *"); // "1989-10-13T10:16:00.000Z"
 * ```
 * @param date Base date to get the next date from.
 * @returns Curried function with date set.
 */
export const nextISODate: Unary<
	[isoDate: ISODate],
	Unary<[cron: CronString | Partial<CronObject>], Maybe<ISODate>>
> = memoFunction((isoDate) => {
	const nextDatesFor = nextISODates(isoDate);

	return memoFunction((cron) => head(nextDatesFor(cron)));
});
