import { exists } from "@coven/expression";
import { assertEquals } from "@std/assert";

Deno.test("Number 13 adds a + to the right", () =>
	assertEquals(exists(13), "13+"),
);

Deno.test("Number 1 and number 3 adds a + to the right", () =>
	assertEquals(exists(1, 3), "13+"),
);
