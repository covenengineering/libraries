import { stringifyField } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

Deno.test("Array of numbers returns stringified list", () =>
	assertStrictEquals(stringifyField([10, 13]), "10,13"));

Deno.test("Range returns stringified range", () =>
	assertStrictEquals(stringifyField({ from: 10, to: 13 }), "10-13"));
