import { mutate } from "@coven/utils";
import { assertEquals } from "@std/assert";

const mutateWitch = mutate({ "🧙🏻‍♀️": "🎃" });
const emptyObject = {};
const witchObject = { "🧙🏻‍♀️": "🧙🏻‍♀️" };

Deno.test('Mutate function that sets a `"🧙🏻‍♀️"` property to `"🎃"` and an empty object returns object with added property', () =>
	assertEquals((mutateWitch(emptyObject), emptyObject), { "🧙🏻‍♀️": "🎃" }));

Deno.test('Mutate function that sets a `"🧙🏻‍♀️"` property to `"🎃"` and an object with that property on it returns object with added property', () =>
	assertEquals((mutateWitch(witchObject), witchObject), { "🧙🏻‍♀️": "🎃" }));
