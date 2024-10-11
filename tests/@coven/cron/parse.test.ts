import type { CronString } from "@coven/cron";
import { parse } from "@coven/cron";
import { assertEquals, assertStrictEquals } from "@std/assert";
import { februaryBadDaysOfMonth } from "./februaryBadDaysOfMonth.ts";

Deno.test("a * token for all fields return object with all properties set to *", () =>
	assertEquals(parse("* * * * *"), {
		dayOfMonth: "*",
		dayOfWeek: "*",
		hour: "*",
		minute: "*",
		month: "*",
	}));

Deno.test(
	"a * token for all fields except minute return object with all properties set to * except minute",
	() =>
		assertEquals(parse("13 * * * *"), {
			dayOfMonth: "*",
			dayOfWeek: "*",
			hour: "*",
			minute: 13,
			month: "*",
		}),
);

Deno.test(
	"a * token for all fields except hour return object with all properties set to * except hour",
	() =>
		assertEquals(parse("* 13 * * *"), {
			dayOfMonth: "*",
			dayOfWeek: "*",
			hour: 13,
			minute: "*",
			month: "*",
		}),
);

Deno.test("a * token for all fields except dayOfMonth return object with all properties set to * except dayOfMonth", () =>
	assertEquals(parse("* * 13 * *"), {
		dayOfMonth: 13,
		dayOfWeek: "*",
		hour: "*",
		minute: "*",
		month: "*",
	}));

Deno.test("a * token for all fields except month return object with all properties set to * except month", () =>
	assertEquals(parse("* * * 10 *"), {
		dayOfMonth: "*",
		dayOfWeek: "*",
		hour: "*",
		minute: "*",
		month: 10,
	}));

Deno.test("a * token for all fields except dayOfWeek return object with all properties set to * except dayOfWeek", () =>
	assertEquals(parse("* * * * 5"), {
		dayOfMonth: "*",
		dayOfWeek: 5,
		hour: "*",
		minute: "*",
		month: "*",
	}));

Deno.test("all fields set return object with all properties set", () =>
	assertEquals(parse("13 13 13 10 5"), {
		dayOfMonth: 13,
		dayOfWeek: 5,
		hour: 13,
		minute: 13,
		month: 10,
	}));

Deno.test("all fields set with ranges return object with all properties set", () =>
	assertEquals(parse("12-13 12-13 12-13 9-10 4-5"), {
		dayOfMonth: { from: 12, to: 13 },
		dayOfWeek: { from: 4, to: 5 },
		hour: { from: 12, to: 13 },
		minute: { from: 12, to: 13 },
		month: { from: 9, to: 10 },
	}));

Deno.test("all fields set with lists return object with all properties set", () =>
	assertEquals(parse("12,13 12,13 12,13 9,10 4,5"), {
		dayOfMonth: [12, 13],
		dayOfWeek: [4, 5],
		hour: [12, 13],
		minute: [12, 13],
		month: [9, 10],
	}));

Deno.test("all fields set with lists with ranges return object with all properties set", () =>
	assertEquals(parse("11-12,13 11-12,13 11-12,13 8-9,10 3-4,5"), {
		dayOfMonth: [{ from: 11, to: 12 }, 13],
		dayOfWeek: [{ from: 3, to: 4 }, 5],
		hour: [{ from: 11, to: 12 }, 13],
		minute: [{ from: 11, to: 12 }, 13],
		month: [{ from: 8, to: 9 }, 10],
	}));

Deno.test("0 17 * * mon,tue,wed,thu,fri turn days of week into their number equivalents", () =>
	assertEquals(parse("0 17 * * mon,tue,wed,thu,fri" as CronString), {
		dayOfMonth: "*",
		dayOfWeek: [1, 2, 3, 4, 5],
		hour: 17,
		minute: 0,
		month: "*",
	}));

Deno.test("00 06 * * MON-FRI turn days of week into their number equivalents and handle double digit starting with 0 values", () =>
	assertEquals(parse("00 06 * * MON-FRI" as CronString), {
		dayOfMonth: "*",
		dayOfWeek: { from: 1, to: 5 },
		hour: 6,
		minute: 0,
		month: "*",
	}));

Deno.test("* * * Mar-oct MON-FRI handle month and day aliases", () =>
	assertEquals(parse("* * * Mar-oct MON-FRI" as CronString), {
		dayOfMonth: "*",
		dayOfWeek: { from: 1, to: 5 },
		hour: "*",
		minute: "*",
		month: { from: 3, to: 10 },
	}));

Deno.test("all fields set with lists with ranges, but a mistake in hour return undefined", () =>
	assertEquals(parse("11-12,13 11-12,24 11-12,13 8-9,10 3-4,5"), undefined));

Deno.test("an invalid string return undefined", () =>
	assertEquals(parse("INVALID" as CronString), undefined));

Deno.test("an invalid date return undefined", () =>
	assertEquals(parse("* * 31 2 *"), undefined));

Deno.test("an invalid date return undefined", () =>
	assertEquals(parse("* * 30 02 *"), undefined));

Deno.test("an invalid date return undefined", () =>
	assertEquals(parse("* * 31 feb *" as CronString), undefined));

Deno.test("an invalid date return undefined", () =>
	assertEquals(parse("* * 31 4 *"), undefined));

Deno.test("a valid date containing an invalid one return it because there's a valid date", () =>
	assertEquals(parse("* * 31 jan,feb *" as CronString), {
		dayOfMonth: 31,
		dayOfWeek: "*",
		hour: "*",
		minute: "*",
		month: [1, 2],
	}));

Deno.test("a list with duplicated values return flattened values", () =>
	assertEquals(parse("1,2,3,1 * * * *" as CronString), {
		dayOfMonth: "*",
		dayOfWeek: "*",
		hour: "*",
		minute: [1, 2, 3],
		month: "*",
	}));

Deno.test("a list of ranges with duplicated values return flattened values", () =>
	assertEquals(parse("1-1,2-2,3-3,1-1 * * * *" as CronString), {
		dayOfMonth: "*",
		dayOfWeek: "*",
		hour: "*",
		minute: [1, 2, 3],
		month: "*",
	}));

februaryBadDaysOfMonth.forEach((februaryBadDayOfMonth) =>
	Deno.test(`* * ${februaryBadDayOfMonth} 2 * returns undefined`, () =>
		assertStrictEquals(
			parse(`* * ${februaryBadDayOfMonth} 2 *`),
			undefined,
		))
);

februaryBadDaysOfMonth.forEach((februaryBadDayOfMonth) => (
	Deno.test(
		`* * ${februaryBadDayOfMonth} 2,3 * returns valid date because 3 is included`,
		() =>
			assertEquals(
				({
					...parse(`* * ${februaryBadDayOfMonth} 2,3 *`),
					dayOfMonth: "*",
					month: [2, 3],
				}) as const,
				({
					dayOfMonth: "*",
					dayOfWeek: "*",
					hour: "*",
					minute: "*",
					month: [2, 3],
				}) as const,
			),
	)
));

februaryBadDaysOfMonth.forEach((februaryBadDayOfMonth) => (
	Deno.test(
		`* * ${februaryBadDayOfMonth} 2-4 * returns valid date because 3 is included`,
		() =>
			assertEquals(
				({
					...parse(`* * ${februaryBadDayOfMonth} 2-4 *`),
					dayOfMonth: "*",
				}) as const,
				({
					dayOfMonth: "*",
					dayOfWeek: "*",
					hour: "*",
					minute: "*",
					month: { from: 2, to: 4 },
				}) as const,
			),
	)
));
