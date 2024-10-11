import {
	DAY_OF_MONTH_NAME,
	DAY_OF_WEEK_NAME,
	HOUR_NAME,
	MINUTE_NAME,
	MONTH_NAME,
} from "./fieldNames.ts";

/**
 * Field names in order.
 */
export const fieldNamesTuple = [
	MINUTE_NAME,
	HOUR_NAME,
	DAY_OF_MONTH_NAME,
	MONTH_NAME,
	DAY_OF_WEEK_NAME,
] as const;
