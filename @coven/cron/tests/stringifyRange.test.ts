import { stringifyRange } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

Deno.test("Range returns stringified range", () =>
	assertStrictEquals(stringifyRange({ from: 10, to: 13 }), "10-13"),
);

Deno.test("Invalid value returns undefined", () =>
	assertStrictEquals(stringifyRange("nope" as "*"), undefined),
);
