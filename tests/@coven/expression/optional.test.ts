import { optional } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("Number 13 adds a ? to the right", () =>
	assertStrictEquals(optional(13), "13?"));
