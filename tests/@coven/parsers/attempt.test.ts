import { attempt } from "@coven/parsers";
import { assertEquals } from "@std/assert";

const throwingFunction = (shouldThrow: boolean) => {
	if (shouldThrow) {
		throw new Error("fail");
	} else {
		return "success";
	}
};

const safeFunction = attempt(throwingFunction);

Deno.test(
	"When a function that could throw doesn't throw, it returns the expected value",
	() =>
		// deno-lint-ignore no-boolean-literal-for-arguments
		assertEquals(safeFunction(false), "success"),
);

Deno.test("When a function that could throw throws, it returns undefined", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertEquals(safeFunction(true), undefined),
);
