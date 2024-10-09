import { includes } from "@coven/iterables";
import { assertEquals } from "@std/assert";
import { iterateArray } from "./utils.ts";

const includesFoo = includes("foo");

Deno.test(
	"a string and an array of strings containing that string returns true",
	// deno-lint-ignore no-boolean-literal-for-arguments
	() => assertEquals(includesFoo(["foo", "bar"]), true),
);

Deno.test(
	"a string and an array not containing that string returns false",
	// deno-lint-ignore no-boolean-literal-for-arguments
	() => assertEquals(includesFoo(["baz", "bar"]), false),
);

Deno.test(
	"a string and an iterable of strings containing that string returns true",
	// deno-lint-ignore no-boolean-literal-for-arguments
	() => assertEquals(includesFoo(iterateArray(["foo", "bar"])), true),
);

Deno.test(
	"a string and an iterable not containing that string returns false",
	// deno-lint-ignore no-boolean-literal-for-arguments
	() => assertEquals(includesFoo(iterateArray(["baz", "bar"])), false),
);
