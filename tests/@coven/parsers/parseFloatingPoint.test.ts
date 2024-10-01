import { parseFloatingPoint } from "@coven/parsers";
import { assertEquals } from "@std/assert";

Deno.test("Valid float point string returns correct value", () =>
	assertEquals(parseFloatingPoint("101"), 101),
);

Deno.test("float point string with a dot returns correct value", () =>
	assertEquals(parseFloatingPoint("101.5"), 101.5),
);

Deno.test("Invalid string returns correct value", () =>
	assertEquals(parseFloatingPoint("invalid"), undefined),
);
