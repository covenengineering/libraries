import { nextDates } from "@coven/cron";
import { iterableToArray, take } from "@coven/iterables";
import { assertEquals } from "@std/assert";

const testDate = nextDates(new Date("1989-10-13T10:15:00.123"));

Deno.test("* * * * * give a new date every minute", () =>
	assertEquals(
		iterableToArray(take(5)(testDate("* * * * *"))),
		[
			"1989-10-13T10:16:00.000",
			"1989-10-13T10:17:00.000",
			"1989-10-13T10:18:00.000",
			"1989-10-13T10:19:00.000",
			"1989-10-13T10:20:00.000",
		].map((date) => new Date(date)),
	));

Deno.test("5 * * * * give a new date on minute 5 of each hour", () =>
	assertEquals(
		iterableToArray(take(5)(testDate("5 * * * *"))),
		[
			"1989-10-13T11:05:00.000",
			"1989-10-13T12:05:00.000",
			"1989-10-13T13:05:00.000",
			"1989-10-13T14:05:00.000",
			"1989-10-13T15:05:00.000",
		].map((date) => new Date(date)),
	));

Deno.test("5 10-13 * * * give a new date on minute 5 of hours 10 to 13 of each day", () =>
	assertEquals(
		iterableToArray(take(5)(testDate("5 10-13 * * *"))),
		[
			"1989-10-13T11:05:00.000",
			"1989-10-13T12:05:00.000",
			"1989-10-13T13:05:00.000",
			"1989-10-14T10:05:00.000",
			"1989-10-14T11:05:00.000",
		].map((date) => new Date(date)),
	));

Deno.test("* * 31 2 * return nothing because it's an invalid date", () =>
	assertEquals(iterableToArray(take(5)(testDate("* * 31 2 *"))), []));

Deno.test("* * 30,31 2 * return nothing because it's an invalid date", () =>
	assertEquals(iterableToArray(take(5)(testDate("* * 30,31 2 *"))), []));

Deno.test("* * 30,31 2 * return nothing because it's an invalid date", () =>
	assertEquals(iterableToArray(take(5)(testDate("* * 30,31 2 *"))), []));

Deno.test("* * 29,30,31 2 * return only 29 of february dates skip the invalid ones", () =>
	assertEquals(
		iterableToArray(take(5)(testDate("* * 29,30,31 2 *"))),
		[
			"1992-02-29T00:00:00.000",
			"1992-02-29T00:01:00.000",
			"1992-02-29T00:02:00.000",
			"1992-02-29T00:03:00.000",
			"1992-02-29T00:04:00.000",
		].map((date) => new Date(date)),
	));

Deno.test("* * * * * as object give a new date every minute", () =>
	assertEquals(
		iterableToArray(take(5)(testDate("* * * * *"))),
		[
			"1989-10-13T10:16:00.000",
			"1989-10-13T10:17:00.000",
			"1989-10-13T10:18:00.000",
			"1989-10-13T10:19:00.000",
			"1989-10-13T10:20:00.000",
		].map((date) => new Date(date)),
	));

Deno.test("5 * * * * as object give a new date on minute 5 of each hour", () =>
	assertEquals(
		iterableToArray(take(5)(testDate({ minute: 5 }))),
		[
			"1989-10-13T11:05:00.000",
			"1989-10-13T12:05:00.000",
			"1989-10-13T13:05:00.000",
			"1989-10-13T14:05:00.000",
			"1989-10-13T15:05:00.000",
		].map((date) => new Date(date)),
	));

Deno.test("5 10-13 * * * as object give a new date on minute 5 of hours 10 to 13 of each day", () =>
	assertEquals(
		iterableToArray(
			take(5)(testDate({ hour: { from: 10, to: 13 }, minute: 5 })),
		),
		[
			"1989-10-13T11:05:00.000",
			"1989-10-13T12:05:00.000",
			"1989-10-13T13:05:00.000",
			"1989-10-14T10:05:00.000",
			"1989-10-14T11:05:00.000",
		].map((date) => new Date(date)),
	));

Deno.test("* * 31 2 * as object return nothing because it's an invalid date", () =>
	assertEquals(
		iterableToArray(take(5)(testDate({ dayOfMonth: 31, month: 2 }))),
		[],
	));

Deno.test("* * 29,30,31 2 * as object return only 29 of february dates skip the invalid ones", () =>
	assertEquals(
		iterableToArray(
			take(5)(testDate({ dayOfMonth: [29, 30, 31], month: 2 })),
		),
		[
			"1992-02-29T00:00:00.000",
			"1992-02-29T00:01:00.000",
			"1992-02-29T00:02:00.000",
			"1992-02-29T00:03:00.000",
			"1992-02-29T00:04:00.000",
		].map((date) => new Date(date)),
	));
