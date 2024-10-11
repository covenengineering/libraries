import { isTruthy } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

Deno.test("Truthy", () =>
	assert(
		// Array
		isTruthy([]) &&
			// AsyncIterator
			isTruthy((async function* (): AsyncGenerator {})()) &&
			// BigInt
			isTruthy(BigInt(13)) &&
			isTruthy(BigInt("13")) &&
			isTruthy(13n) &&
			// Boolean
			// deno-lint-ignore no-boolean-literal-for-arguments
			isTruthy(true) &&
			// Date
			isTruthy(new Date()) &&
			// Function
			isTruthy(() => undefined) &&
			isTruthy(async () => await undefined) &&
			isTruthy(function (): void {}) &&
			isTruthy(async function (): Promise<void> {}) &&
			isTruthy(function* (): Generator {}) &&
			isTruthy(async function* (): AsyncGenerator {}) &&
			// Iterator
			isTruthy((function* (): Generator {})()) &&
			// Number
			isTruthy(13) &&
			isTruthy(Infinity) &&
			// Object
			isTruthy({}) &&
			isTruthy(Object.create(null)) &&
			// Promise
			isTruthy(Promise.resolve()) &&
			// RegExp
			isTruthy(/expression/u) &&
			isTruthy(new RegExp("expression", "u")) &&
			// String
			isTruthy("string") &&
			isTruthy(`string`) &&
			// Symbol
			isTruthy(Symbol("description")) &&
			isTruthy(Symbol()) &&
			isTruthy(Symbol.iterator),
	));

Deno.test("Falsies", () =>
	assertFalse(
		// Bigint
		isTruthy(BigInt(0)) ||
			isTruthy(BigInt("0")) ||
			isTruthy(0n) ||
			// Boolean
			// deno-lint-ignore no-boolean-literal-for-arguments
			isTruthy(false) ||
			// Nullish
			isTruthy(null) ||
			isTruthy(undefined) ||
			// Number
			isTruthy(0) ||
			isTruthy(-0) ||
			isTruthy(+0) ||
			isTruthy(NaN) ||
			// String
			isTruthy("") ||
			isTruthy(``),
	));
