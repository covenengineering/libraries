import { assertStrictEquals } from "@std/assert";
import { valueRangeOrListRegExp } from "../valueRangeOrListRegExp.ts";

Deno.test("Number 13 returns string expression", () =>
	assertStrictEquals(
		valueRangeOrListRegExp(13),
		"(?:13(?:-13)?|(?:(?:13(?:-13)?,)+13(?:-13)?))",
	),
);
