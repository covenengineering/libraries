import { EMPTY_OBJECT } from "@coven/constants";
import { createObject, mutate } from "@coven/utils";
import { assertEquals, assertThrows } from "@std/assert";

const mutateMagic = mutate({ "✨": "🎃" });
const emptyObject = createObject<Record<string, string>>();
const magicObject = { "✨": "✨" };

Deno.test(
	'Mutate function that sets a `"✨"` property to `"🎃"` and an empty object returns object with added property',
	() =>
		assertEquals((mutateMagic(emptyObject), emptyObject), {
			"✨": "🎃",
		}),
);

Deno.test(
	'Mutate function that sets a `"✨"` property to `"🎃"` and an object with that property on it returns object with added property',
	() =>
		assertEquals((mutateMagic(magicObject), magicObject), {
			"✨": "🎃",
		}),
);

Deno.test(
	"Mutating a frozen object should throw",
	() => void assertThrows(() => mutateMagic(EMPTY_OBJECT)),
);
