import { head } from "@coven/iterables";
import { memoFunction } from "@coven/memo";
import type { ISODate, Maybe, Unary } from "@coven/types";
import type { CronObject } from "./CronObject.ts";
import type { CronString } from "./CronString.ts";
import { nextISODates } from "./nextISODates.ts";

/**
 * Get next ISO date string for the given date and the given cron expression.
 *
 * > [!NOTE]
 * > This function is expensive because it relies on {@linkcode nextISODates} which is also expensive (it goes minute by minute).
 *
 * > [!WARNING]
 * > If user input will be passed to this function, make sure to validate it first because this has the potential to loop forever.
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
