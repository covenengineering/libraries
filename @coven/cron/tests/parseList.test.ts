import { parseList } from "@coven/cron";
import { assertEquals } from "@std/assert";

Deno.test("List with 10, 11 and 13 returns parsed list", () =>
	assertEquals(parseList("10,11,13"), [10, 11, 13]),
);
