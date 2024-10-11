import { parseNumber } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

Deno.test("a number 10 and a 13 return parsed values", () =>
	assertStrictEquals(parseNumber("13"), 13));

Deno.test("ranges with padding zeroes return parsed values", () =>
	assertStrictEquals(parseNumber("05"), 5));

Deno.test("numbers beyond 59 return undefined", () =>
	assertStrictEquals(parseNumber("60"), undefined));
