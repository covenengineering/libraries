import { isPromise } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

Deno.test("Promise", () => assert(isPromise(Promise.resolve())));

Deno.test("Other types", () =>
	assertFalse(
		// Array
		isPromise([]) ||
			// AsyncIterator
			isPromise((async function* (): AsyncGenerator {})()) ||
			// BigInt
			isPromise(BigInt(13)) || isPromise(BigInt("13")) ||
			isPromise(13n) ||
			// Boolean
			// deno-lint-ignore no-boolean-literal-for-arguments
			isPromise(true) || isPromise(false) ||
			// Date
			isPromise(new Date()) ||
			// Function
			isPromise(() => undefined) ||
			isPromise(async () => await undefined) ||
			isPromise(function (): void {}) ||
			isPromise(async function (): Promise<void> {}) ||
			isPromise(function* (): Generator {}) ||
			isPromise(async function* (): AsyncGenerator {}) ||
			// Iterator
			isPromise((function* (): Generator {})()) ||
			// Null
			isPromise(null) ||
			// Number
			isPromise(13) || isPromise(Infinity) || isPromise(NaN) ||
			// Object
			isPromise({}) || isPromise(Object.create(null)) ||
			// RegExp
			isPromise(/expression/u) ||
			isPromise(new RegExp("expression", "u")) ||
			// String
			isPromise("string") || isPromise(`string`) ||
			// Symbol
			isPromise(Symbol("description")) || isPromise(Symbol()) ||
			isPromise(Symbol.iterator) ||
			// Undefined
			isPromise(undefined),
	));
