import { notCaptureNext } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("a number 13 not capture next group around 13", () =>
	assertStrictEquals(notCaptureNext(13), "(?!13)"));

Deno.test("a number 1, and a 3 not capture next group around 13", () =>
	assertStrictEquals(notCaptureNext(1, 3), "(?!13)"));
