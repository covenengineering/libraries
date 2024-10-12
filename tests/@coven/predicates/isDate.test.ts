import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { isDate } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

Deno.test("Date", () => assert(isDate(new Date())));

Deno.test("Other types", () =>
	assertFalse(
		// Array
		isDate(EMPTY_ARRAY) ||
			// AsyncIterator
			isDate((async function* (): AsyncGenerator {})()) ||
			// BigInt
			isDate(BigInt(13)) ||
			isDate(BigInt("13")) ||
			isDate(13n) ||
			// Boolean
			// deno-lint-ignore no-boolean-literal-for-arguments
			isDate(true) ||
			// deno-lint-ignore no-boolean-literal-for-arguments
			isDate(false) ||
			// Function
			isDate(() => undefined) ||
			isDate(async () => await undefined) ||
			isDate(function (): void {}) ||
			isDate(async function (): Promise<void> {}) ||
			isDate(function* (): Generator {}) ||
			isDate(async function* (): AsyncGenerator {}) ||
			// Iterator
			isDate((function* (): Generator {})()) ||
			// Null
			isDate(null) ||
			// Number
			isDate(13) ||
			isDate(Infinity) ||
			isDate(NaN) ||
			// Object
			isDate(EMPTY_OBJECT) ||
			isDate(Object.create(null)) ||
			// Promise
			isDate(Promise.resolve()) ||
			// RegExp
			isDate(/expression/u) ||
			isDate(new RegExp("expression", "u")) ||
			// String
			isDate("string") ||
			isDate(`string`) ||
			// Symbol
			isDate(Symbol("description")) ||
			isDate(Symbol()) ||
			isDate(Symbol.iterator) ||
			// Undefined
			isDate(undefined),
	));
