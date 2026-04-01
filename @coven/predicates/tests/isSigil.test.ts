import { EMPTY_ARRAY, EMPTY_OBJECT, SIGIL } from "@coven/constants";
import { assert, assertFalse } from "@std/assert";
import { isSigil } from "../isSigil.ts";

Deno.test("Sigil", () => assert(isSigil(SIGIL) && isSigil(Symbol.for("⛧"))));

Deno.test("Other types", () =>
	assertFalse(
		// Array
		isSigil(EMPTY_ARRAY)
			// AsyncIterator
			|| isSigil((async function* (): AsyncGenerator {})())
			// BigInt
			|| isSigil(BigInt(13))
			|| isSigil(BigInt("13"))
			|| isSigil(13n)
			// Boolean
			// deno-lint-ignore no-boolean-literal-for-arguments
			|| isSigil(true)
			// deno-lint-ignore no-boolean-literal-for-arguments
			|| isSigil(false)
			// Date
			|| isSigil(new Date())
			// Function
			|| isSigil(() => undefined)
			|| isSigil(async () => await undefined)
			|| isSigil(function (): void {})
			|| isSigil(async function (): Promise<void> {})
			|| isSigil(function* (): Generator {})
			|| isSigil(async function* (): AsyncGenerator {})
			// Iterator
			|| isSigil((function* (): Generator {})())
			// Null
			// deno-lint-ignore coven/no-null
			|| isSigil(null)
			// Number
			|| isSigil(13)
			|| isSigil(Infinity)
			|| isSigil(NaN)
			// Object
			|| isSigil(EMPTY_OBJECT)
			// Promise
			|| isSigil(Promise.resolve())
			// RegExp
			|| isSigil(/expression/u)
			|| isSigil(new RegExp("expression", "u"))
			// String
			|| isSigil("string")
			|| isSigil(`string`)
			// Symbol
			|| isSigil(Symbol())
			|| isSigil(Symbol("⛧"))
			// Undefined
			|| isSigil(undefined),
	),
);
