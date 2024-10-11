import { parseNumberMap } from "@coven/cron";
import { iterableToArray } from "@coven/iterables";
import { assertEquals } from "@std/assert";

Deno.test("a number 10 and a 13 return parsed values", () =>
	assertEquals(iterableToArray(parseNumberMap(["10", "13"])), [10, 13]));

Deno.test("ranges with padding zeroes return parsed values", () =>
	assertEquals(iterableToArray(parseNumberMap(["01", "02"])), [1, 2]));

Deno.test("numbers beyond 59 return undefined", () =>
	assertEquals(iterableToArray(parseNumberMap(["99", "60"])), [
		undefined,
		undefined,
	]));
