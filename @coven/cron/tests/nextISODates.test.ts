import { EMPTY_ARRAY } from "@coven/constants";
import { nextISODates } from "@coven/cron";
import { iterableToArray, take } from "@coven/iterables";
import { assertEquals } from "@std/assert";

const testDate = nextISODates("1992-01-01T00:00:00.000Z");

Deno.test("* * * * * gives a new date every minute", () =>
	assertEquals(iterableToArray(take(5)(testDate("* * * * *"))), [
		"1992-01-01T00:01:00.000Z",
		"1992-01-01T00:02:00.000Z",
		"1992-01-01T00:03:00.000Z",
		"1992-01-01T00:04:00.000Z",
		"1992-01-01T00:05:00.000Z",
	]));

Deno.test("5 * * * * gives a new date on minute 5 of each hour", () =>
	assertEquals(iterableToArray(take(5)(testDate("5 * * * *"))), [
		"1992-01-01T00:05:00.000Z",
		"1992-01-01T01:05:00.000Z",
		"1992-01-01T02:05:00.000Z",
		"1992-01-01T03:05:00.000Z",
		"1992-01-01T04:05:00.000Z",
	]));

Deno.test(
	"5 10-13 * * * gives a new date on minute 5 of hours 10 to 13 of each day",
	() =>
		assertEquals(iterableToArray(take(5)(testDate("5 10-13 * * *"))), [
			"1992-01-01T10:05:00.000Z",
			"1992-01-01T11:05:00.000Z",
			"1992-01-01T12:05:00.000Z",
			"1992-01-01T13:05:00.000Z",
			"1992-01-02T10:05:00.000Z",
		]),
);

Deno.test("* * 31 2 * returns nothing because it's an invalid date", () =>
	assertEquals(
		iterableToArray(take(5)(testDate("* * 31 2 *"))),
		EMPTY_ARRAY,
	));

Deno.test("* * 30,31 2 * returns nothing because it's an invalid date", () =>
	assertEquals(
		iterableToArray(take(5)(testDate("* * 30,31 2 *"))),
		EMPTY_ARRAY,
	));

Deno.test("* * 30,31 2 * returns nothing because it's an invalid date", () =>
	assertEquals(
		iterableToArray(take(5)(testDate("* * 30,31 2 *"))),
		EMPTY_ARRAY,
	));

Deno.test(
	"* * 29,30,31 2 * returns only 29 of february dates skip the invalid ones",
	() =>
		assertEquals(iterableToArray(take(5)(testDate("* * 29,30,31 2 *"))), [
			"1992-02-29T00:00:00.000Z",
			"1992-02-29T00:01:00.000Z",
			"1992-02-29T00:02:00.000Z",
			"1992-02-29T00:03:00.000Z",
			"1992-02-29T00:04:00.000Z",
		]),
);

Deno.test("* * * * * as object gives a new date every minute", () =>
	assertEquals(iterableToArray(take(5)(testDate("* * * * *"))), [
		"1992-01-01T00:01:00.000Z",
		"1992-01-01T00:02:00.000Z",
		"1992-01-01T00:03:00.000Z",
		"1992-01-01T00:04:00.000Z",
		"1992-01-01T00:05:00.000Z",
	]));

Deno.test("5 * * * * as object gives a new date on minute 5 of each hour", () =>
	assertEquals(iterableToArray(take(5)(testDate({ minute: 5 }))), [
		"1992-01-01T00:05:00.000Z",
		"1992-01-01T01:05:00.000Z",
		"1992-01-01T02:05:00.000Z",
		"1992-01-01T03:05:00.000Z",
		"1992-01-01T04:05:00.000Z",
	]));

Deno.test(
	"5 10-13 * * * as object gives a new date on minute 5 of hours 10 to 13 of each day",
	() =>
		assertEquals(
			iterableToArray(
				take(5)(testDate({ hour: { from: 10, to: 13 }, minute: 5 })),
			),
			[
				"1992-01-01T10:05:00.000Z",
				"1992-01-01T11:05:00.000Z",
				"1992-01-01T12:05:00.000Z",
				"1992-01-01T13:05:00.000Z",
				"1992-01-02T10:05:00.000Z",
			],
		),
);

Deno.test(
	"* * 31 2 * as object returns nothing because it's an invalid date",
	() =>
		assertEquals(
			iterableToArray(take(5)(testDate({ dayOfMonth: 31, month: 2 }))),
			EMPTY_ARRAY,
		),
);

Deno.test(
	"* * 29,30,31 2 * as object returns only 29 of february dates skip the invalid ones",
	() =>
		assertEquals(
			iterableToArray(
				take(5)(testDate({ dayOfMonth: [29, 30, 31], month: 2 })),
			),
			[
				"1992-02-29T00:00:00.000Z",
				"1992-02-29T00:01:00.000Z",
				"1992-02-29T00:02:00.000Z",
				"1992-02-29T00:03:00.000Z",
				"1992-02-29T00:04:00.000Z",
			],
		),
);
