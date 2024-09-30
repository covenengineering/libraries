import { set } from "@coven/utils";
import { assertEquals } from "@std/assert";

const SET_TRUE = true;
const setWitch = set("🧙🏻‍♀️")(SET_TRUE);
const existingObject = { "🧙🏻‍♀️": false };

Deno.test("Setter and an object with that property on it returns object with updated property", () =>
	assertEquals(setWitch({ "🧙🏻‍♀️": false }), { "🧙🏻‍♀️": true }));

Deno.test("Setter and an object without that property on it returns object with new property", () =>
	assertEquals(setWitch({}), { "🧙🏻‍♀️": true }));

Deno.test("Setter doesn't mutate original object", () =>
	assertEquals([setWitch(existingObject), existingObject], [{
		"🧙🏻‍♀️": true,
	}, { "🧙🏻‍♀️": false }]));
