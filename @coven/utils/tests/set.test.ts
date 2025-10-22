import { EMPTY_OBJECT } from "@coven/constants";
import { set } from "@coven/utils";
import { assertEquals } from "@std/assert";

const SET_TRUE = true;
const setMagic = set("✨")(SET_TRUE);
const existingObject = { "✨": false };

Deno.test(
	"Setter and an object with that property on it returns object with updated property",
	() => assertEquals(setMagic({ "✨": false }), { "✨": true }),
);

Deno.test(
	"Setter and an object without that property on it returns object with new property",
	() => assertEquals(setMagic(EMPTY_OBJECT), { "✨": true }),
);

Deno.test("Setter doesn't mutate original object", () =>
	assertEquals(
		[setMagic(existingObject), existingObject],
		[
			{
				"✨": true,
			},
			{ "✨": false },
		],
	));
