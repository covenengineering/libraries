import { memo } from "@coven/memo";
import { assertStrictEquals } from "@std/assert";
import { parseList } from "../parseList.ts";

Deno.test("List with 10, 11 and 13 returns parsed list", () =>
	assertStrictEquals(parseList("10,11,13"), memo([10, 11, 13])),
);
