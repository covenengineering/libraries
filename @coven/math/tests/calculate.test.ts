import { assertStrictEquals } from "@std/assert";
import { calculate } from "../calculate.ts";

Deno.test("0.1 + 0.2 = 0.3", () =>
	assertStrictEquals(calculate(0.1).plus(0.2).total, 0.3),
);

Deno.test("0.6 / 2 = 0.3", () =>
	assertStrictEquals(calculate(0.6).dividedBy(2).total, 0.3),
);

Deno.test("0.1 * 3 = 0.3", () =>
	assertStrictEquals(calculate(0.1).times(3).total, 0.3),
);

Deno.test("0.5 - 0.2 = 0.3", () =>
	assertStrictEquals(calculate(0.5).minus(0.2).total, 0.3),
);

Deno.test("1 + 0.1 - 1 = 0.1", () =>
	assertStrictEquals(calculate(1).plus(0.1).minus(1).total, 0.1),
);

Deno.test("1e16 + 0.1 - 1e16 = 0.1", () =>
	assertStrictEquals(calculate(1e16).plus(0.1).minus(1e16).total, 0.1),
);

Deno.test("((0.7 + 0.3) / 4 * 2) - 0.2 = 0.3", () =>
	assertStrictEquals(
		calculate(0.7).plus(0.3).dividedBy(4).times(2).minus(0.2).total,
		0.3,
	),
);

Deno.test("((2 + 2) / 2 * 2) - 2 = 2", () =>
	assertStrictEquals(
		calculate(2).plus(2).dividedBy(2).times(2).minus(2).total,
		2,
	),
);
