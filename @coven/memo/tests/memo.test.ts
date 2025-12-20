import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { memo } from "@coven/memo";
import type { ReadonlyRecord } from "@coven/types";
import {
	assertEquals,
	assertNotStrictEquals,
	assertStrictEquals,
	assertThrows,
} from "@std/assert";

Deno.test("Tuples with same values are equal", () =>
	assertStrictEquals(memo(["✨", "🔮"]), memo(["✨", "🔮"])),
);

Deno.test("Tuples with similar values are different", () =>
	assertNotStrictEquals<ReadonlyArray<string>>(
		memo(["✨", "🔮"]),
		memo(["🔮", "✨"]),
	),
);

Deno.test("Tuples with similar different lengths", () =>
	assertNotStrictEquals<ReadonlyArray<string>>(
		memo(["✨", "🔮"]),
		memo(["✨", "🔮", "💀"]),
	),
);

Deno.test("Tuple preserves items", () =>
	assertEquals<ReadonlyArray<unknown>>(memo(["✨", "🔮"]), ["✨", "🔮"]),
);

Deno.test("Tuple with nested record works", () =>
	assertStrictEquals(
		memo([memo({ foo: "🔮" })]),
		memo([memo({ foo: "🔮" })]),
	),
);

Deno.test("Records with same values are equal", () =>
	assertStrictEquals(memo({ foo: "🔮" }), memo({ foo: "🔮" })),
);

Deno.test("Records with similar values are different", () =>
	assertNotStrictEquals<ReadonlyRecord>(
		memo({ foo: "🔮" }),
		memo({ bar: "✨" }),
	),
);

Deno.test("Record order doesn't matter", () =>
	assertStrictEquals(
		memo({ foo: "🔮", bar: "💀" }),
		memo({ bar: "💀", foo: "🔮" }),
	),
);

Deno.test("Record preserves shape", () =>
	assertEquals<ReadonlyRecord>(memo({ foo: "🔮", bar: "💀" }), {
		foo: "🔮",
		bar: "💀",
	}),
);

Deno.test("Record with nested tuple works", () =>
	assertStrictEquals(
		memo({ foo: memo(["🔮", "💀"]) }),
		memo({ foo: memo(["🔮", "💀"]) }),
	),
);

Deno.test("Empty tuple is the same as EMPTY_ARRAY", () =>
	assertStrictEquals(memo([]), EMPTY_ARRAY),
);

Deno.test("Empty record is the same as EMPTY_OBJECT", () =>
	assertStrictEquals(memo({}), EMPTY_OBJECT),
);

Deno.test("Record doesn't have a prototype", () =>
	// deno-lint-ignore coven/no-null
	assertStrictEquals(Object.getPrototypeOf(memo({ foo: "🔮" })), null),
);

Deno.test(
	"Trying to mutate, throws",
	() =>
		void assertThrows(() => {
			const output = memo({ foo: "🔮", bar: "💀" });

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
			([2, 2, 2, 3, 3, 3, 2, 2, 2].map((number) =>
				memoizedDouble(number),
			),
			times),
			2,
		),
);

Deno.test("Memoized function returns expected value", () =>
	assertStrictEquals(memoizedDouble(2), 4),
);
