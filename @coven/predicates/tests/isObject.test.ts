import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { isObject } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

Deno.test("Objects", () =>
	assert(
		// Array
		isObject(EMPTY_ARRAY)
			// AsyncIterator
			&& isObject((async function* (): AsyncGenerator {})())
			// Date
			&& isObject(new Date())
			// Iterator
			&& isObject((function* (): Generator {})())
			// Promise
			&& isObject(Promise.resolve())
			// RegExp
			&& isObject(/expression/u)
			&& isObject(new RegExp("expression", "u"))
			// Object
			&& isObject(EMPTY_OBJECT),
	),
);

Deno.test("Other types", () =>
	assertFalse(
		// BigInt
		isObject(BigInt(13))
			|| isObject(BigInt("13"))
			|| isObject(13n)
			// Boolean
			// deno-lint-ignore no-boolean-literal-for-arguments
			|| isObject(true)
			// deno-lint-ignore no-boolean-literal-for-arguments
			|| isObject(false)
			// Function
			|| isObject(() => undefined)
			|| isObject(async () => await undefined)
			|| isObject(function (): void {})
			|| isObject(async function (): Promise<void> {})
			|| isObject(function* (): Generator {})
			|| isObject(async function* (): AsyncGenerator {})
			// Null
			// deno-lint-ignore coven/no-null
			|| isObject(null)
			// Number
			|| isObject(13)
			|| isObject(Infinity)
			|| isObject(NaN)
			// String
			|| isObject("string")
			|| isObject(`string`)
			// Symbol
			|| isObject(Symbol("description"))
			|| isObject(Symbol())
			|| isObject(Symbol.iterator)
			// Undefined
			|| isObject(undefined),
	),
);
