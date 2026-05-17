import { assertStrictEquals } from "@std/assert";
import { precise } from "../precise.ts";
import { precisePrevious } from "../precisePrevious.ts";

Deno.test("13 - 1 = 12", () =>
	assertStrictEquals(precisePrevious(precise(13n, 0n)), precise(12n, 0n)),
);

Deno.test("42 - 1 = 41", () =>
	assertStrictEquals(precisePrevious(precise(42n, 0n)), precise(41n, 0n)),
);
