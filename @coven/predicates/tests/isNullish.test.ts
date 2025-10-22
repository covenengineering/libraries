import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { isNullish } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

Deno.test("Nullish", () =>
	// deno-lint-ignore coven/no-null
	assert(isNullish(null) && isNullish(undefined)));

Deno.test("Other types", () =>
	assertFalse(
		// Array
		isNullish(EMPTY_ARRAY)
			// AsyncIterator
			|| isNullish((async function* (): AsyncGenerator {})())
			// BigInt
			|| isNullish(BigInt(13))
			|| isNullish(BigInt("13"))
			|| isNullish(13n)
			// Boolean
			// deno-lint-ignore no-boolean-literal-for-arguments
			|| isNullish(true)
			// deno-lint-ignore no-boolean-literal-for-arguments
			|| isNullish(false)
			// Date
			|| isNullish(new Date())
			// Function
			|| isNullish(() => undefined)
			|| isNullish(async () => await undefined)
			|| isNullish(function (): void {})
			|| isNullish(async function (): Promise<void> {})
			|| isNullish(function* (): Generator {})
			|| isNullish(async function* (): AsyncGenerator {})
			// Iterator
			|| isNullish((function* (): Generator {})())
			// Number
			|| isNullish(13)
			|| isNullish(Infinity)
			|| isNullish(NaN)
			// Object
			|| isNullish(EMPTY_OBJECT)
			// Promise
			|| isNullish(Promise.resolve())
			// RegExp
			|| isNullish(/expression/u)
			|| isNullish(new RegExp("expression", "u"))
			// String
			|| isNullish("string")
			|| isNullish(`string`)
			// Symbol
			|| isNullish(Symbol("description"))
			|| isNullish(Symbol())
			|| isNullish(Symbol.iterator),
	));
