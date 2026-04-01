import { EMPTY_ARRAY } from "@coven/constants";
import { assertEquals } from "@std/assert";
import { range } from "../../range.ts";
import { drop } from "../drop.ts";
import { initial } from "../initial.ts";
import { iterableToArray } from "../iterableToArray.ts";

const array = [0, 1, 2];

Deno.test("Array returns initial items", async () =>
	assertEquals(await iterableToArray(initial(array)), [0, 1]),
);

Deno.test("Iterable returns initial items", async () =>
	assertEquals(await iterableToArray(initial(range(1)(0)(2))), [0, 1]),
);

Deno.test("Empty array returns empty array", async () =>
	assertEquals(await iterableToArray(initial(EMPTY_ARRAY)), EMPTY_ARRAY),
);

Deno.test("Empty iterable returns empty array", async () =>
	assertEquals(
		await iterableToArray(initial(drop(Infinity)(array))),
		EMPTY_ARRAY,
	),
);
