import { parseListMap } from "@coven/cron";
import { iterableToArray } from "@coven/iterables";
import { assertEquals } from "@std/assert/equals";

Deno.test("a list of valid and invalid values return parsed list", () =>
	assertEquals(
		iterableToArray(
			parseListMap(["1", "05", "13", "5-13", "13-13", "13-5", "99"]),
		),
		[1, 5, 13, { from: 5, to: 13 }, 13, undefined, undefined],
	));
