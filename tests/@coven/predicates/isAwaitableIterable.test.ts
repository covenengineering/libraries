import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { isAwaitableIterable } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

Deno.test("Awaitable iterables", () =>
	assert(
		// Array
		isAwaitableIterable(EMPTY_ARRAY) &&
			// Generators
			isAwaitableIterable((async function* (): AsyncGenerator {})()) &&
			isAwaitableIterable((function* (): Generator {})()) &&
			// String
			isAwaitableIterable("string") &&
			isAwaitableIterable(`string`),
	));

Deno.test("Other types", () =>
	assertFalse(
		// BigInt
		isAwaitableIterable(BigInt(13)) ||
			isAwaitableIterable(BigInt("13")) ||
			isAwaitableIterable(13n) ||
			// Boolean
			// deno-lint-ignore no-boolean-literal-for-arguments
			isAwaitableIterable(true) ||
			// deno-lint-ignore no-boolean-literal-for-arguments
			isAwaitableIterable(false) ||
			// Date
			isAwaitableIterable(new Date()) ||
			// Function
			isAwaitableIterable(() => undefined) ||
			isAwaitableIterable(async () => await undefined) ||
			isAwaitableIterable(function (): void {}) ||
			isAwaitableIterable(async function (): Promise<void> {}) ||
			isAwaitableIterable(function* (): Generator {}) ||
			isAwaitableIterable(async function* (): AsyncGenerator {}) ||
			// Null
			isAwaitableIterable(null) ||
			// Number
			isAwaitableIterable(13) ||
			isAwaitableIterable(Infinity) ||
			isAwaitableIterable(NaN) ||
			// Object
			isAwaitableIterable(EMPTY_OBJECT) ||
			isAwaitableIterable(Object.create(null)) ||
			// Promise
			isAwaitableIterable(Promise.resolve()) ||
			// RegExp
			isAwaitableIterable(/expression/u) ||
			isAwaitableIterable(new RegExp("expression", "u")) ||
			// Symbol
			isAwaitableIterable(Symbol("description")) ||
			isAwaitableIterable(Symbol()) ||
			isAwaitableIterable(Symbol.iterator) ||
			// Undefined
			isAwaitableIterable(undefined),
	));
