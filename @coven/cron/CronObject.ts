import type { DayOfMonth, DayOfWeek, Hours, Minutes } from "@coven/types";
import type { Field } from "./Field.ts";
import type { MonthValue } from "./MonthValue.ts";

/**
 * Object that represents the 5 cron expression fields.
 *
 * @see {@linkcode Field}
 * @see {@linkcode MonthValue}
 */
export type CronObject = {
	readonly dayOfMonth: Field<DayOfMonth>;
	readonly dayOfWeek: Field<DayOfWeek>;
	readonly hour: Field<Hours>;
	readonly minute: Field<Minutes>;
	readonly month: Field<MonthValue>;
};
