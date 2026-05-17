import { assertStrictEquals } from "@std/assert";
import { precise } from "../precise.ts";
import { preciseNegate } from "../preciseNegate.ts";

Deno.test("13 negated is -13", () =>
	assertStrictEquals(preciseNegate(precise(13n, 0n)), precise(-13n, 0n)),
);
