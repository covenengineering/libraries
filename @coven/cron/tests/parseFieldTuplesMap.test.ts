import { parseFieldTuplesMap } from "@coven/cron";
import { iterableToArray } from "@coven/iterables";
import { assertEquals } from "@std/assert";

Deno.test("Tuple of minute and * returns parsed tuple", () =>
	assertEquals(iterableToArray(parseFieldTuplesMap([["minute", "*"]])), [
		["minute", "*"],
	]));

Deno.test("Tuple of minute and 13 returns parsed tuple", () =>
	assertEquals(iterableToArray(parseFieldTuplesMap([["minute", "13"]])), [
		["minute", 13],
	]));

Deno.test("Tuple of minute and 10,11,13 returns parsed tuple", () =>
	assertEquals(
		iterableToArray(parseFieldTuplesMap([["minute", "10,11,13"]])),
		[["minute", [10, 11, 13]]],
	));

Deno.test("Tuple of minute and 13 returns parsed tuple", () =>
	assertEquals(iterableToArray(parseFieldTuplesMap([["minute", "1-10"]])), [
		["minute", { from: 1, to: 10 }],
	]));
