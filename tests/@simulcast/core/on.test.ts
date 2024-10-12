import { EMPTY_ARRAY } from "@coven/constants";
import { forEach } from "@coven/iterables";
import { applyTo } from "@coven/utils";
import { type EventListener, type EventRegistry, on } from "@simulcast/core";
import { assert, assertStrictEquals } from "@std/assert";

const TEST_EVENT = "test";

const registry: EventRegistry<{ [TEST_EVENT]: never }> = Object.create(null);

const manualEmit = () =>
	forEach<EventListener<never>>(applyTo(undefined))(
		registry[TEST_EVENT] ?? EMPTY_ARRAY,
	);

const onTestEvent = on(registry)(TEST_EVENT);

Deno.test("on handler that's called manually calls the listener", () => {
	let called = false;

	onTestEvent(() => (called = true));
	manualEmit();

	assert(called);
});

Deno.test(
	"on handler that's called manually twice, then unregistered calls the listener twice, then stop calling it",
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
