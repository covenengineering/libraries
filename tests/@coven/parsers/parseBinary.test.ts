import { parseBinary } from "@coven/parsers";
import { assertEquals } from "@std/assert";

Deno.test("Valid binary string returns correct value", () =>
	assertEquals(parseBinary("101"), 0b101),
);

Deno.test("Binary string with a dot returns correct value", () =>
	assertEquals(parseBinary("101.5"), 0b101),
);

Deno.test("Invalid string returns correct value", () =>
	assertEquals(parseBinary("invalid"), undefined),
);
