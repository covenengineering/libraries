import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { isSymbol } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

Deno.test("Regular expressions", () =>
	assert(
		isSymbol(Symbol("description"))
			&& isSymbol(Symbol())
			&& isSymbol(Symbol.iterator),
	));

Deno.test("Other types", () =>
	assertFalse(
		// Array
		isSymbol(EMPTY_ARRAY)
			// AsyncIterator
			|| isSymbol((async function* (): AsyncGenerator {})())
			// BigInt
			|| isSymbol(BigInt(13))
			|| isSymbol(BigInt("13"))
			|| isSymbol(13n)
			// Boolean
			// deno-lint-ignore no-boolean-literal-for-arguments
			|| isSymbol(true)
			// deno-lint-ignore no-boolean-literal-for-arguments
			|| isSymbol(false)
			// Date
			|| isSymbol(new Date())
			// Function
			|| isSymbol(() => undefined)
			|| isSymbol(async () => await undefined)
			|| isSymbol(function (): void {})
			|| isSymbol(async function (): Promise<void> {})
			|| isSymbol(function* (): Generator {})
			|| isSymbol(async function* (): AsyncGenerator {})
			// Iterator
			|| isSymbol((function* (): Generator {})())
			// Null
			|| isSymbol(null)
			// Number
			|| isSymbol(13)
			|| isSymbol(Infinity)
			|| isSymbol(NaN)
			// Object
			|| isSymbol(EMPTY_OBJECT)
			// Promise
			|| isSymbol(Promise.resolve())
			// RegExp
			|| isSymbol(/expression/u)
			|| isSymbol(new RegExp("expression", "u"))
			// String
			|| isSymbol("string")
			|| isSymbol(`string`)
			// Undefined
			|| isSymbol(undefined),
	));
