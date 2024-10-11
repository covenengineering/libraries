import { normalizeAliases } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

Deno.test("a valid expression with no aliases return same expression", () =>
	assertStrictEquals(normalizeAliases("* * * * *"), "* * * * *"));

Deno.test(
	"a valid expression with month and day of week aliased return expression with aliases normalized",
	() => assertStrictEquals(normalizeAliases("* * 13 oct fri"), "* * 13 10 5"),
);
