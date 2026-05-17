import { memoFunction } from "@coven/memo";
import type { ISODate, Maybe, Unary } from "@coven/types";
import type { CronObject } from "./CronObject.ts";
import { compareField } from "./compareField.ts";

const instantStringOptions = {
	smallestUnit: "millisecond",
} as const satisfies Temporal.InstantToStringOptions;

/**
 * Check if given cron expression object includes given timestamp.
 *
 * @param cron Cron object.
 * @returns Curried function with `cron` in context.
 */
export const timestampInCron: Unary<
	[cron: CronObject],
	Unary<[zoneDateTime: Temporal.PlainDateTime], Maybe<ISODate>>
> = memoFunction((cron) => {
	const compareMinute = compareField(cron.minute);
	const compareHour = compareField(cron.hour);
	const compareDayOfMonth = compareField(cron.dayOfMonth);
	const compareMonth = compareField(cron.month);
	const compareDayOfWeek = compareField(cron.dayOfWeek);

	return (plainDateTime) =>
		(
			compareMinute(plainDateTime.minute)
			&& compareHour(plainDateTime.hour)
			&& compareDayOfMonth(plainDateTime.day)
			&& compareMonth(plainDateTime.month)
			&& compareDayOfWeek(plainDateTime.dayOfWeek % 7)
		) ?
			(`${plainDateTime.toString(instantStringOptions)}Z` as ISODate)
		:	undefined;
});
