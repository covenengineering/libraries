import { forEach, range } from "@coven/iterables";
import { assertStrictEquals } from "@std/assert";
import { getPreciseCoefficient } from "../getPreciseCoefficient.ts";
import { precise } from "../precise.ts";

const checkGetPreciseCoefficient = (coefficient: bigint) =>
	assertStrictEquals(
		getPreciseCoefficient(precise(coefficient, 0n)),
		coefficient,
	);

Deno.test("Can get coefficient bondaries from a Precise", () => {
	checkGetPreciseCoefficient(0n);
	checkGetPreciseCoefficient(1n);
	checkGetPreciseCoefficient(-1n);
});

Deno.test("Can get coefficient powers of 2 from a Precise", () =>
	forEach(
		(index: bigint) => (
			checkGetPreciseCoefficient(2n ** index),
			checkGetPreciseCoefficient(-(2n ** index))
		),
	)(range(1n)(0n)(54n)),
);
