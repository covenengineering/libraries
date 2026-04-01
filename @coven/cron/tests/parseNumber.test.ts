import { assertStrictEquals } from "@std/assert";
import { parseNumber } from "../parseNumber.ts";

Deno.test("Number 10 and a 13 returns parsed values", () =>
	assertStrictEquals(parseNumber("13"), 13),
);

Deno.test("Ranges with padding zeroes returns parsed values", () =>
	assertStrictEquals(parseNumber("05"), 5),
);

Deno.test("Numbers beyond 59 returns undefined", () =>
	assertStrictEquals(parseNumber("60"), undefined),
);
