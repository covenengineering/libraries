import { stringifyRange } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

Deno.test("a range return stringified range", () =>
	assertStrictEquals(stringifyRange({ from: 10, to: 13 }), "10-13"));

Deno.test("an invalid value return undefined", () =>
	assertStrictEquals(stringifyRange("nope" as "*"), undefined));
