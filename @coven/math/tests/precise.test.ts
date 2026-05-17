import { parseDecimal } from "@coven/parsers";
import { assertStrictEquals } from "@std/assert";
import { EXPONENT_SIZE } from "../EXPONENT_SIZE.ts";
import { precise } from "../precise.ts";
import { PRECISE_ONE } from "../PRECISE_ONE.ts";

Deno.test(
	`precise(1n, 5n) = 0x11000011010100000${"0".repeat(parseDecimal(EXPONENT_SIZE) ?? 0)}`,
	() =>
		assertStrictEquals(
			precise(1n, 5n),
			BigInt(
				`0b11000011010100000${"0".repeat(parseDecimal(EXPONENT_SIZE) ?? 0)}`,
			),
		),
);

Deno.test(
	`precise(1n, 0n) = 0x1${"0".repeat(parseDecimal(EXPONENT_SIZE) ?? 0)}`,
	() =>
		assertStrictEquals(
			PRECISE_ONE,
			BigInt(`0b1${"0".repeat(parseDecimal(EXPONENT_SIZE) ?? 0)}`),
		),
);
