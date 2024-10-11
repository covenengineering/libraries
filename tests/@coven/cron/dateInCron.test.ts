import { dateInCron } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

const dateInCronTest = dateInCron({
	dayOfMonth: 5,
	dayOfWeek: 5,
	hour: 5,
	minute: 5,
	month: 5,
});

Deno.test("a date inside the cron expression return true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(
		dateInCronTest(new Date("1989-05-05T05:05:00.000")),
		true,
	));

Deno.test("a date outside the cron expression return false", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(
		dateInCronTest(new Date("2024-05-05T05:05:00.000")),
		false,
	));
