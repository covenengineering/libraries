import { memo } from "@coven/memo";
import { assertStrictEquals } from "@std/assert";
import { parseRange } from "../parseRange.ts";

Deno.test("Number 1 and a 13 returns parsed values", () =>
	assertStrictEquals(parseRange("1-13"), memo({ from: 1, to: 13 })),
);

Deno.test("Number 13 and a 13 returns normalized 13", () =>
	assertStrictEquals(parseRange("13-13"), 13),
);

Deno.test("Number 13 and a 1 returns parsed undefined", () =>
	assertStrictEquals(parseRange("13-1"), undefined),
);
