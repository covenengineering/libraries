import { stringifyField } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

Deno.test("an array of numbers return stringified list", () =>
	assertStrictEquals(stringifyField([10, 13]), "10,13"));

Deno.test("a range return stringified range", () =>
	assertStrictEquals(stringifyField({ from: 10, to: 13 }), "10-13"));
