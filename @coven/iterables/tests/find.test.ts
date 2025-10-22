import { find } from "@coven/iterables";
import { isString } from "@coven/predicates";
import { assertEquals } from "@std/assert";

const findString = find<number | string>(isString);

Deno.test(
	"Array of numbers and strings containing search matching item gets the first string that matches",
	() => assertEquals(findString([0, 1, "foo", 2, "bar"]), "foo"),
);

Deno.test(
	"Array of numbers without search matching item gets the first string",
	() => assertEquals(findString([0, 1, 2]), undefined),
);

Deno.test(
	"Iterable of numbers and strings containing search matching item gets the first string that matches",
	() =>
		assertEquals(findString(Iterator.from([0, 1, "foo", 2, "bar"])), "foo"),
);

Deno.test(
	"Iterable of numbers without search matching item gets the first string",
	() => assertEquals(findString(Iterator.from([0, 1, 2])), undefined),
);
