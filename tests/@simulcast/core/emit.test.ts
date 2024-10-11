import { emit } from "@simulcast/core";
import { assert, assertStrictEquals } from "@std/assert";

const TEST_EVENT = "test";

type TestRegistry = { [TEST_EVENT]: never };

Deno.test("emit with listeners calls the listeners", () => {
	let called = false;
	emit<TestRegistry>({
		// eslint-disable-next-line no-param-reassign
		[TEST_EVENT]: [() => (called = true)],
	})(TEST_EVENT)();

	assert(called);
});

Deno.test("emit without listeners does nothing", () =>
	assertStrictEquals(
		emit<TestRegistry>({ [TEST_EVENT]: [] })(TEST_EVENT)(),
		undefined,
	));

Deno.test("emit without an event does nothing", () =>
	assertStrictEquals(emit<TestRegistry>({})(TEST_EVENT)(), undefined));