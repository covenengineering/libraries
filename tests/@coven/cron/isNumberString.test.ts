import { isNumberString } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

Deno.test("a string that is a * return false", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(isNumberString("*"), false));

Deno.test("a valid number return true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(isNumberString("13"), true));
