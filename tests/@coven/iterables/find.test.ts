import { find } from "@coven/iterables";
import { isString } from "@coven/predicates";
import { assertEquals } from "@std/assert";
import { iterateArray } from "./utils.ts";

const findString = find<number | string>(isString);

Deno.test(
	"an array of numbers and strings containing search matching item gets the first string that matches",
	() => assertEquals(findString([0, 1, "foo", 2, "bar"]), "foo"),
);

Deno.test(
	"an array of numbers without search matching item gets the first string",
	() => assertEquals(findString([0, 1, 2]), undefined),
);

Deno.test(
	"an iterable of numbers and strings containing search matching item gets the first string that matches",
	() =>
		assertEquals(findString(iterateArray([0, 1, "foo", 2, "bar"])), "foo"),
);

Deno.test(
	"an iterable of numbers without search matching item gets the first string",
	() => assertEquals(findString(iterateArray([0, 1, 2])), undefined),
);
