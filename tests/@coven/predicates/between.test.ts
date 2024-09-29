import { between } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

const between1 = between(1);
const betweenFoo = between("foo");
const between1And1 = between1(1);
const betweenFooAndFoo = betweenFoo("foo");
const between1And10 = between1(10);
const between1AndNegative10 = between1(-10);

Deno.test("The same number twice and receiving that number returns true", () =>
	assert(between1And1(1)));

Deno.test("The same string twice and receiving that string returns true", () =>
	assert(betweenFooAndFoo("foo")));

Deno.test("The same number twice and receiving another number returns false", () =>
	assertFalse(between1And1(2)));

Deno.test("The same string twice and receiving another string returns false", () =>
	assertFalse(betweenFooAndFoo("bar")));

Deno.test("Lower to bigger and a number inside of that range returns true", () =>
	assert(between1And10(5)));

Deno.test("Lower to bigger and a number equal to the lower bound returns true", () =>
	assert(between1And10(1)));

Deno.test("Lower to bigger and a number equal to the higher bound returns true", () =>
	assert(between1And10(10)));

Deno.test("Lower to bigger and a number lower to the lower bound returns false", () =>
	assertFalse(between1And10(0)));

Deno.test("Lower to bigger and a number bigger to the higher bound returns false", () =>
	assertFalse(between1And10(11)));

Deno.test("Bigger to lower and a number inside the bounds returns true", () =>
	assert(between1AndNegative10(-5)));

Deno.test("Bigger to lower and a number equal to the lower bound returns true", () =>
	assert(between1AndNegative10(1)));

Deno.test("Bigger to lower and a number equal to the higher bound returns true", () =>
	assert(between1AndNegative10(-10)));

Deno.test("Bigger to lower and a number lower to the lower bound returns false", () =>
	assertFalse(between1AndNegative10(2)));

Deno.test("Bigger to lower and a number bigger to the higher bound returns false", () =>
	assertFalse(between1AndNegative10(-11)));
