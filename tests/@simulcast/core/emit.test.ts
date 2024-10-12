import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { emit } from "@simulcast/core";
import { assert, assertStrictEquals } from "@std/assert";

const TEST_EVENT = "test";

type TestRegistry = { [TEST_EVENT]: never };

Deno.test("emit with listeners calls the listeners", () => {
	let called = false;
	emit<TestRegistry>({
		[TEST_EVENT]: [() => (called = true)],
	})(TEST_EVENT)();

	assert(called);
});

Deno.test("emit without listeners does nothing", () =>
	assertStrictEquals(
		emit<TestRegistry>({ [TEST_EVENT]: EMPTY_ARRAY })(TEST_EVENT)(),
		undefined,
	));

Deno.test("emit without an event does nothing", () =>
	assertStrictEquals(
		emit<TestRegistry>(EMPTY_OBJECT)(TEST_EVENT)(),
		undefined,
	));
