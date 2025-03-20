import { captureNext } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("Number 13 adds capture next group around it", () =>
	assertStrictEquals(captureNext(13), "(?=13)"),
);
