import { memo } from "@coven/memo";
import { assertStrictEquals } from "@std/assert";
import { getBigIntParts } from "../getBigIntParts.ts";

Deno.test("13n returns digits 13 and an empty sign", () =>
	assertStrictEquals(getBigIntParts(13n), memo({ digits: "13", sign: "" })),
);

Deno.test('-13n returns digits 13 and an a "-" sign', () =>
	assertStrictEquals(getBigIntParts(-13n), memo({ digits: "13", sign: "-" })),
);
