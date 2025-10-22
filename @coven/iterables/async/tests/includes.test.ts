import { includes, toIterable } from "@coven/iterables/async";
import { assert, assertFalse } from "@std/assert";

const includesFoo = includes("foo");

Deno.test(
	"String and array of strings containing that string returns true",
	async () => assert(await includesFoo(["foo", "bar"])),
);

Deno.test(
	"String and array not containing that string returns false",
	async () => assertFalse(await includesFoo(["baz", "bar"])),
);

Deno.test(
	"String and iterable of strings containing that string returns true",
	async () => assert(await includesFoo(toIterable(["foo", "bar"]))),
);

Deno.test(
	"String and iterable not containing that string returns false",
	async () => assertFalse(await includesFoo(toIterable(["baz", "bar"]))),
);
