import { nextDate } from "@coven/cron";
import { assertEquals } from "@std/assert";

const testDate = nextDate(new Date("1989-10-13T10:15:00.123"));

Deno.test("* * * * * gets next minute", () =>
	assertEquals(testDate("* * * * *"), new Date("1989-10-13T10:16:00.000")),
);

Deno.test("5 * * * * gets next hour's minute 5", () =>
	assertEquals(testDate("5 * * * *"), new Date("1989-10-13T11:05:00.000")),
);

Deno.test("5 10-13 * * * gets next hour's minute 5", () =>
	assertEquals(
		testDate("5 10-13 * * *"),
		new Date("1989-10-13T11:05:00.000"),
	),
);

Deno.test("* * 31 2 * returns nothing because it's an invalid date", () =>
	assertEquals(testDate("* * 31 2 *"), undefined),
);

Deno.test("* * 30,31 2 * returns nothing because it's an invalid date", () =>
	assertEquals(testDate("* * 30,31 2 *"), undefined),
);

Deno.test("* * 30,31 2 * returns nothing because it's an invalid date", () =>
	assertEquals(testDate("* * 30,31 2 *"), undefined),
);

Deno.test("* * 29,30,31 2 * gets first minute of next february 29", () =>
	assertEquals(
		testDate("* * 29,30,31 2 *"),
		new Date("1992-02-29T00:00:00.000"),
	),
);

Deno.test("* * * * * as an object gets next minute", () =>
	assertEquals(
		testDate({
			dayOfMonth: "*",
			dayOfWeek: "*",
			hour: "*",
			minute: "*",
			month: "*",
		}),
		new Date("1989-10-13T10:16:00.000"),
	),
);

Deno.test("5 * * * * as an object gets next hour's minute 5", () =>
	assertEquals(testDate({ minute: 5 }), new Date("1989-10-13T11:05:00.000")),
);

Deno.test("5 10-13 * * * as an object gets next hour's minute 5", () =>
	assertEquals(
		testDate({ hour: { from: 10, to: 13 }, minute: 5 }),
		new Date("1989-10-13T11:05:00.000"),
	),
);

Deno.test(
	"* * 31 2 * as object returns nothing because it's an invalid date",
	() => assertEquals(testDate({ dayOfMonth: 31, month: 2 }), undefined),
);

Deno.test(
	"* * 29,30,31 2 * as an object gets first minute of next february 29",
	() =>
		assertEquals(
			testDate({ dayOfMonth: [29, 30, 31], month: 2 }),
			new Date("1992-02-29T00:00:00.000"),
		),
);
