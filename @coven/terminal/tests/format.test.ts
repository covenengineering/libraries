import { assertStrictEquals } from "@std/assert";
import { format } from "../format.ts";

Deno.test("Format works on string", () =>
	assertStrictEquals(
		format(13, 42)("Coven Engineering"),
		"[13mCoven Engineering[42m",
	),
);

Deno.test("Format works as a template tag function", () =>
	assertStrictEquals(
		format(13, 42)`Coven Engineering ${665}`,
		"[13mCoven Engineering 665[42m",
	),
);

Deno.test("Nested when closing value is the same works", () =>
	assertStrictEquals(
		format(13, 42)`Hi ${format(665, 42)`Witch`}!`,
		"[13mHi [665mWitch[13m![42m",
	),
);

Deno.test("Nested when closing value is the different works", () =>
	assertStrictEquals(
		format(13, 42)`Hi ${format(665, 666)`Witch`}!`,
		"[13mHi [665mWitch[666m![42m",
	),
);
