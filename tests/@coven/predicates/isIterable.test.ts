import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { isIterable } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

Deno.test("Iterables", () =>
	assert(
		// Array
		isIterable(EMPTY_ARRAY) &&
			isIterable((function* (): Generator {})()) &&
			// String
			isIterable("string") &&
			isIterable(`string`),
	));

Deno.test("Other types", () =>
	assertFalse(
		// AsyncGenerator
		isIterable((async function* (): AsyncGenerator {})()) ||
			// BigInt
			isIterable(BigInt(13)) ||
			isIterable(BigInt("13")) ||
			isIterable(13n) ||
			// Boolean
			// deno-lint-ignore no-boolean-literal-for-arguments
			isIterable(true) ||
			// deno-lint-ignore no-boolean-literal-for-arguments
			isIterable(false) ||
			// Date
			isIterable(new Date()) ||
			// Function
			isIterable(() => undefined) ||
			isIterable(async () => await undefined) ||
			isIterable(function (): void {}) ||
			isIterable(async function (): Promise<void> {}) ||
			isIterable(function* (): Generator {}) ||
			isIterable(async function* (): AsyncGenerator {}) ||
			// Null
			isIterable(null) ||
			// Number
			isIterable(13) ||
			isIterable(Infinity) ||
			isIterable(NaN) ||
			// Object
			isIterable(EMPTY_OBJECT) ||
			// Promise
			isIterable(Promise.resolve()) ||
			// RegExp
			isIterable(/expression/u) ||
			isIterable(new RegExp("expression", "u")) ||
			// Symbol
			isIterable(Symbol("description")) ||
			isIterable(Symbol()) ||
			isIterable(Symbol.iterator) ||
			// Undefined
			isIterable(undefined),
	));
