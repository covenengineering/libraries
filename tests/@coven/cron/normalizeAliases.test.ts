import { normalizeAliases } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

Deno.test("Valid expression with no aliases returns same expression", () =>
	assertStrictEquals(normalizeAliases("* * * * *"), "* * * * *"),
);

Deno.test(
	"Valid expression with month and day of week aliased returns expression with aliases normalized",
	() => assertStrictEquals(normalizeAliases("* * 13 oct fri"), "* * 13 10 5"),
);
