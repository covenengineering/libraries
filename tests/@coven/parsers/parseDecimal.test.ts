import { parseDecimal } from "@coven/parsers";
import { assertEquals } from "@std/assert";

Deno.test("Valid decimal string returns correct value", () =>
	assertEquals(parseDecimal("101"), 101),
);

Deno.test("Decimal string with a dot returns correct value", () =>
	assertEquals(parseDecimal("101.5"), 101),
);

Deno.test("Invalid string returns correct value", () =>
	assertEquals(parseDecimal("invalid"), undefined),
);
