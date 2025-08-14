import { isListString } from "@coven/cron";
import { assert, assertFalse } from "@std/assert";

Deno.test("a string that is a * returns false", () =>
	assertFalse(isListString("*")));

Deno.test("an array of numbers returns true", () =>
	assert(isListString("1,2,3")));

Deno.test("an array of numbers and ranges returns true", () =>
	assert(isListString("1,2,3-5")));
