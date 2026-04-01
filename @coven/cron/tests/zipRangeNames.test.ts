import { iterableToArray } from "@coven/iterables";
import { assertEquals } from "@std/assert";
import { zipRangeNames } from "../zipRangeNames.ts";

Deno.test("Number 10 and a 13 returns zipped array with from and to", () =>
	assertEquals(iterableToArray(zipRangeNames(["10", "13"])), [
		["from", "10"],
		["to", "13"],
	]),
);
