import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { memo } from "@coven/memo";
import type { ReadonlyArray, ReadonlyRecord } from "@coven/types";
import {
	assertEquals,
	assertNotStrictEquals,
	assertStrictEquals,
	assertThrows,
} from "@std/assert";

Deno.test("Tuples with same values are equal", () =>
	assertStrictEquals(memo(["foo", "bar"]), memo(["foo", "bar"])),
);

Deno.test("Tuples with similar values are different", () =>
	assertNotStrictEquals<ReadonlyArray<string>>(
		memo(["foo", "bar"]),
		memo(["bar", "foo"]),
	),
);

Deno.test("Tuples with similar different lengths", () =>
	assertNotStrictEquals<ReadonlyArray<string>>(
		memo(["foo", "bar"]),
		memo(["foo", "bar", "baz"]),
	),
);

Deno.test("Tuple preserves items", () =>
	assertEquals<ReadonlyArray>(memo(["foo", "bar"]), ["foo", "bar"]),
);

Deno.test("Tuple with nested record works", () =>
	assertStrictEquals(
		memo([memo({ foo: "bar" })]),
		memo([memo({ foo: "bar" })]),
	),
);

Deno.test("Records with same values are equal", () =>
	assertStrictEquals(memo({ foo: "bar" }), memo({ foo: "bar" })),
);

Deno.test("Records with similar values are different", () =>
	assertNotStrictEquals<ReadonlyRecord>(
		memo({ foo: "bar" }),
		memo({ bar: "foo" }),
	),
);

Deno.test("Record order doesn't matter", () =>
	assertStrictEquals(
		memo({ foo: "bar", bar: "baz" }),
		memo({ bar: "baz", foo: "bar" }),
	),
);

Deno.test("Record preserves shape", () =>
	assertEquals<ReadonlyRecord>(memo({ foo: "bar", bar: "baz" }), {
		foo: "bar",
		bar: "baz",
	}),
);

Deno.test("Record with nested tuple works", () =>
	assertStrictEquals(
		memo({ foo: memo(["bar", "baz"]) }),
		memo({ foo: memo(["bar", "baz"]) }),
	),
);

Deno.test("Empty tuple is the same as EMPTY_ARRAY", () =>
	assertStrictEquals(memo([]), EMPTY_ARRAY),
);

Deno.test("Empty record is the same as EMPTY_OBJECT", () =>
	assertStrictEquals(memo({}), EMPTY_OBJECT),
);

Deno.test("Record doesn't have a prototype", () =>
	assertStrictEquals(Object.getPrototypeOf(memo({ foo: "bar" })), null),
);

Deno.test(
	"Trying to mutate, throws",
	() =>
		void assertThrows(() => {
			const output = memo({ foo: "bar", bar: "baz" });

			// @ts-expect-error Types get mad about mutations
			output.foo = "changed";
		}),
);

let times = 0;
const double = (value: number) => ((times += 1), value * 2);
const memoizedDouble = memo(double);

Deno.test(
	"Memoized double function and several operations duplicated values runs once per value",
	() =>
		assertStrictEquals(
			([2, 2, 2, 3, 3, 3, 2, 2, 2].map(number => memoizedDouble(number)),
			times),
			2,
		),
);

Deno.test("Memoized function returns expected value", () =>
	assertStrictEquals(memoizedDouble(2), 4),
);
