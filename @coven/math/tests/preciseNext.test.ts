import { assertStrictEquals } from "@std/assert";
import { precise } from "../precise.ts";
import { preciseNext } from "../preciseNext.ts";

Deno.test("13 + 1 = 14", () =>
	assertStrictEquals(preciseNext(precise(13n, 0n)), precise(14n, 0n)),
);

Deno.test("42 + 1 = 43", () =>
	assertStrictEquals(preciseNext(precise(42n, 0n)), precise(43n, 0n)),
);
