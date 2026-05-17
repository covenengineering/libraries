import { assertStrictEquals } from "@std/assert";
import { getNumberParts } from "../getNumberParts.ts";
import { numberPartsToPrecise } from "../numberPartsToPrecise.ts";
import { precise } from "../precise.ts";

Deno.test("Parts of 13 are equal to a precise of 13", () =>
	assertStrictEquals(
		numberPartsToPrecise(getNumberParts("13")),
		precise(13n, 0n),
	),
);

Deno.test("Parts of 13.42 are equal to a precise of 13.42", () =>
	assertStrictEquals(
		numberPartsToPrecise(getNumberParts("13.42")),
		precise(1342n, -2n),
	),
);

Deno.test("Parts of 13e42 are equal to a precise of 13e42", () =>
	assertStrictEquals(
		numberPartsToPrecise(getNumberParts("13e42")),
		precise(13n, 42n),
	),
);

Deno.test("Parts of 13.42e42 are equal to a precise of 13.42e42", () =>
	assertStrictEquals(
		numberPartsToPrecise(getNumberParts("13.42e42")),
		precise(1342n, 40n),
	),
);
