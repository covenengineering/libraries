import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import type { ReadonlyRecord } from "@coven/types";
import {
	assertEquals,
	assertNotStrictEquals,
	assertStrictEquals,
	assertThrows,
} from "@std/assert";
import { memo } from "../memo.ts";

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
	assertStrictEquals(memo([{ foo: "🔮" }]), memo([{ foo: "🔮" }])),
);

Deno.test("Records with same values are equal", () =>
	assertStrictEquals(memo({ foo: "🔮" }), memo({ foo: "🔮" })),
);

const TEST_SYMBOL = Symbol("Test");

Deno.test("Records with symbols and numbers work", () =>
	assertStrictEquals(
		memo({ [TEST_SYMBOL]: "💀", [0]: "🔮", "1": "✨" }),
		memo({ [TEST_SYMBOL]: "💀", [0]: "🔮", "1": "✨" }),
	),
);

Deno.test("Records with misused symbols (inline) fail", () =>
	assertNotStrictEquals(
		memo({ [Symbol("Test")]: "💀", [0]: "🔮", "1": "✨" }),
		memo({ [Symbol("Test")]: "💀", [0]: "🔮", "1": "✨" }),
	),
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
		memo({ foo: ["🔮", "💀"] }),
		memo({ foo: ["🔮", "💀"] }),
	),
);

Deno.test("Empty tuple is the same as EMPTY_ARRAY", () =>
	assertStrictEquals(memo([]), EMPTY_ARRAY),
);

Deno.test("Empty record is the same as EMPTY_OBJECT", () =>
	assertStrictEquals(memo({}), EMPTY_OBJECT),
);

Deno.test("Record doesn't have a prototype", () =>
	assertStrictEquals(
		Object.getPrototypeOf(memo({ foo: "🔮" })),
		// deno-lint-ignore coven/no-null
		null,
	),
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
