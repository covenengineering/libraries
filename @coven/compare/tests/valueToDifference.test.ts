import { differentiate, flat } from "@coven/compare";
import { EMPTY_ARRAY, SIGIL } from "@coven/constants";
import { assertEquals } from "@std/assert";

Deno.test("When both values are missing returns an empty difference", () =>
	assertEquals(flat(differentiate(SIGIL)(SIGIL)), EMPTY_ARRAY),
);
