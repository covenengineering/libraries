import { memo } from "@coven/memo";
import type { ISODate, Maybe } from "@coven/types";
import type { CronObject } from "./CronObject.ts";
import { compareField } from "./compareField.ts";
import { isAllToken } from "./isAllToken.ts";

/**
 * Check if given cron expression object includes given timestamp.
 *
 * @param cron Cron object.
 * @returns Curried function with `cron` in context.
 */
export const timestampInCron: (
	cron: CronObject,
) => (timestamp: number) => Maybe<ISODate> = memo(
	(cron: CronObject): (timestamp: number) => Maybe<ISODate> => {
		const minuteIsAll = isAllToken(cron.minute);
		const hourIsAll = isAllToken(cron.hour);
		const dayOfMonthIsAll = isAllToken(cron.dayOfMonth);
		const monthIsAll = isAllToken(cron.month);
		const dayOfWeekIsAll = isAllToken(cron.dayOfWeek);
		const date = new Date(0);

		return (timestamp) => {
			date.setTime(timestamp);

			return (
					(minuteIsAll
						|| compareField(date.getUTCMinutes(), cron.minute))
					&& (hourIsAll
						|| compareField(date.getUTCHours(), cron.hour))
					&& (dayOfMonthIsAll
						|| compareField(date.getUTCDate(), cron.dayOfMonth))
					&& (monthIsAll
						|| compareField(date.getUTCMonth() + 1, cron.month))
					&& (dayOfWeekIsAll
						|| compareField(date.getUTCDay(), cron.dayOfWeek))
				)
				? (date.toISOString() as ISODate)
				: undefined;
		};
	},
);
