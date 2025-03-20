import { parseHexadecimal } from "@coven/parsers";
import { assertEquals } from "@std/assert";

Deno.test("Parsing valid hexadecimal string returns parsed value", () =>
	assertEquals(parseHexadecimal("101"), 0x1_01),
);

Deno.test("Parsing hexadecimal string with a dot returns parsed value", () =>
	assertEquals(parseHexadecimal("101.5"), 0x1_01),
);

Deno.test("Parsing invalid string returns undefined", () =>
	assertEquals(parseHexadecimal("invalid"), undefined),
);
