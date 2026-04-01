import { assertStrictEquals } from "@std/assert";
import { escape } from "../escape.ts";

Deno.test("Letter L is escaped", () =>
	assertStrictEquals(escape("L"), String.raw`\L`),
);
