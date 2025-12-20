import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { has } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

const magic = "✨";
const magicSymbol = Symbol(magic);
const number = 1;

const objectWithString = { [magic]: magic };
const objectWithSymbol = { [magicSymbol]: magicSymbol };
const objectWithNumber = { [number]: number };
const arrayWith2Items = [magic, magic];
const arrayWith1Item = [magic];
const emptyObject = EMPTY_OBJECT;
const emptyArray = EMPTY_ARRAY;

Deno.test("Object with string key when looking for a string key", () =>
	assert(has(magic)(objectWithString)),
);

Deno.test("Object with symbol key when looking for a symbol key", () =>
	assert(has(magicSymbol)(objectWithSymbol)),
);

Deno.test("Object with number key when looking for a number key", () =>
	assert(has(number)(objectWithNumber)),
);

Deno.test("Array with number key when looking for a number key", () =>
	assert(has(number)(arrayWith2Items)),
);

Deno.test("Array without number key when looking for a number key", () =>
	assertFalse(has(number)(arrayWith1Item)),
);

Deno.test("Empty array looking for a number key", () =>
	assertFalse(has(number)(emptyArray)),
);

Deno.test("Empty object when looking for a string key", () =>
	assertFalse(has(magic)(emptyObject)),
);

Deno.test("Empty object when looking for a symbol key", () =>
	assertFalse(has(magicSymbol)(emptyObject)),
);

Deno.test("Empty object when looking for a number key", () =>
	assertFalse(has(number)(emptyObject)),
);

Deno.test("Object with symbol key when looking for a string key", () =>
	assertFalse(has(magic)(objectWithSymbol)),
);

Deno.test("Object with number key when looking for a symbol key", () =>
	assertFalse(has(magicSymbol)(objectWithNumber)),
);

Deno.test("Object with string key when looking for a number key", () =>
	assertFalse(has(number)(objectWithString)),
);
