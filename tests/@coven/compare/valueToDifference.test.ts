import { differentiate, flat, MISSING_VALUE } from "@coven/compare";
import { EMPTY_ARRAY } from "@coven/constants";
import { assertEquals } from "@std/assert";

Deno.test("When both values are missing returns an empty difference", () =>
	assertEquals(
		flat(differentiate(MISSING_VALUE)(MISSING_VALUE)),
		EMPTY_ARRAY,
	),
);
