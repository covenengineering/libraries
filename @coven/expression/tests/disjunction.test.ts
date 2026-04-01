import { assertStrictEquals } from "@std/assert";
import { disjunction } from "../disjunction.ts";

Deno.test(
	"Number 13 return the same number because no other values where provided",
	() => assertStrictEquals(disjunction(13), "13"),
);

Deno.test("Number 1, and a 3 are joined with a | in between", () =>
	assertStrictEquals(disjunction(1, 3), "1|3"),
);
