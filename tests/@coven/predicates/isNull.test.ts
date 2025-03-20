import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { isNull } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

Deno.test("Null", () => assert(isNull(null)));

Deno.test("Other types", () =>
	assertFalse(
		// Array
		isNull(EMPTY_ARRAY) ||
			// AsyncIterator
			isNull((async function* (): AsyncGenerator {})()) ||
			// BigInt
			isNull(BigInt(13)) ||
			isNull(BigInt("13")) ||
			isNull(13n) ||
			// Boolean
			// deno-lint-ignore no-boolean-literal-for-arguments
			isNull(true) ||
			// deno-lint-ignore no-boolean-literal-for-arguments
			isNull(false) ||
			// Date
			isNull(new Date()) ||
			// Function
			isNull(() => undefined) ||
			isNull(async () => await undefined) ||
			isNull(function (): void {}) ||
			isNull(async function (): Promise<void> {}) ||
			isNull(function* (): Generator {}) ||
			isNull(async function* (): AsyncGenerator {}) ||
			// Iterator
			isNull((function* (): Generator {})()) ||
			// Number
			isNull(13) ||
			isNull(Infinity) ||
			isNull(NaN) ||
			// Object
			isNull(EMPTY_OBJECT) ||
			// Promise
			isNull(Promise.resolve()) ||
			// RegExp
			isNull(/expression/u) ||
			isNull(new RegExp("expression", "u")) ||
			// String
			isNull("string") ||
			isNull(`string`) ||
			// Symbol
			isNull(Symbol("description")) ||
			isNull(Symbol()) ||
			isNull(Symbol.iterator) ||
			// Undefined
			isNull(undefined),
	),
);
