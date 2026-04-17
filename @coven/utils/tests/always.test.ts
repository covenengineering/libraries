import { assertEquals, assertStrictEquals } from "@std/assert";
import { always } from "../always.ts";

Deno.test("When passing a string, that string is returned when calling", () =>
	assertStrictEquals(always("✨")(), "✨"),
);

Deno.test(
	"When passing as a mapper function for an array it acts like fill",
	() =>
		assertEquals([0, 1, 2, 3].map(always("✨")), ["✨", "✨", "✨", "✨"]),
);
