import { isAllToken } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

Deno.test("a string that is a * return true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(isAllToken("*"), true));

Deno.test("a string that isn't a * return false", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(isAllToken("nope"), false));
