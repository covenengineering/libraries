import { head } from "@coven/iterables";
import type { Maybe } from "@coven/types";
import type { CronObject } from "./CronObject.ts";
import type { CronString } from "./CronString.ts";
import { nextDates } from "./nextDates.ts";

/**
 * Get next ISO date string for the given date and the given cron expression.
 *
 * @example
 * ```typescript
 * nextDate(new Date("1989-10-13T10:15:00.000"))("* * * * *"); // Date("1989-10-13T10:16:00.000")
 * ```
 * @param date Base date to get the next date from.
 * @returns Curried function with date set.
 */
export const nextDate = (
	date: Readonly<Date>,
): ((cron: CronString | Partial<CronObject>) => Maybe<Date>) => {
	const nextDatesFor = nextDates(date);

	return cron => head(nextDatesFor(cron));
};
