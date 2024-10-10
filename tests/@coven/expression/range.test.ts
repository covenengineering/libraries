import { range } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("a 10 and a 13 add a - between them", () =>
	assertStrictEquals(range(10)(13), "10-13"),
);
