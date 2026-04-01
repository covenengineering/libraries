import { SIGIL } from "@coven/constants";
import { iterableToArray } from "@coven/iterables";
import { assertEquals } from "@std/assert";
import { mapWithTemplateHandlers } from "../mapWithTemplateHandlers.ts";

const testMap = mapWithTemplateHandlers({ bigint: (value) => `${value}n` });

Deno.test("Mapping works as expected", () =>
	assertEquals(iterableToArray(testMap([["Hello ", 13n]])), ["Hello 13n"]),
);

Deno.test("Mapping works as expected (with SIGIL)", () =>
	assertEquals(
		iterableToArray(
			testMap([
				["Hello ", 13n],
				["", SIGIL],
			]),
		),
		["Hello 13n", ""],
	),
);

Deno.test("Stringifies types outside the supported handlers", () =>
	assertEquals(iterableToArray(testMap([["Hello ", 13]])), ["Hello 13"]),
);
