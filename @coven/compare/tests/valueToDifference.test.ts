import { EMPTY_ARRAY, SIGIL } from "@coven/constants";
import { assertEquals } from "@std/assert";
import { differentiate } from "../differentiate.ts";
import { flat } from "../flat.ts";

Deno.test("When both values are missing returns an empty difference", () =>
	assertEquals(flat(differentiate(SIGIL)(SIGIL)), EMPTY_ARRAY),
);
