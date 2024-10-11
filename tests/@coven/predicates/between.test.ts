import { between } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

const between13 = between(13);
const betweenWitch = between("🧙🏻‍♀️");
const between13And13 = between13(13);
const betweenWitchAndWitch = betweenWitch("🧙🏻‍♀️");
const between13And42 = between13(42);
const between13AndNegative13 = between13(-13);

Deno.test("Between 13 and 13, receiving 13 returns true", () =>
	assert(between13And13(13)));

Deno.test('Between "🧙🏻‍♀️" and "🧙🏻‍♀️", receiving "🧙🏻‍♀️" returns true', () =>
	assert(betweenWitchAndWitch("🧙🏻‍♀️")));

Deno.test("Between 13 and 13, receiving 42 returns false", () =>
	assertFalse(between13And13(42)));

Deno.test('Between "🧙🏻‍♀️" and "🧙🏻‍♀️", receiving "🎃" returns true', () =>
	assertFalse(betweenWitchAndWitch("🎃")));

Deno.test("Between 13 and 42, receiving 29 returns true", () =>
	assert(between13And42(29)));

Deno.test("Between 13 and 42, receiving 13 returns true", () =>
	assert(between13And42(13)));

Deno.test("Between 13 and 42, receiving 42 returns true", () =>
	assert(between13And42(42)));

Deno.test("Between 13 and 42, receiving 0 returns false", () =>
	assertFalse(between13And42(0)));

Deno.test("Between 13 and 42, receiving 69 returns false", () =>
	assertFalse(between13And42(69)));

Deno.test("Between 13 and -13, receiving -5 returns true", () =>
	assert(between13AndNegative13(-5)));

Deno.test("Between 13 and -13, receiving 5 returns true", () =>
	assert(between13AndNegative13(5)));

Deno.test("Between 13 and -13, receiving -13 returns true", () =>
	assert(between13AndNegative13(-13)));

Deno.test("Between 13 and -13, receiving -42 returns false", () =>
	assertFalse(between13AndNegative13(-42)));

Deno.test("Between 13 and -13, receiving 42 returns false", () =>
	assertFalse(between13AndNegative13(42)));
