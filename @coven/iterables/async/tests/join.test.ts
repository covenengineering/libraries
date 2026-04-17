import { EMPTY_ARRAY } from "@coven/constants";
import { assertStrictEquals } from "@std/assert";
import { join } from "../join.ts";
import { toIterable } from "../toIterable.ts";

const spaceJoin = join(" ");
const array = [0, 1, 2, 3];

Deno.test(
	"Array of numbers returns those numbers separated by spaces",
	async () => assertStrictEquals(await spaceJoin(array), "0 1 2 3"),
);

Deno.test(
	"Iterable of numbers returns those numbers separated by spaces",
	async () =>
		assertStrictEquals(await spaceJoin(toIterable(array)), "0 1 2 3"),
);

Deno.test("Empty array returns empty string", async () =>
	assertStrictEquals(await spaceJoin(EMPTY_ARRAY), ""),
);

Deno.test("Empty iterable returns empty string", async () =>
	assertStrictEquals(await spaceJoin(toIterable(EMPTY_ARRAY)), ""),
);

Deno.test(
	"Iterable with empty strings returns spaces for each value",
	async () =>
		assertStrictEquals(await spaceJoin(toIterable(["", "", ""])), "  "),
);

Deno.test(
	"Iterable with undefined values returns empty stringified undefined values",
	async () =>
		assertStrictEquals(
			await spaceJoin(toIterable([undefined, undefined])),
			"undefined undefined",
		),
);
