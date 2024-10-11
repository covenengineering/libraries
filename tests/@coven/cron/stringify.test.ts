import { stringify } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

Deno.test("a * token for all fields return object with all properties set to *", () =>
	assertStrictEquals(
		stringify({
			dayOfMonth: "*",
			dayOfWeek: "*",
			hour: "*",
			minute: "*",
			month: "*",
		}),
		"* * * * *",
	));

Deno.test("a * token for all fields except minute return object with all properties set to * except minute", () =>
	assertStrictEquals(
		stringify({
			dayOfMonth: "*",
			dayOfWeek: "*",
			hour: "*",
			minute: 13,
			month: "*",
		}),
		"13 * * * *",
	));

Deno.test("a * token for all fields except hour return object with all properties set to * except hour", () =>
	assertStrictEquals(
		stringify({
			dayOfMonth: "*",
			dayOfWeek: "*",
			hour: 13,
			minute: "*",
			month: "*",
		}),
		"* 13 * * *",
	));

Deno.test("a * token for all fields except dayOfMonth return object with all properties set to * except dayOfMonth", () =>
	assertStrictEquals(
		stringify({
			dayOfMonth: 13,
			dayOfWeek: "*",
			hour: "*",
			minute: "*",
			month: "*",
		}),
		"* * 13 * *",
	));

Deno.test("a * token for all fields except month return object with all properties set to * except month", () =>
	assertStrictEquals(
		stringify({
			dayOfMonth: "*",
			dayOfWeek: "*",
			hour: "*",
			minute: "*",
			month: 10,
		}),
		"* * * 10 *",
	));

Deno.test("a * token for all fields except dayOfWeek return object with all properties set to * except dayOfWeek", () =>
	assertStrictEquals(
		stringify({
			dayOfMonth: "*",
			dayOfWeek: 5,
			hour: "*",
			minute: "*",
			month: "*",
		}),
		"* * * * 5",
	));

Deno.test("all fields set return object with all properties set", () =>
	assertStrictEquals(
		stringify({
			dayOfMonth: 13,
			dayOfWeek: 5,
			hour: 13,
			minute: 13,
			month: 10,
		}),
		"13 13 13 10 5",
	));

Deno.test("all fields set with ranges return object with all properties set", () =>
	assertStrictEquals(
		stringify({
			dayOfMonth: { from: 12, to: 13 },
			dayOfWeek: { from: 4, to: 5 },
			hour: { from: 12, to: 13 },
			minute: { from: 12, to: 13 },
			month: { from: 9, to: 10 },
		}),
		"12-13 12-13 12-13 9-10 4-5",
	));

Deno.test("all fields set with lists return object with all properties set", () =>
	assertStrictEquals(
		stringify({
			dayOfMonth: [12, 13],
			dayOfWeek: [4, 5],
			hour: [12, 13],
			minute: [12, 13],
			month: [9, 10],
		}),
		"12,13 12,13 12,13 9,10 4,5",
	));

Deno.test("all fields set with lists with ranges return object with all properties set", () =>
	assertStrictEquals(
		stringify({
			dayOfMonth: [{ from: 11, to: 12 }, 13],
			dayOfWeek: [{ from: 3, to: 4 }, 5],
			hour: [{ from: 11, to: 12 }, 13],
			minute: [{ from: 11, to: 12 }, 13],
			month: [{ from: 8, to: 9 }, 10],
		}),
		"11-12,13 11-12,13 11-12,13 8-9,10 3-4,5",
	));

Deno.test("an empty object return all set to *", () =>
	assertStrictEquals(stringify({}), "* * * * *"));

Deno.test("an only hour set return all set to *", () =>
	assertStrictEquals(stringify({ hour: 13 }), "* 13 * * *"));

Deno.test("an invalid value return undefined", () =>
	assertStrictEquals(stringify({ hour: 99 as 13 }), undefined));
