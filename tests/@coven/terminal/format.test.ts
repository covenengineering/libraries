import { format } from "@coven/terminal";
import { assertEquals } from "@std/assert";

Deno.test("Format works on string", () =>
	assertEquals(format(1, 2)("Coven Engineering"), "[1mCoven Engineering[2m"),
);

Deno.test("Format works as a template tag function", () =>
	assertEquals(
		format(1, 2)`Coven Engineering ${13}`,
		"[1mCoven Engineering 13[2m",
	),
);

Deno.test("Nested format works", () =>
	assertEquals(
		format(1, 2)`Hi ${format(3, 2)`witch`}!`,
		"[1mHi [3mwitch[1m![2m",
	),
);
