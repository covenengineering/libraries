import { assertStrictEquals } from "@std/assert";
import { precise } from "../precise.ts";
import { preciseToNumber } from "../preciseToNumber.ts";

Deno.test("precise(13n, 0n) = 13", () =>
	assertStrictEquals(preciseToNumber(precise(13n, 0n)), 13),
);

Deno.test("precise(13n, 2n) = 1300", () =>
	assertStrictEquals(preciseToNumber(precise(13n, 2n)), 1300),
);

Deno.test("precise(-13n, 0n) = -13", () =>
	assertStrictEquals(preciseToNumber(precise(-13n, 0n)), -13),
);

Deno.test("precise(-13n, 2n) = -1300", () =>
	assertStrictEquals(preciseToNumber(precise(-13n, 2n)), -1300),
);

Deno.test("precise(131n, -1n) = 13.1", () =>
	assertStrictEquals(preciseToNumber(precise(131n, -1n)), 13.1),
);

Deno.test("precise(13_001n, -1n) = 1300.1", () =>
	assertStrictEquals(preciseToNumber(precise(13_001n, -1n)), 1300.1),
);

Deno.test("precise(-131n, -1n) = -13.1", () =>
	assertStrictEquals(preciseToNumber(precise(-131n, -1n)), -13.1),
);

Deno.test("precise(-13_001n, -1n) = -1300.1", () =>
	assertStrictEquals(preciseToNumber(precise(-13_001n, -1n)), -1300.1),
);

Deno.test("precise(-13_000n, 0n) = -13_000", () =>
	assertStrictEquals(preciseToNumber(precise(-13_000n, 0n)), -13_000),
);

Deno.test(
	"precise(3333333333333333333333333333333333333333333333333333333333333333n, -64n) = 1 / 3",
	() =>
		assertStrictEquals(
			preciseToNumber(
				precise(
					3333333333333333333333333333333333333333333333333333333333333333n,
					-64n,
				),
			),
			1 / 3,
		),
);

Deno.test(
	"precise(31428571428571428571428571428571428571428571428571428571428571428n, -64n) = 22 / 7",
	() =>
		assertStrictEquals(
			preciseToNumber(
				precise(
					31428571428571428571428571428571428571428571428571428571428571428n,
					-64n,
				),
			),
			22 / 7,
		),
);

Deno.test(
	"precise(31415926530119026040722614947737296840070086399613316415926530119n, -64n) = 103993 / 33102",
	() =>
		assertStrictEquals(
			preciseToNumber(
				precise(
					31415926530119026040722614947737296840070086399613316415926530119n,
					-64n,
				),
			),
			103993 / 33102,
		),
);
