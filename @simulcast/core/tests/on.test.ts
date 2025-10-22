import { EMPTY_ARRAY } from "@coven/constants";
import { forEach } from "@coven/iterables";
import { applyTo, createObject } from "@coven/utils";
import { type EventHandler, type EventRegistry, on } from "@simulcast/core";
import { assert, assertStrictEquals } from "@std/assert";

const TEST_EVENT = "test";

const registry = createObject<EventRegistry<{ [TEST_EVENT]: never }>>();

const manualEmit = () =>
	forEach<EventHandler<never>>(applyTo(undefined))(
		registry[TEST_EVENT] ?? EMPTY_ARRAY,
	);

const onTestEvent = on(registry)(TEST_EVENT);

Deno.test("On handler that's called manually calls the handler", () => {
	let called = false;

	onTestEvent(() => (called = true));
	manualEmit();

	assert(called);
});

Deno.test(
	"On handler that's called manually twice, then unregistered calls the handler twice, then stop calling it",
	() => {
		let count = 0;
		const off = onTestEvent(() => (count += 1));
		manualEmit();
		manualEmit();
		off();
		manualEmit();
		assertStrictEquals(count, 2);
	},
);
