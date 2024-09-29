import { isNullish } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

Deno.test("Nullish", () => assert(isNullish(null) && isNullish(undefined)));

Deno.test("Other types", () =>
	assertFalse(
		// Array
		isNullish([]) ||
			// AsyncIterator
			isNullish((async function* (): AsyncGenerator {})()) ||
			// BigInt
			isNullish(BigInt(13)) || isNullish(BigInt("13")) ||
			isNullish(13n) ||
			// Boolean
			// deno-lint-ignore no-boolean-literal-for-arguments
			isNullish(true) || isNullish(false) ||
			// Date
			isNullish(new Date()) ||
			// Function
			isNullish(() => undefined) ||
			isNullish(async () => await undefined) ||
			isNullish(function (): void {}) ||
			isNullish(async function (): Promise<void> {}) ||
			isNullish(function* (): Generator {}) ||
			isNullish(async function* (): AsyncGenerator {}) ||
			// Iterator
			isNullish((function* (): Generator {})()) ||
			// Number
			isNullish(13) || isNullish(Infinity) || isNullish(NaN) ||
			// Object
			isNullish({}) || isNullish(Object.create(null)) ||
			// Promise
			isNullish(Promise.resolve()) ||
			// RegExp
			isNullish(/expression/u) ||
			isNullish(new RegExp("expression", "u")) ||
			// String
			isNullish("string") || isNullish(`string`) ||
			// Symbol
			isNullish(Symbol("description")) || isNullish(Symbol()) ||
			isNullish(Symbol.iterator),
	));