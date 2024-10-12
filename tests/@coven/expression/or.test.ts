import { or } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test(
	"Number 13 return the same number because no other values where provided",
	() => assertStrictEquals(or(13), "13"),
);

Deno.test("Number 1, and a 3 are joined with a | in between", () =>
	assertStrictEquals(or(1, 3), "1|3"));
