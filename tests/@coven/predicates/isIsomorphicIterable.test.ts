import { isIsomorphicIterable } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

Deno.test("Isomorphic iterables", () =>
	assert(
		// Array
		isIsomorphicIterable([]) &&
			// Generators
			isIsomorphicIterable((async function* (): AsyncGenerator {})()) &&
			isIsomorphicIterable((function* (): Generator {})()) &&
			// String
			isIsomorphicIterable("string") && isIsomorphicIterable(`string`),
	));

Deno.test("Other types", () =>
	assertFalse(
		// BigInt
		isIsomorphicIterable(BigInt(13)) ||
			isIsomorphicIterable(BigInt("13")) ||
			isIsomorphicIterable(13n) ||
			// Boolean
			// deno-lint-ignore no-boolean-literal-for-arguments
			isIsomorphicIterable(true) || isIsomorphicIterable(false) ||
			// Date
			isIsomorphicIterable(new Date()) ||
			// Function
			isIsomorphicIterable(() => undefined) ||
			isIsomorphicIterable(async () => await undefined) ||
			isIsomorphicIterable(function (): void {}) ||
			isIsomorphicIterable(async function (): Promise<void> {}) ||
			isIsomorphicIterable(function* (): Generator {}) ||
			isIsomorphicIterable(async function* (): AsyncGenerator {}) ||
			// Null
			isIsomorphicIterable(null) ||
			// Number
			isIsomorphicIterable(13) || isIsomorphicIterable(Infinity) ||
			isIsomorphicIterable(NaN) ||
			// Object
			isIsomorphicIterable({}) ||
			isIsomorphicIterable(Object.create(null)) ||
			// Promise
			isIsomorphicIterable(Promise.resolve()) ||
			// RegExp
			isIsomorphicIterable(/expression/u) ||
			isIsomorphicIterable(new RegExp("expression", "u")) ||
			// Symbol
			isIsomorphicIterable(Symbol("description")) ||
			isIsomorphicIterable(Symbol()) ||
			isIsomorphicIterable(Symbol.iterator) ||
			// Undefined
			isIsomorphicIterable(undefined),
	));
