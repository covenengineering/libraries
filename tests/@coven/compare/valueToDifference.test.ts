import { type Difference, differentiate, MISSING_VALUE } from "@coven/compare";
import { EMPTY_ARRAY } from "@coven/constants";
import type { ReadonlyArray } from "@coven/types";
import { assertEquals } from "@std/assert";

Deno.test("When both values are missing returns an empty difference", () =>
	assertEquals(
		[...differentiate(MISSING_VALUE)(MISSING_VALUE)],
		EMPTY_ARRAY as ReadonlyArray<Difference>,
	));
