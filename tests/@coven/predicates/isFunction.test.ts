import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { isFunction } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

Deno.test("Functions", () =>
	assert(
		isFunction(() => undefined)
			&& isFunction(async () => await undefined)
			&& isFunction(function (): void {})
			&& isFunction(async function (): Promise<void> {})
			&& isFunction(function* (): Generator {})
			&& isFunction(async function* (): AsyncGenerator {}),
	));

Deno.test("Other types", () =>
	assertFalse(
		// Array
		isFunction(EMPTY_ARRAY)
			// AsyncIterator
			|| isFunction((async function* (): AsyncGenerator {})())
			// BigInt
			|| isFunction(BigInt(13))
			|| isFunction(BigInt("13"))
			|| isFunction(13n)
			// Boolean
			// deno-lint-ignore no-boolean-literal-for-arguments
			|| isFunction(true)
			// deno-lint-ignore no-boolean-literal-for-arguments
			|| isFunction(false)
			// Date
			|| isFunction(new Date())
			// Iterator
			|| isFunction((function* (): Generator {})())
			// Null
			|| isFunction(null)
			// Number
			|| isFunction(13)
			|| isFunction(Infinity)
			|| isFunction(NaN)
			// Promise
			|| isFunction(Promise.resolve())
			// RegExp
			|| isFunction(/expression/u)
			|| isFunction(new RegExp("expression", "u"))
			// String
			|| isFunction("string")
			|| isFunction(`string`)
			// Symbol
			|| isFunction(Symbol("description"))
			|| isFunction(Symbol())
			|| isFunction(Symbol.iterator)
			// Object
			|| isFunction(EMPTY_OBJECT)
			// Undefined
			|| isFunction(undefined),
	));
