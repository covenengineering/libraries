import { undefineNaN } from "@coven/parsers";
import { assertEquals } from "@std/assert";

Deno.test("Valid number returns correct value", () =>
	assertEquals(undefineNaN(13), 13),
);

Deno.test("NaN returns undefined", () =>
	assertEquals(undefineNaN(NaN), undefined),
);
