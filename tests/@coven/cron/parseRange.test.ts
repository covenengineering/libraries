import { parseRange } from "@coven/cron";
import { assertEquals, assertStrictEquals } from "@std/assert";

Deno.test("a number 1 and a 13 return parsed values", () =>
	assertEquals(parseRange("1-13"), { from: 1, to: 13 }));

Deno.test("a number 13 and a 13 return normalized 13", () =>
	assertStrictEquals(parseRange("13-13"), 13));

Deno.test("a number 13 and a 1 return parsed undefined", () =>
	assertStrictEquals(parseRange("13-1"), undefined));
