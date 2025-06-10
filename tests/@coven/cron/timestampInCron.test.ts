import { timestampInCron } from "@coven/cron";
import { assert, assertFalse } from "@std/assert";

const dateInCronTest = timestampInCron({
	dayOfMonth: 5,
	dayOfWeek: 5,
	hour: 5,
	minute: 5,
	month: 5,
});

Deno.test("Date inside the cron expression returns true", () =>
	assert(dateInCronTest(new Date("1989-05-05T05:05:00.000Z").getTime())),
);

Deno.test("Date outside the cron expression returns false", () =>
	assertFalse(dateInCronTest(new Date("2024-05-05T05:05:00.000Z").getTime())),
);
