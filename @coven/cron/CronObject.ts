import type { DayOfMonth, DayOfWeek, Hours, Minutes } from "@coven/types";
import type { Field } from "./Field.ts";
import type { MonthValue } from "./MonthValue.ts";

/**
 * Object that represents the 5 cron expression fields.
 *
 * @see {@linkcode Field}
 * @see {@linkcode MonthValue}
 */
export type CronObject = Readonly<{
	dayOfMonth: Field<DayOfMonth>;
	dayOfWeek: Field<DayOfWeek>;
	hour: Field<Hours>;
	minute: Field<Minutes>;
	month: Field<MonthValue>;
}>;
