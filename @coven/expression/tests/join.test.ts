import { join } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("1 and a 3 join strings as 13", () =>
	assertStrictEquals(join(1, 3), "13"),
);
