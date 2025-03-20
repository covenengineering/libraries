import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { emit } from "@simulcast/core";
import { assert, assertStrictEquals } from "@std/assert";

const TEST_EVENT = "test";

type TestRegistry = { [TEST_EVENT]: never };

Deno.test("Emit with handlers calls the handlers", () => {
	let called = false;
	emit<TestRegistry>({
		[TEST_EVENT]: [() => (called = true)].values(),
	})(TEST_EVENT)();

	assert(called);
});

Deno.test("Emit without handlers does nothing", () =>
	assertStrictEquals(
		emit<TestRegistry>({ [TEST_EVENT]: EMPTY_ARRAY.values() })(
			TEST_EVENT,
		)(),
		undefined,
	),
);

Deno.test("Emit without an event does nothing", () =>
	assertStrictEquals(
		emit<TestRegistry>(EMPTY_OBJECT)(TEST_EVENT)(),
		undefined,
	),
);
