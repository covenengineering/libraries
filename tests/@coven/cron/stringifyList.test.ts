import { stringifyList } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

Deno.test("an array of numbers return stringified list", () =>
	assertStrictEquals(stringifyList([10, 13]), "10,13"));

Deno.test("an invalid value return undefined", () =>
	assertStrictEquals(stringifyList("nope" as "*"), undefined));
