import { parseInteger } from "@coven/parsers";
import { assertEquals } from "@std/assert";

const parseDecimal = parseInteger(10);

Deno.test("Valid decimal string returns correct value", () =>
	assertEquals(parseDecimal("101"), 101),
);

Deno.test("Decimal string with a dot returns correct value", () =>
	assertEquals(parseDecimal("101.5"), 101),
);

Deno.test("Number with a weird radix returns correct value", () =>
	assertEquals(parseInteger(36)("z"), 35),
);

Deno.test("Invalid string returns correct value", () =>
	assertEquals(parseDecimal("invalid"), undefined),
);
