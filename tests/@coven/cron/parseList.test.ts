import { parseList } from "@coven/cron";
import { assertEquals } from "@std/assert";

Deno.test("a list with 10, 11 and 13 return parsed list", () =>
	assertEquals(parseList("10,11,13"), [10, 11, 13]));
