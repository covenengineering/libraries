import { broadcast } from "@simulcast/core";
import { assert } from "@std/assert";
import { assertStrictEquals } from "@std/assert/strict-equals";

const TEST_EVENT = "test";

type TestRegistry = { [TEST_EVENT]: never };

const { emit, on } = broadcast<TestRegistry>();

const onTestEvent = on(TEST_EVENT);
const emitTestEvent = emit(TEST_EVENT);

Deno.test("emit with listeners calls the listeners", () => {
	let called = false;
	onTestEvent(() => (called = true));
	emitTestEvent();

	assert(called);
	// wanted: () => true,
});

Deno.test("on handler that's called manually twice, then unregistered calls the listener twice, then stop calling it", () => {
	let count = 0;
	const off = onTestEvent(() => (count += 1));
	emitTestEvent();
	emitTestEvent();
	off();
	emitTestEvent();
	assertStrictEquals(count, 2);
});
