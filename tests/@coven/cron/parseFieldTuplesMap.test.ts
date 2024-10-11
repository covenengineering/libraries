import { parseFieldTuplesMap } from "@coven/cron";
import { iterableToArray } from "@coven/iterables";
import { assertEquals } from "@std/assert";

Deno.test("tuple of minute and * return parsed tuple", () =>
	assertEquals(iterableToArray(parseFieldTuplesMap([["minute", "*"]])), [[
		"minute",
		"*",
	]]));

Deno.test("tuple of minute and 13 return parsed tuple", () =>
	assertEquals(iterableToArray(parseFieldTuplesMap([["minute", "13"]])), [[
		"minute",
		13,
	]]));

Deno.test("tuple of minute and 10,11,13 return parsed tuple", () =>
	assertEquals(
		iterableToArray(parseFieldTuplesMap([["minute", "10,11,13"]])),
		[["minute", [10, 11, 13]]],
	));

Deno.test("tuple of minute and 13 return parsed tuple", () =>
	assertEquals(iterableToArray(parseFieldTuplesMap([["minute", "1-10"]])), [[
		"minute",
		{ from: 1, to: 10 },
	]]));
