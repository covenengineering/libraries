import type { CronObject } from "./CronObject.ts";
import { compareField } from "./compareField.ts";
import {
	DAY_OF_MONTH_NAME,
	DAY_OF_WEEK_NAME,
	HOUR_NAME,
	MINUTE_NAME,
	MONTH_NAME,
} from "./fieldNames.ts";
import { isAllToken } from "./isAllToken.ts";

/**
 * Check if given cron expression object includes given date.
 *
 * @param cron Cron object.
 * @returns Curried function with `cron` in context.
 */
export const dateInCron =
	(cron: CronObject): (date: Readonly<Date>) => boolean => (date) =>
		(isAllToken(cron[MINUTE_NAME]) ||
			compareField(date.getMinutes(), cron[MINUTE_NAME])) &&
		(isAllToken(cron[HOUR_NAME]) ||
			compareField(date.getHours(), cron[HOUR_NAME])) &&
		(isAllToken(cron[DAY_OF_MONTH_NAME]) ||
			compareField(date.getDate(), cron[DAY_OF_MONTH_NAME])) &&
		(isAllToken(cron[MONTH_NAME]) ||
			compareField(date.getMonth() + 1, cron[MONTH_NAME])) &&
		(isAllToken(cron[DAY_OF_WEEK_NAME]) ||
			compareField(date.getDay(), cron[DAY_OF_WEEK_NAME]));
