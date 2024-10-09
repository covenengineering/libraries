import { includes, toIterable } from "@coven/iterables/async";
import { assertEquals } from "@std/assert";

const includesFoo = includes("foo");

Deno.test(
	"String and array of strings containing that string returns true",
	// deno-lint-ignore no-boolean-literal-for-arguments
	async () => assertEquals(await includesFoo(["foo", "bar"]), true),
);

Deno.test(
	"String and array not containing that string returns false",
	// deno-lint-ignore no-boolean-literal-for-arguments
	async () => assertEquals(await includesFoo(["baz", "bar"]), false),
);

Deno.test(
	"String and iterable of strings containing that string returns true",
	async () =>
		// deno-lint-ignore no-boolean-literal-for-arguments
		assertEquals(await includesFoo(toIterable(["foo", "bar"])), true),
);

Deno.test(
	"String and iterable not containing that string returns false",
	async () =>
		// deno-lint-ignore no-boolean-literal-for-arguments
		assertEquals(await includesFoo(toIterable(["baz", "bar"])), false),
);
