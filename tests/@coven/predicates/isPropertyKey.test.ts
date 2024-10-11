import { isPropertyKey } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

Deno.test("Promise", () =>
	assert(
		// Number
		isPropertyKey(13) &&
			isPropertyKey(Infinity) &&
			isPropertyKey(NaN) &&
			// String
			isPropertyKey("string") &&
			isPropertyKey(`string`) &&
			// Symbol
			isPropertyKey(Symbol("description")) &&
			isPropertyKey(Symbol()) &&
			isPropertyKey(Symbol.iterator),
	));

Deno.test("Other types", () =>
	assertFalse(
		// Array
		isPropertyKey([]) ||
			// AsyncIterator
			isPropertyKey((async function* (): AsyncGenerator {})()) ||
			// BigInt
			isPropertyKey(BigInt(13)) ||
			isPropertyKey(BigInt("13")) ||
			isPropertyKey(13n) ||
			// Boolean
			// deno-lint-ignore no-boolean-literal-for-arguments
			isPropertyKey(true) ||
			// deno-lint-ignore no-boolean-literal-for-arguments
			isPropertyKey(false) ||
			// Date
			isPropertyKey(new Date()) ||
			// Function
			isPropertyKey(() => undefined) ||
			isPropertyKey(async () => await undefined) ||
			isPropertyKey(function (): void {}) ||
			isPropertyKey(async function (): Promise<void> {}) ||
			isPropertyKey(function* (): Generator {}) ||
			isPropertyKey(async function* (): AsyncGenerator {}) ||
			// Iterator
			isPropertyKey((function* (): Generator {})()) ||
			// Null
			isPropertyKey(null) ||
			// Object
			isPropertyKey({}) ||
			isPropertyKey(Object.create(null)) ||
			// Promise
			isPropertyKey(Promise.resolve()) ||
			// RegExp
			isPropertyKey(/expression/u) ||
			isPropertyKey(new RegExp("expression", "u")) ||
			// Undefined
			isPropertyKey(undefined),
	));
