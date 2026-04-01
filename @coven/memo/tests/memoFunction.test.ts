import { assertStrictEquals } from "@std/assert";
import { memoFunction } from "../memoFunction.ts";

let times = 0;
const double = (value: number) => ((times += 1), value * 2);
const memoizedDouble = memoFunction(double);

Deno.test(
	"Cached double function and several operations duplicated values runs once per value",
	() =>
		assertStrictEquals(
			([2, 2, 2, 3, 3, 3, 2, 2, 2].map((number) =>
				memoizedDouble(number),
			),
			times),
			2,
		),
);

Deno.test("Cached function returns expected value", () =>
	assertStrictEquals(memoizedDouble(2), 4),
);
