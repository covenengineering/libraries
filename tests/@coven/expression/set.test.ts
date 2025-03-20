import { set } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("Number 13 adds a [] around it", () =>
	assertStrictEquals(set(13), "[13]"),
);

Deno.test("10 and a 13 adds a [] around them", () =>
	assertStrictEquals(set(10, 13), "[1013]"),
);
