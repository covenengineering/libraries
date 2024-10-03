import { applyTo } from "@coven/utils";
import { assertStrictEquals } from "@std/assert";

const double = (value: number) => value * 2;
const applyTo21 = applyTo(21);

Deno.test("A number and a duplicate function returns double of number", () =>
	assertStrictEquals(applyTo21(double), 42),
);
