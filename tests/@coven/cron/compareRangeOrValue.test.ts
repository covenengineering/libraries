import { compareRangeOrValue } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

Deno.test("Two equal values return true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(compareRangeOrValue(13)(13), true));

Deno.test("Two different values return false", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(compareRangeOrValue(13)(99), false));

Deno.test("Value and a range that contains it return true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(compareRangeOrValue(13)({ from: 0, to: 99 }), true));

Deno.test("Value and a range that doesn't contain it return true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(compareRangeOrValue(13)({ from: 0, to: 10 }), false));
