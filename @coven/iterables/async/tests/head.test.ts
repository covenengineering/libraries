import { EMPTY_ARRAY } from "@coven/constants";
import { assertStrictEquals } from "@std/assert";
import { range } from "../../range.ts";
import { drop } from "../drop.ts";
import { head } from "../head.ts";

const array = [0, 1, 2];

Deno.test("Array returns array first element", async () =>
	assertStrictEquals(await head(array), 0),
);

Deno.test("Iterable returns iterable's first element", async () =>
	assertStrictEquals(await head(range(1)(0)(2)), 0),
);

Deno.test("Empty array returns undefined", async () =>
	assertStrictEquals(await head(EMPTY_ARRAY), undefined),
);

Deno.test("Empty iterable returns undefined", async () =>
	assertStrictEquals(await head(drop(Infinity)(array)), undefined),
);
