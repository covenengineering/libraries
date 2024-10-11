import { isRangeString } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

Deno.test("a string that is a * return false", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(isRangeString("*"), false));

Deno.test("an array of numbers return true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(isRangeString("1,2,3"), false));

Deno.test("a range return true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(isRangeString("3-5"), true));

Deno.test("a range with inverted from and to return false", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(isRangeString("5-3"), false));
