import { notCaptureNext } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("Number 13 is not captured next group around 13", () =>
	assertStrictEquals(notCaptureNext(13), "(?!13)"),
);

Deno.test("Number 1, and a 3 are not captured next group around 13", () =>
	assertStrictEquals(notCaptureNext(1, 3), "(?!13)"),
);
