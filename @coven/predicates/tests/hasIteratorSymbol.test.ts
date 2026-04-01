import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { assert, assertFalse } from "@std/assert";
import { hasIteratorSymbol } from "../hasIteratorSymbol.ts";

const objectWithIteratorSymbol = { [Symbol.iterator]: () => void 0 };

Deno.test("Object with an iterator symbol", () =>
	assert(hasIteratorSymbol(objectWithIteratorSymbol)),
);

Deno.test("Object without an iterator symbol", () =>
	assertFalse(hasIteratorSymbol(EMPTY_OBJECT)),
);

Deno.test("Array", () => assert(hasIteratorSymbol(EMPTY_ARRAY)));
