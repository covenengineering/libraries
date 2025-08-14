import { characterClass } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("Number 13 adds a [] around it", () =>
	assertStrictEquals(characterClass(13), "[13]"));

Deno.test("10 and a 13 adds a [] around them", () =>
	assertStrictEquals(characterClass(10, 13), "[1013]"));
