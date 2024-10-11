import { type Difference, MISSING, valueToDifference } from "@coven/compare";
import { assertEquals } from "@std/assert";

Deno.test("When both values are missing returns an empty difference", () =>
	assertEquals(valueToDifference(MISSING)(MISSING), {} as Difference));
