import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { isFalsy } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

Deno.test("Falsies", () =>
	assert(
		// Bigint
		isFalsy(BigInt(0))
			&& isFalsy(BigInt("0"))
			&& isFalsy(0n)
			// Boolean
			// deno-lint-ignore no-boolean-literal-for-arguments
			&& isFalsy(false)
			// Nullish
			// deno-lint-ignore coven/no-null
			&& isFalsy(null)
			&& isFalsy(undefined)
			// Number
			&& isFalsy(0)
			&& isFalsy(-0)
			&& isFalsy(+0)
			&& isFalsy(NaN)
			// String
			&& isFalsy("")
			&& isFalsy(``),
	));

Deno.test("Truthy", () =>
	assertFalse(
		// Array
		isFalsy(EMPTY_ARRAY)
			// AsyncIterator
			|| isFalsy((async function* (): AsyncGenerator {})())
			// BigInt
			|| isFalsy(BigInt(13))
			|| isFalsy(BigInt("13"))
			|| isFalsy(13n)
			// Boolean
			// deno-lint-ignore no-boolean-literal-for-arguments
			|| isFalsy(true)
			// Date
			|| isFalsy(new Date())
			// Function
			|| isFalsy(() => undefined)
			|| isFalsy(async () => await undefined)
			|| isFalsy(function (): void {})
			|| isFalsy(async function (): Promise<void> {})
			|| isFalsy(function* (): Generator {})
			|| isFalsy(async function* (): AsyncGenerator {})
			// Iterator
			|| isFalsy((function* (): Generator {})())
			// Number
			|| isFalsy(13)
			|| isFalsy(Infinity)
			// Object
			|| isFalsy(EMPTY_OBJECT)
			// Promise
			|| isFalsy(Promise.resolve())
			// RegExp
			|| isFalsy(/expression/u)
			|| isFalsy(new RegExp("expression", "u"))
			// String
			|| isFalsy("string")
			|| isFalsy(`string`)
			// Symbol
			|| isFalsy(Symbol("description"))
			|| isFalsy(Symbol())
			|| isFalsy(Symbol.iterator),
	));
