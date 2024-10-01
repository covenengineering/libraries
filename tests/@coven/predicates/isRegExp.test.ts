import { isRegExp } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

Deno.test("Regular expressions", () =>
	assert(isRegExp(/expression/u) && isRegExp(new RegExp("expression", "u"))),
);

Deno.test("Other types", () =>
	assertFalse(
		// Array
		isRegExp([]) ||
			// AsyncIterator
			isRegExp((async function* (): AsyncGenerator {})()) ||
			// BigInt
			isRegExp(BigInt(13)) ||
			isRegExp(BigInt("13")) ||
			isRegExp(13n) ||
			// Boolean
			// deno-lint-ignore no-boolean-literal-for-arguments
			isRegExp(true) ||
			// deno-lint-ignore no-boolean-literal-for-arguments
			isRegExp(false) ||
			// Date
			isRegExp(new Date()) ||
			// Function
			isRegExp(() => undefined) ||
			isRegExp(async () => await undefined) ||
			isRegExp(function (): void {}) ||
			isRegExp(async function (): Promise<void> {}) ||
			isRegExp(function* (): Generator {}) ||
			isRegExp(async function* (): AsyncGenerator {}) ||
			// Iterator
			isRegExp((function* (): Generator {})()) ||
			// Null
			isRegExp(null) ||
			// Number
			isRegExp(13) ||
			isRegExp(Infinity) ||
			isRegExp(NaN) ||
			// Object
			isRegExp({}) ||
			isRegExp(Object.create(null)) ||
			// Promise
			isRegExp(Promise.resolve()) ||
			// String
			isRegExp("string") ||
			isRegExp(`string`) ||
			// Symbol
			isRegExp(Symbol("description")) ||
			isRegExp(Symbol()) ||
			isRegExp(Symbol.iterator) ||
			// Undefined
			isRegExp(undefined),
	),
);
