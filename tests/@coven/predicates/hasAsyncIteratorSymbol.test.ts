import { hasAsyncIteratorSymbol } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

const objectWithAsyncIteratorSymbol = { [Symbol.asyncIterator]: () => void 0 };
const objectWithoutAsyncIteratorSymbol = {};
const array = [] as ReadonlyArray<unknown>;

Deno.test("Object with an async iterator symbol", () =>
	assert(hasAsyncIteratorSymbol(objectWithAsyncIteratorSymbol)),
);

Deno.test("Object without an async iterator symbol", () =>
	assertFalse(hasAsyncIteratorSymbol(objectWithoutAsyncIteratorSymbol)),
);

Deno.test("Array", () => assertFalse(hasAsyncIteratorSymbol(array)));
