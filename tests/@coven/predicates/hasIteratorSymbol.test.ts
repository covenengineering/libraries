import { hasIteratorSymbol } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

const objectWithIteratorSymbol = { [Symbol.iterator]: () => void 0 };
const objectWithoutIteratorSymbol = {};
const array = [] as ReadonlyArray<unknown>;

Deno.test("Object with an iterator symbol", () =>
	assert(hasIteratorSymbol(objectWithIteratorSymbol)),
);

Deno.test("Object without an iterator symbol", () =>
	assertFalse(hasIteratorSymbol(objectWithoutIteratorSymbol)),
);

Deno.test("Array", () => assert(hasIteratorSymbol(array)));
