import { compareField } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

Deno.test("Two equal values return true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(compareField(13, 13), true));

Deno.test("Two different values return false", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(compareField(13, 99), false));

Deno.test("Value and a range that contains it return true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(compareField(13, { from: 0, to: 99 }), true));

Deno.test("Value and a range that doesn't contain it return true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(compareField(13, { from: 0, to: 10 }), false));

Deno.test("Value and a list that contains it return true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(compareField(13, [10, 13]), true));

Deno.test("Value and a list that doesn't contain it return true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(compareField(13, [10, 12]), false));

Deno.test("Value and a list with a range that contains it return true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(compareField(13, [10, { from: 11, to: 99 }]), true));

Deno.test("Value and a list with a range that doesn't contain it return true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(compareField(13, [5, { from: 10, to: 12 }]), false));
