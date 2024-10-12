import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { has } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

const witch = "🧙🏻‍♀️";
const witchSymbol = Symbol(witch);
const number = 1;

const objectWithString = { [witch]: witch };
const objectWithSymbol = { [witchSymbol]: witchSymbol };
const objectWithNumber = { [number]: number };
const arrayWith2Items = [witch, witch];
const arrayWith1Item = [witch];
const emptyObject = EMPTY_OBJECT;
const emptyArray = EMPTY_ARRAY;

Deno.test("Object with string key when looking for a string key", () =>
	assert(has(witch)(objectWithString)));

Deno.test("Object with symbol key when looking for a symbol key", () =>
	assert(has(witchSymbol)(objectWithSymbol)));

Deno.test("Object with number key when looking for a number key", () =>
	assert(has(number)(objectWithNumber)));

Deno.test("Array with number key when looking for a number key", () =>
	assert(has(number)(arrayWith2Items)));

Deno.test("Array without number key when looking for a number key", () =>
	assertFalse(has(number)(arrayWith1Item)));

Deno.test("Empty array looking for a number key", () =>
	assertFalse(has(number)(emptyArray)));

Deno.test("Empty object when looking for a string key", () =>
	assertFalse(has(witch)(emptyObject)));

Deno.test("Empty object when looking for a symbol key", () =>
	assertFalse(has(witchSymbol)(emptyObject)));

Deno.test("Empty object when looking for a number key", () =>
	assertFalse(has(number)(emptyObject)));

Deno.test("Object with symbol key when looking for a string key", () =>
	assertFalse(has(witch)(objectWithSymbol)));

Deno.test("Object with number key when looking for a symbol key", () =>
	assertFalse(has(witchSymbol)(objectWithNumber)));

Deno.test("Object with string key when looking for a number key", () =>
	assertFalse(has(number)(objectWithString)));
