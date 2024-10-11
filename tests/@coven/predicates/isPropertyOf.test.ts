import { isPropertyOf } from "@coven/predicates";
import type { ReadonlyRecord } from "@coven/types";
import { assert, assertFalse } from "@std/assert";

const symbol = Symbol("symbol");
const string = "string";
const number = 1;
const object = {
	[number]: number,
	[string]: string,
	[symbol]: symbol,
} as ReadonlyRecord;
const isPropertyOfObject = isPropertyOf(object);
const missingSymbol = Symbol("missingSymbol");
const missingString = "missingString";
const missingNumber = 2;

Deno.test("Symbol that exist in the given object", () =>
	assert(isPropertyOfObject(symbol)));

Deno.test("String that exist in the given object", () =>
	assert(isPropertyOfObject(string)));

Deno.test("Number that exist in the given object", () =>
	assert(isPropertyOfObject(number)));

Deno.test("Symbol that doesn't exist in the given object", () =>
	assertFalse(isPropertyOfObject(missingSymbol)));

Deno.test("String that doesn't exist in the given object", () =>
	assertFalse(isPropertyOfObject(missingString)));

Deno.test("Number that doesn't exist in the given object", () =>
	assertFalse(isPropertyOfObject(missingNumber)));

Deno.test("String property on an empty object", () =>
	assertFalse(isPropertyOf({} as ReadonlyRecord)(string)));
