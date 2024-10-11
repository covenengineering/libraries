import { parseField } from "@coven/cron";
import { assertEquals, assertStrictEquals } from "@std/assert";

Deno.test("a * get *", () => assertStrictEquals(parseField("*"), "*"));

Deno.test("a number get that parsed number", () =>
	assertStrictEquals(parseField("13"), 13));

Deno.test("a list get that list number", () =>
	assertEquals(parseField("10,11,12,13"), [10, 11, 12, 13]));

Deno.test("a range get that list range", () =>
	assertEquals(parseField("10-13"), { from: 10, to: 13 }));

Deno.test("an invalid string get undefined", () =>
	assertStrictEquals(parseField("invalid"), undefined));
