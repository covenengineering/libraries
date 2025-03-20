import { parseField } from "@coven/cron";
import { assertEquals, assertStrictEquals } from "@std/assert";

Deno.test("* gets *", () => assertStrictEquals(parseField("*"), "*"));

Deno.test("Number gets that parsed number", () =>
	assertStrictEquals(parseField("13"), 13),
);

Deno.test("List gets that list number", () =>
	assertEquals(parseField("10,11,12,13"), [10, 11, 12, 13]),
);

Deno.test("Range gets that list range", () =>
	assertEquals(parseField("10-13"), { from: 10, to: 13 }),
);

Deno.test("Invalid string gets undefined", () =>
	assertStrictEquals(parseField("invalid"), undefined),
);
