import { type Difference, MISSING, valueToDifference } from "@coven/compare";
import { EMPTY_ARRAY } from "@coven/constants";
import type { ReadonlyArray } from "@coven/types";
import { assertEquals } from "@std/assert";

Deno.test("When both values are missing returns an empty difference", () =>
	assertEquals(
		[...valueToDifference(MISSING)(MISSING)],
		EMPTY_ARRAY as ReadonlyArray<Difference>,
	));
