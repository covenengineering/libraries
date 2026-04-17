import { assertStrictEquals } from "@std/assert";
import { nextISODate } from "../nextISODate.ts";

const testDate = nextISODate("1992-01-01T00:00:00.000Z");

Deno.test("* * * * * gets next minute", () =>
	assertStrictEquals(testDate("* * * * *"), "1992-01-01T00:01:00.000Z"),
);

Deno.test("5 * * * * gets next hour's minute 5", () =>
	assertStrictEquals(testDate("5 * * * *"), "1992-01-01T00:05:00.000Z"),
);

Deno.test("5 10-13 * * * gets next hour's minute 5", () =>
	assertStrictEquals(testDate("5 10-13 * * *"), "1992-01-01T10:05:00.000Z"),
);

Deno.test("* * 31 2 * returns nothing because it's an invalid date", () =>
	assertStrictEquals(testDate("* * 31 2 *"), undefined),
);

Deno.test("* * 30,31 2 * returns nothing because it's an invalid date", () =>
	assertStrictEquals(testDate("* * 30,31 2 *"), undefined),
);

Deno.test("* * 30,31 2 * returns nothing because it's an invalid date", () =>
	assertStrictEquals(testDate("* * 30,31 2 *"), undefined),
);

Deno.test("* * 29,30,31 2 * gets first minute of next february 29", () =>
	assertStrictEquals(
		testDate("* * 29,30,31 2 *"),
		"1992-02-29T00:00:00.000Z",
	),
);

Deno.test("* * * * * as an object gets next minute", () =>
	assertStrictEquals(
		testDate({
			dayOfMonth: "*",
			dayOfWeek: "*",
			hour: "*",
			minute: "*",
			month: "*",
		}),
		"1992-01-01T00:01:00.000Z",
	),
);

Deno.test("5 * * * * as an object gets next hour's minute 5", () =>
	assertStrictEquals(testDate({ minute: 5 }), "1992-01-01T00:05:00.000Z"),
);

Deno.test("5 10-13 * * * as an object gets next hour's minute 5", () =>
	assertStrictEquals(
		testDate({ hour: { from: 10, to: 13 }, minute: 5 }),
		"1992-01-01T10:05:00.000Z",
	),
);

Deno.test(
	"* * 31 2 * as object returns nothing because it's an invalid date",
	() => assertStrictEquals(testDate({ dayOfMonth: 31, month: 2 }), undefined),
);

Deno.test(
	"* * 29,30,31 2 * as an object gets first minute of next february 29",
	() =>
		assertStrictEquals(
			testDate({ dayOfMonth: [29, 30, 31], month: 2 }),
			"1992-02-29T00:00:00.000Z",
		),
);
