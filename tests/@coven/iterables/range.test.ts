import { iterableToArray, range } from "@coven/iterables";
import { assertEquals } from "@std/assert";

const range1 = range(1);
const rangeFrom5 = range1(5);

Deno.test(
	"a range to a bigger number (step 1) returns iterable from small number to big number",
	() => assertEquals(iterableToArray(rangeFrom5(10)), [5, 6, 7, 8, 9, 10]),
);

Deno.test(
	"a range to the same number (step 1) returns iterable with only the given number",
	() => assertEquals(iterableToArray(rangeFrom5(5)), [5]),
);

Deno.test(
	"a range to a smaller number (step 1) returns iterable from big number to small number",
	() => assertEquals(iterableToArray(rangeFrom5(0)), [5, 4, 3, 2, 1, 0]),
);
