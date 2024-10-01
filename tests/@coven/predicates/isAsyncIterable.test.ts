import { isAsyncIterable } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

Deno.test("AsyncGenerator", () =>
	assert(isAsyncIterable((async function* (): AsyncGenerator {})())),
);

Deno.test("Other types", () =>
	assertFalse(
		// Array
		isAsyncIterable([]) ||
			// BigInt
			isAsyncIterable(BigInt(13)) ||
			isAsyncIterable(BigInt("13")) ||
			isAsyncIterable(13n) ||
			// Boolean
			// deno-lint-ignore no-boolean-literal-for-arguments
			isAsyncIterable(true) ||
			isAsyncIterable(false) ||
			// Date
			isAsyncIterable(new Date()) ||
			// Function
			isAsyncIterable(() => undefined) ||
			isAsyncIterable(async () => await undefined) ||
			isAsyncIterable(function (): void {}) ||
			isAsyncIterable(async function (): Promise<void> {}) ||
			isAsyncIterable(function* (): Generator {}) ||
			isAsyncIterable(async function* (): AsyncGenerator {}) ||
			// Iterator
			isAsyncIterable((function* (): Generator {})()) ||
			// Null
			isAsyncIterable(null) ||
			// Number
			isAsyncIterable(13) ||
			isAsyncIterable(Infinity) ||
			isAsyncIterable(NaN) ||
			// Object
			isAsyncIterable({}) ||
			isAsyncIterable(Object.create(null)) ||
			// Promise
			isAsyncIterable(Promise.resolve()) ||
			// RegExp
			isAsyncIterable(/expression/u) ||
			isAsyncIterable(new RegExp("expression", "u")) ||
			// String
			isAsyncIterable("string") ||
			isAsyncIterable(`string`) ||
			// Symbol
			isAsyncIterable(Symbol("description")) ||
			isAsyncIterable(Symbol()) ||
			isAsyncIterable(Symbol.iterator) ||
			// Undefined
			isAsyncIterable(undefined),
	),
);
