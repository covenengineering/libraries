import { assertStrictEquals } from "@std/assert";
import { joinPlain } from "../joinPlain.ts";

Deno.test("1 and a 3 join strings as 13", () =>
	assertStrictEquals(joinPlain([1, 3]), "13"),
);
