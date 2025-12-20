import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { isArray } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

Deno.test("Array", () => assert(isArray(EMPTY_ARRAY)));

Deno.test("Other types", () =>
	assertFalse(
		// AsyncIterator
		isArray((async function* (): AsyncGenerator {})())
			// BigInt
			|| isArray(BigInt(13))
			|| isArray(BigInt("13"))
			|| isArray(13n)
			// Boolean
			// deno-lint-ignore no-boolean-literal-for-arguments
			|| isArray(true)
			// deno-lint-ignore no-boolean-literal-for-arguments
			|| isArray(false)
			// Date
			|| isArray(new Date())
			// Function
			|| isArray(() => undefined)
			|| isArray(async () => await undefined)
			|| isArray(function (): void {})
			|| isArray(async function (): Promise<void> {})
			|| isArray(function* (): Generator {})
			|| isArray(async function* (): AsyncGenerator {})
			// Iterator
			|| isArray((function* (): Generator {})())
			// Null
			// deno-lint-ignore coven/no-null
			|| isArray(null)
			// Number
			|| isArray(13)
			|| isArray(Infinity)
			|| isArray(NaN)
			// Object
			|| isArray(EMPTY_OBJECT)
			// Promise
			|| isArray(Promise.resolve())
			// RegExp
			|| isArray(/expression/u)
			|| isArray(new RegExp("expression", "u"))
			// String
			|| isArray("string")
			|| isArray(`string`)
			// Symbol
			|| isArray(Symbol("description"))
			|| isArray(Symbol())
			|| isArray(Symbol.iterator)
			// Undefined
			|| isArray(undefined),
	),
);
