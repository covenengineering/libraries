import { rangeStringTest } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

Deno.test("a range string return true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(rangeStringTest("10-13"), true));

Deno.test("an invalid range string return false", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(rangeStringTest("nope"), false));
