import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { isString } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

Deno.test("Regular expressions", () =>
	assert(isString("string") && isString(`string`)));

Deno.test("Other types", () =>
	assertFalse(
		// Array
		isString(EMPTY_ARRAY)
			// AsyncIterator
			|| isString((async function* (): AsyncGenerator {})())
			// BigInt
			|| isString(BigInt(13))
			|| isString(BigInt("13"))
			|| isString(13n)
			// Boolean
			// deno-lint-ignore no-boolean-literal-for-arguments
			|| isString(true)
			// deno-lint-ignore no-boolean-literal-for-arguments
			|| isString(false)
			// Date
			|| isString(new Date())
			// Function
			|| isString(() => undefined)
			|| isString(async () => await undefined)
			|| isString(function (): void {})
			|| isString(async function (): Promise<void> {})
			|| isString(function* (): Generator {})
			|| isString(async function* (): AsyncGenerator {})
			// Iterator
			|| isString((function* (): Generator {})())
			// Null
			// deno-lint-ignore coven/no-null
			|| isString(null)
			// Number
			|| isString(13)
			|| isString(Infinity)
			|| isString(NaN)
			// Object
			|| isString(EMPTY_OBJECT)
			// Promise
			|| isString(Promise.resolve())
			// RegExp
			|| isString(/expression/u)
			|| isString(new RegExp("expression", "u"))
			// Symbol
			|| isString(Symbol("description"))
			|| isString(Symbol())
			|| isString(Symbol.iterator)
			// Undefined
			|| isString(undefined),
	));
