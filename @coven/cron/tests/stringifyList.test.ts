import { stringifyList } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

Deno.test("Array of numbers returns stringified list", () =>
	assertStrictEquals(stringifyList([10, 13]), "10,13"));

Deno.test("Invalid value returns undefined", () =>
	assertStrictEquals(stringifyList("nope" as "*"), undefined));
