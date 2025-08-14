import { includes } from "@coven/iterables";
import { assert, assertFalse } from "@std/assert";

const includesFoo = includes("foo");

Deno.test(
	"String and an array of strings containing that string returns true",
	() => assert(includesFoo(["foo", "bar"])),
);

Deno.test("String and an array not containing that string returns false", () =>
	assertFalse(includesFoo(["baz", "bar"])));

Deno.test(
	"String and an iterable of strings containing that string returns true",
	() => assert(includesFoo(Iterator.from(["foo", "bar"]))),
);

Deno.test(
	"String and an iterable not containing that string returns false",
	() => assertFalse(includesFoo(Iterator.from(["baz", "bar"]))),
);
