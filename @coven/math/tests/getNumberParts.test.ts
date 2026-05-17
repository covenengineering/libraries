import { memo } from "@coven/memo";
import { assertStrictEquals } from "@std/assert";
import { getNumberParts } from "../getNumberParts.ts";

Deno.test(
	"13 returns integral 13 and an undefined fractional and exponent",
	() =>
		assertStrictEquals(
			getNumberParts(13),
			memo({
				exponent: undefined,
				fractional: undefined,
				integral: "13",
			}),
		),
);

Deno.test(
	"13.42 returns integral 13, fractional 42 and undefined exponent",
	() =>
		assertStrictEquals(
			getNumberParts(13.42),
			memo({ integral: "13", fractional: "42", exponent: undefined }),
		),
);

Deno.test(
	"13e42 returns integral 13, undefined fractional and exponent 42",
	() =>
		assertStrictEquals(
			getNumberParts("13e42"),
			memo({ integral: "13", fractional: undefined, exponent: "42" }),
		),
);

Deno.test("13.42e42 returns integral 13, fractional 42 and exponent 42", () =>
	assertStrictEquals(
		getNumberParts("13.42e42"),
		memo({ integral: "13", fractional: "42", exponent: "42" }),
	),
);

Deno.test("-13 returns integral 13, fractional 42 and undefined exponent", () =>
	assertStrictEquals(
		getNumberParts(-13),
		memo({ integral: "-13", fractional: undefined, exponent: undefined }),
	),
);
