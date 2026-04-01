import { assertStrictEquals } from "@std/assert";
import { paddedRegExp } from "../paddedRegExp.ts";

Deno.test("Number 5 returns number with padded 0?", () =>
	assertStrictEquals(paddedRegExp(5), "0?5"),
);
