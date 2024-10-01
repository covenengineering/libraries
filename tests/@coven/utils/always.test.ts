import { always } from "@coven/utils";
import { assertEquals } from "@std/assert";

Deno.test("always with a string returns said string when called", () =>
	assertEquals(always("🧙🏻‍♀️")(), "🧙🏻‍♀️"),
);

Deno.test(
	"an array and an always with a string return array filled with string",
	() =>
		assertEquals([0, 1, 2, 3].map(always("🧙🏻‍♀️")), ["🧙🏻‍♀️", "🧙🏻‍♀️", "🧙🏻‍♀️", "🧙🏻‍♀️"]),
);
