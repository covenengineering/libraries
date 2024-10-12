import { range } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("10 and a 13 adds a - between them", () =>
	assertStrictEquals(range(10)(13), "10-13"));
