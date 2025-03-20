import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { isBoolean } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

Deno.test("Booleans", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assert(isBoolean(true) && isBoolean(false)),
);

Deno.test("Other types", () =>
	assertFalse(
		// Array
		isBoolean(EMPTY_ARRAY) ||
			// AsyncIterator
			isBoolean((async function* (): AsyncGenerator {})()) ||
			// BigInt
			isBoolean(BigInt(13)) ||
			isBoolean(BigInt("13")) ||
			isBoolean(13n) ||
			// Date
			isBoolean(new Date()) ||
			// Function
			isBoolean(() => undefined) ||
			isBoolean(async () => await undefined) ||
			isBoolean(function (): void {}) ||
			isBoolean(async function (): Promise<void> {}) ||
			isBoolean(function* (): Generator {}) ||
			isBoolean(async function* (): AsyncGenerator {}) ||
			// Iterator
			isBoolean((function* (): Generator {})()) ||
			// Null
			isBoolean(null) ||
			// Number
			isBoolean(13) ||
			isBoolean(Infinity) ||
			isBoolean(NaN) ||
			// Object
			isBoolean(EMPTY_OBJECT) ||
			// Promise
			isBoolean(Promise.resolve()) ||
			// RegExp
			isBoolean(/expression/u) ||
			isBoolean(new RegExp("expression", "u")) ||
			// String
			isBoolean("string") ||
			isBoolean(`string`) ||
			// Symbol
			isBoolean(Symbol("description")) ||
			isBoolean(Symbol()) ||
			isBoolean(Symbol.iterator) ||
			// Undefined
			isBoolean(undefined),
	),
);
