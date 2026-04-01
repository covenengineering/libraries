import { assertStrictEquals } from "@std/assert";
import { lookahead } from "../lookahead.ts";

Deno.test("Number 13 adds capture next group around it", () =>
	assertStrictEquals(lookahead(13), "(?=13)"),
);
