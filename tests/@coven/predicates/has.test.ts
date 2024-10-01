import { has } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

const string = "foo";
const symbol = Symbol(string);
const number = 1;

const objectWithString = { [string]: string };
const objectWithSymbol = { [symbol]: symbol };
const objectWithNumber = { [number]: number };
const arrayWith2Items = [string, string];
const arrayWith1Item = [string];
const emptyObject = {};
const emptyArray = [] as const;

Deno.test("Object with string key when looking for a string key", () =>
	assert(has(string)(objectWithString)),
);

Deno.test("Object with symbol key when looking for a symbol key", () =>
	assert(has(symbol)(objectWithSymbol)),
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
	assertFalse(has(string)(emptyObject)),
);

Deno.test("Empty object when looking for a symbol key", () =>
	assertFalse(has(symbol)(emptyObject)),
);

Deno.test("Empty object when looking for a number key", () =>
	assertFalse(has(number)(emptyObject)),
);

Deno.test("Object with symbol key when looking for a string key", () =>
	assertFalse(has(string)(objectWithSymbol)),
);

Deno.test("Object with number key when looking for a symbol key", () =>
	assertFalse(has(symbol)(objectWithNumber)),
);

Deno.test("Object with string key when looking for a number key", () =>
	assertFalse(has(number)(objectWithString)),
);
