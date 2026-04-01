import { assertEquals } from "@std/assert";
import { attempt } from "../attempt.ts";

const THROWS = true;
const DOES_NOT_THROW = false;

const throwingFunction = (shouldThrow: boolean) => {
	if (shouldThrow) {
		// deno-lint-ignore coven/no-throw
		throw new Error("fail");
	} else {
		return "success";
	}
};

const safeFunction = attempt(throwingFunction);

Deno.test("Returns expected value when function doesn't throw", () =>
	assertEquals(safeFunction(DOES_NOT_THROW), "success"),
);

Deno.test("Returns undefined when function throw", () =>
	assertEquals(safeFunction(THROWS), undefined),
);
