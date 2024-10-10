import { or } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test(
	"a number 13 return the same number because no other values where provided",
	() => assertStrictEquals(or(13), "13"),
);

Deno.test("a number 1, and a 3 join them with a | in between", () =>
	assertStrictEquals(or(1, 3), "1|3"),
);
