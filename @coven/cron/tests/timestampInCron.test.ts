import { assert, assertFalse } from "@std/assert";
import { timestampInCron } from "../timestampInCron.ts";

const dateInCronTest = timestampInCron({
	dayOfMonth: 5,
	dayOfWeek: 5,
	hour: 5,
	minute: 5,
	month: 5,
});

Deno.test("Date inside the cron expression returns true", () =>
	assert(
		dateInCronTest(Temporal.PlainDateTime.from("1989-05-05T05:05:00.000")),
	),
);

Deno.test("Date outside the cron expression returns false", () =>
	assertFalse(
		dateInCronTest(Temporal.PlainDateTime.from("2024-05-05T05:05:00.000")),
	),
);
