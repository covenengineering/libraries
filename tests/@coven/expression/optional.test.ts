import { optional } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("Number 13 adds a ? to the right", () =>
	assertStrictEquals(optional(13), "13?"));

Deno.test("Number 1, and number 3 adds a ? to the right", () =>
	assertStrictEquals(optional(1, 3), "13?"));
