import { assertStrictEquals } from "@std/assert";
import { namedBackreference } from "../namedBackreference.ts";

Deno.test("Named backreference to group ✨", () =>
	assertStrictEquals(namedBackreference("✨"), String.raw`\k<✨>`),
);
