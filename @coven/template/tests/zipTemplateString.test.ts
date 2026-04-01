import { SIGIL } from "@coven/constants";
import { iterableToArray } from "@coven/iterables";
import { assertEquals } from "@std/assert";
import { zipTemplateString } from "../zipTemplateString.ts";

Deno.test("Turns template string into an iterable of tuples", () =>
	assertEquals(iterableToArray(zipTemplateString`Hello ${13n}`), [
		["Hello ", 13n],
		["", SIGIL],
	]),
);

Deno.test("Turns empty template string into an iterable of tuples", () =>
	assertEquals(iterableToArray(zipTemplateString``), [["", SIGIL]]),
);

Deno.test(
	"Turns template string with no expressions into an iterable of tuples",
	() =>
		assertEquals(iterableToArray(zipTemplateString`Hello`), [
			["Hello", SIGIL],
		]),
);
