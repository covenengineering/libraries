import { memoize } from "@coven/utils";
import { assertStrictEquals } from "@std/assert";

let times = 0;
const double = (value: number) => ((times += 1), value * 2);
const memoizedDouble = memoize(double);

Deno.test("Memoized double function and several operations duplicated values runs once per value", () =>
	assertStrictEquals(
		([2, 2, 2, 3, 3, 3, 2, 2, 2].map(memoizedDouble), times),
		2,
	));
