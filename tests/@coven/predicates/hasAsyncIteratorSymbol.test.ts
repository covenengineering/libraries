import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { hasAsyncIteratorSymbol } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

const objectWithAsyncIteratorSymbol = { [Symbol.asyncIterator]: () => void 0 };

Deno.test("Object with an async iterator symbol", () =>
	assert(hasAsyncIteratorSymbol(objectWithAsyncIteratorSymbol)));

Deno.test("Object without an async iterator symbol", () =>
	assertFalse(hasAsyncIteratorSymbol(EMPTY_OBJECT)));

Deno.test("Array", () => assertFalse(hasAsyncIteratorSymbol(EMPTY_ARRAY)));
