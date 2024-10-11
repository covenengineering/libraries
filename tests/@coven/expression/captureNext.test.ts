import { captureNext } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("a number 13 add capture next group around it", () =>
	assertStrictEquals(captureNext(13), "(?=13)"));
