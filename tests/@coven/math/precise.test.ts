import { precise } from "@coven/math";
import { memo } from "@coven/memo";
import { assertStrictEquals } from "@std/assert";

Deno.test("Infinity returns Infinity", () =>
	assertStrictEquals(precise(Infinity), memo([Infinity])));

Deno.test("Number valid tuple returns said tuple", () =>
	assertStrictEquals(precise(1n, 5n), memo([1n, 5n])));

Deno.test("Number with 0 exponent returns only base", () =>
	assertStrictEquals(precise(1n, 0n), memo([1n])));

Deno.test("Number with no exponent returns only base", () =>
	assertStrictEquals(precise(1n), memo([1n])));
