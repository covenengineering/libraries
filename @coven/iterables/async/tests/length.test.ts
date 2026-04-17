import { EMPTY_ARRAY } from "@coven/constants";
import { assertStrictEquals } from "@std/assert";
import { range } from "../../range.ts";
import { length } from "../length.ts";
import { toIterable } from "../toIterable.ts";

Deno.test("Array returns length", async () =>
	assertStrictEquals(await length([0, 1, 2]), 3),
);

Deno.test("Iterable returns length", async () =>
	assertStrictEquals(await length(range(1)(0)(2)), 3),
);

Deno.test("Empty array returns 0", async () =>
	assertStrictEquals(await length(EMPTY_ARRAY), 0),
);

Deno.test("Empty iterable returns 0", async () =>
	assertStrictEquals(await length(toIterable(EMPTY_ARRAY)), 0),
);
