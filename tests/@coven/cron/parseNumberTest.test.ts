import { parseNumberTest } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

Deno.test("a number 10 and a 13 return true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(parseNumberTest("13"), true));

Deno.test("ranges with padding zeroes return true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(parseNumberTest("05"), true));

Deno.test("numbers beyond 59 return false", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(parseNumberTest("60"), false));
