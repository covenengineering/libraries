import { isString } from "@coven/predicates";
import { assertStrictEquals } from "@std/assert";
import { find } from "../find.ts";

const findString = find<number | string>(isString);

Deno.test(
	"Array of numbers and strings containing search matching item gets the first string that matches",
	() => assertStrictEquals(findString([0, 1, "foo", 2, "bar"]), "foo"),
);

Deno.test(
	"Array of numbers without search matching item gets the first string",
	() => assertStrictEquals(findString([0, 1, 2]), undefined),
);

Deno.test(
	"Iterable of numbers and strings containing search matching item gets the first string that matches",
	() =>
		assertStrictEquals(
			findString(Iterator.from([0, 1, "foo", 2, "bar"])),
			"foo",
		),
);

Deno.test(
	"Iterable of numbers without search matching item gets the first string",
	() => assertStrictEquals(findString(Iterator.from([0, 1, 2])), undefined),
);
