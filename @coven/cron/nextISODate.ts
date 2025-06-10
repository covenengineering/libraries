import { head } from "@coven/iterables";
import { memo } from "@coven/memo";
import type { ISODate, Maybe } from "@coven/types";
import type { CronObject } from "./CronObject.ts";
import type { CronString } from "./CronString.ts";
import { nextISODates } from "./nextISODates.ts";

/**
 * Get next ISO date string for the given date and the given cron expression.
 *
 * @example
 * ```typescript
 * nextISODate("1989-10-13T10:15:00.000Z")("* * * * *"); // "1989-10-13T10:16:00.000Z"
 * ```
 * @param date Base date to get the next date from.
 * @returns Curried function with date set.
 */
export const nextISODate: (
	isoDate: ISODate,
) => (cron: CronString | Partial<CronObject>) => Maybe<ISODate> = memo(
	isoDate => {
		const nextDatesFor = nextISODates(isoDate);

		return memo(cron => head(nextDatesFor(cron)));
	},
);
