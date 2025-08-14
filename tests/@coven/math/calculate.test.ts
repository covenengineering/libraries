import { calculate } from "@coven/math";
import { assertStrictEquals } from "@std/assert";

Deno.test("Simple addition returns correct value", () =>
	assertStrictEquals(calculate(0.1).plus(0.2).total, 0.3));

Deno.test("Simple division returns correct value", () =>
	assertStrictEquals(calculate(0.6).dividedBy(2).total, 0.3));

Deno.test("Simple multiplication returns correct value", () =>
	assertStrictEquals(calculate(0.1).times(3).total, 0.3));

Deno.test("Simple subtraction returns correct value", () =>
	assertStrictEquals(calculate(0.5).minus(0.2).total, 0.3));

Deno.test(
	"Complex operation combining all operations returns correct value",
	() =>
		assertStrictEquals(
			calculate(0.7).plus(0.3).dividedBy(4).times(2).minus(0.2).total,
			0.3,
		),
);

Deno.test("Memoized value isn't broken", () =>
	assertStrictEquals(
		calculate(2).plus(2).dividedBy(2).times(2).minus(2).total,
		2,
	));
