import { assertStrictEquals } from "@std/assert";
import { valueOrRangeRegExp } from "../valueOrRangeRegExp.ts";

Deno.test("Number 13 returns value or range regular expression", () =>
	assertStrictEquals(valueOrRangeRegExp(13), "13(?:-13)?"),
);
