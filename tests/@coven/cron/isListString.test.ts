import { isListString } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

Deno.test("a string that is a * return false", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(isListString("*"), false));

Deno.test("an array of numbers return true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(isListString("1,2,3"), true));

Deno.test("an array of numbers and ranges return true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(isListString("1,2,3-5"), true));
