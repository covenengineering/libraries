import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { isBigInt } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

Deno.test("BigInts", () =>
	assert(isBigInt(BigInt(13)) && isBigInt(BigInt("13")) && isBigInt(13n)));

Deno.test("Other types", () =>
	assertFalse(
		// Array
		isBigInt(EMPTY_ARRAY) ||
			// AsyncIterator
			isBigInt((async function* (): AsyncGenerator {})()) ||
			// Boolean
			// deno-lint-ignore no-boolean-literal-for-arguments
			isBigInt(true) ||
			// deno-lint-ignore no-boolean-literal-for-arguments
			isBigInt(false) ||
			// Date
			isBigInt(new Date()) ||
			// Function
			isBigInt(() => undefined) ||
			isBigInt(async () => await undefined) ||
			isBigInt(function (): void {}) ||
			isBigInt(async function (): Promise<void> {}) ||
			isBigInt(function* (): Generator {}) ||
			isBigInt(async function* (): AsyncGenerator {}) ||
			// Iterator
			isBigInt((function* (): Generator {})()) ||
			// Null
			isBigInt(null) ||
			// Number
			isBigInt(13) ||
			isBigInt(Infinity) ||
			isBigInt(NaN) ||
			// Object
			isBigInt(EMPTY_OBJECT) ||
			// Promise
			isBigInt(Promise.resolve()) ||
			// RegExp
			isBigInt(/expression/u) ||
			isBigInt(new RegExp("expression", "u")) ||
			// String
			isBigInt("string") ||
			isBigInt(`string`) ||
			// Symbol
			isBigInt(Symbol("description")) ||
			isBigInt(Symbol()) ||
			isBigInt(Symbol.iterator) ||
			// Undefined
			isBigInt(undefined),
	));
