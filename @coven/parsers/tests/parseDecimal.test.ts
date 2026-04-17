import { assertStrictEquals } from "@std/assert";
import { parseDecimal } from "../parseDecimal.ts";

Deno.test("Parsing valid decimal string returns parsed value", () =>
	assertStrictEquals(parseDecimal("101"), 101),
);

Deno.test("Parsing decimal string with a dot returns parsed value", () =>
	assertStrictEquals(parseDecimal("101.5"), 101),
);

Deno.test("Parsing invalid string returns undefined", () =>
	assertStrictEquals(parseDecimal("invalid"), undefined),
);
