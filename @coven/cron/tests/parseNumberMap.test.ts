import { parseNumberMap } from "@coven/cron";
import { iterableToArray } from "@coven/iterables";
import { assertEquals } from "@std/assert";

Deno.test("Number 10 and a 13 returns parsed values", () =>
	assertEquals(iterableToArray(parseNumberMap(["10", "13"])), [10, 13]));

Deno.test("Ranges with padding zeroes returnsparsed values", () =>
	assertEquals(iterableToArray(parseNumberMap(["01", "02"])), [1, 2]));

Deno.test("Numbers beyond 59 returns undefined", () =>
	assertEquals(iterableToArray(parseNumberMap(["99", "60"])), [
		undefined,
		undefined,
	]));
