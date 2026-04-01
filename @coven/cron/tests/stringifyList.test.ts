import { assertStrictEquals } from "@std/assert";
import { stringifyList } from "../stringifyList.ts";

Deno.test("Array of numbers returns stringified list", () =>
	assertStrictEquals(stringifyList([10, 13]), "10,13"),
);

Deno.test("Invalid value returns undefined", () =>
	assertStrictEquals(stringifyList("nope" as "*"), undefined),
);
