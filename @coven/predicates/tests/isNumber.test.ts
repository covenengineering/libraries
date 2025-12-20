import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { isNumber } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

Deno.test("Numbers", () =>
	assert(isNumber(13) && isNumber(Infinity) && isNumber(NaN)),
);

Deno.test("Other types", () =>
	assertFalse(
		// Array
		isNumber(EMPTY_ARRAY)
			// AsyncIterator
			|| isNumber((async function* (): AsyncGenerator {})())
			// BigInt
			|| isNumber(BigInt(13))
			|| isNumber(BigInt("13"))
			|| isNumber(13n)
			// Boolean
			// deno-lint-ignore no-boolean-literal-for-arguments
			|| isNumber(true)
			// deno-lint-ignore no-boolean-literal-for-arguments
			|| isNumber(false)
			// Date
			|| isNumber(new Date())
			// Function
			|| isNumber(() => undefined)
			|| isNumber(async () => await undefined)
			|| isNumber(function (): void {})
			|| isNumber(async function (): Promise<void> {})
			|| isNumber(function* (): Generator {})
			|| isNumber(async function* (): AsyncGenerator {})
			// Iterator
			|| isNumber((function* (): Generator {})())
			// Null
			// deno-lint-ignore coven/no-null
			|| isNumber(null)
			// Object
			|| isNumber(EMPTY_OBJECT)
			// Promise
			|| isNumber(Promise.resolve())
			// RegExp
			|| isNumber(/expression/u)
			|| isNumber(new RegExp("expression", "u"))
			// String
			|| isNumber("string")
			|| isNumber(`string`)
			// Symbol
			|| isNumber(Symbol("description"))
			|| isNumber(Symbol())
			|| isNumber(Symbol.iterator)
			// Undefined
			|| isNumber(undefined),
	),
);
