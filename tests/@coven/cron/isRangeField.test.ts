import { isRangeField } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

Deno.test("a string that is a * return false", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(isRangeField("*"), false));

Deno.test("an array of numbers return true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(isRangeField([1, 2, 3]), false));

Deno.test("a range return true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(isRangeField({ from: 3, to: 5 }), true));

Deno.test("a range with inverted from and to return false", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(isRangeField({ from: 5, to: 3 }), false));
