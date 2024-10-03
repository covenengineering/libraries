import { format } from "@coven/terminal";
import { assertEquals } from "@std/assert";

Deno.test("Format works on string", () =>
	assertEquals(
		format(13, 42)("Coven Engineering"),
		"[13mCoven Engineering[42m",
	),
);

Deno.test("Format works as a template tag function", () =>
	assertEquals(
		format(13, 42)`Coven Engineering ${665}`,
		"[13mCoven Engineering 665[42m",
	),
);

Deno.test("Nested when closing value is the same works", () =>
	assertEquals(
		format(13, 42)`Hi ${format(665, 42)`Witch`}!`,
		"[13mHi [665mWitch[13m![42m",
	),
);

Deno.test("Nested when closing value is the different works", () =>
	assertEquals(
		format(13, 42)`Hi ${format(665, 666)`Witch`}!`,
		"[13mHi [665mWitch[666m![42m",
	),
);
