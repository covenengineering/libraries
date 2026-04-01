import { SIGIL } from "@coven/constants";
import { iterableToArray } from "@coven/iterables";
import { assertEquals } from "@std/assert";
import { appendSigil } from "../appendSigil.ts";

Deno.test("Appends empty string to iterable", () =>
	assertEquals(iterableToArray(appendSigil(["✨", "🎃"])), [
		"✨",
		"🎃",
		SIGIL,
	]),
);

Deno.test("Appends empty string to empty iterable", () =>
	assertEquals(iterableToArray(appendSigil([])), [SIGIL]),
);
