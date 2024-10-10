import { set } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("a number 13 add a [] around it", () =>
	assertStrictEquals(set(13), "[13]"),
);

Deno.test("a 10 and a 13 add a [] around them", () =>
	assertStrictEquals(set(10, 13), "[1013]"),
);
