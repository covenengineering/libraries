import { zipRangeNames } from "@coven/cron";
import { iterableToArray } from "@coven/iterables";
import { assertEquals } from "@std/assert";

Deno.test("Number 10 and a 13 returns zipped array with from and to", () =>
	assertEquals(iterableToArray(zipRangeNames(["10", "13"])), [
		["from", "10"],
		["to", "13"],
	]));
