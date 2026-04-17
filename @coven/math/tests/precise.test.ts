import { memo } from "@coven/memo";
import { assertStrictEquals } from "@std/assert";
import { precise } from "../precise.ts";

Deno.test("precise(1n, 5n) = [1n, 5n]", () =>
	assertStrictEquals(precise(1n, 5n), memo([1n, 5n])),
);

Deno.test("precise(1n, 0n) = [1n]", () =>
	assertStrictEquals(precise(1n, 0n), memo([1n, 0n])),
);

Deno.test("precise(1n) = [1n]", () =>
	assertStrictEquals(precise(1n, 0n), memo([1n, 0n])),
);
