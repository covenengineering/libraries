import { exists } from "@coven/expression";
import { assertEquals } from "@std/assert";

Deno.test("a number 13 add a + to the right", () =>
	assertEquals(exists(13), "13+"),
);
