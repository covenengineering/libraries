import { assertStrictEquals } from "@std/assert";
import { parseBinary } from "../parseBinary.ts";

Deno.test("Parsing valid binary string returns parsed value", () =>
	assertStrictEquals(parseBinary("101"), 0b101),
);

Deno.test("Parsing binary string with a dot returns parsed value", () =>
	assertStrictEquals(parseBinary("101.5"), 0b101),
);

Deno.test("Parsing invalid string returns undefined", () =>
	assertStrictEquals(parseBinary("invalid"), undefined),
);
