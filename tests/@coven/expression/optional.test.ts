import { optional } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("a number 13 add a ? to the right", () =>
	assertStrictEquals(optional(13), "13?"));
