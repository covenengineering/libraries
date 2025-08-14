import { always } from "@coven/utils";
import { assertEquals } from "@std/assert";

Deno.test("When passing a string, that string is returned when calling", () =>
	assertEquals(always("✨")(), "✨"));

Deno.test(
	"When passing as a mapper function for an array it acts like fill",
	() =>
		assertEquals([0, 1, 2, 3].map(always("✨")), ["✨", "✨", "✨", "✨"]),
);
