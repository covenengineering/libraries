import { build } from "@coven/expression";
import { test } from "@coven/predicates";
import type { CronString } from "./CronString.ts";
import { cronRegExp } from "./cronRegExp.ts";

/**
 * Validates if a string is a cron expression.
 *
 * @see {CronString}
 */
export const isValidExpression = test(build("iu")(cronRegExp)) as (
	string: string,
) => string is CronString;
