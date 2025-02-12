import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { isUndefined } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

Deno.test("Undefined", () => assert(isUndefined(undefined)));

Deno.test("Other types", () =>
	assertFalse(
		// Array
		isUndefined(EMPTY_ARRAY) ||
			// AsyncIterator
			isUndefined((async function* (): AsyncGenerator {})()) ||
			// BigInt
			isUndefined(BigInt(13)) ||
			isUndefined(BigInt("13")) ||
			isUndefined(13n) ||
			// Boolean
			// deno-lint-ignore no-boolean-literal-for-arguments
			isUndefined(true) ||
			// deno-lint-ignore no-boolean-literal-for-arguments
			isUndefined(false) ||
			// Date
			isUndefined(new Date()) ||
			// Function
			isUndefined(() => undefined) ||
			isUndefined(async () => await undefined) ||
			isUndefined(function (): void {}) ||
			isUndefined(async function (): Promise<void> {}) ||
			isUndefined(function* (): Generator {}) ||
			isUndefined(async function* (): AsyncGenerator {}) ||
			// Iterator
			isUndefined((function* (): Generator {})()) ||
			// Null
			isUndefined(null) ||
			// Number
			isUndefined(13) ||
			isUndefined(Infinity) ||
			isUndefined(NaN) ||
			// Object
			isUndefined(EMPTY_OBJECT) ||
			// Promise
			isUndefined(Promise.resolve()) ||
			// RegExp
			isUndefined(/expression/u) ||
			isUndefined(new RegExp("expression", "u")) ||
			// String
			isUndefined("string") ||
			isUndefined(`string`) ||
			// Symbol
			isUndefined(Symbol("description")) ||
			isUndefined(Symbol()) ||
			isUndefined(Symbol.iterator),
	));
