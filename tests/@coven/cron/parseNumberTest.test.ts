import { parseNumberTest } from "@coven/cron";
import { assert, assertFalse } from "@std/assert";

Deno.test("Number 10 and a 13 returns true", () =>
	assert(parseNumberTest("13")));

Deno.test("Ranges with padding zeroes returns true", () =>
	assert(parseNumberTest("05")));

Deno.test("Numbers beyond 59 returns false", () =>
	assertFalse(parseNumberTest("60")));
