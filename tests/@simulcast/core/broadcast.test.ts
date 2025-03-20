import { broadcast } from "@simulcast/core";
import { assert, assertStrictEquals } from "@std/assert";

const { emitTest, onTest, on, emit } = broadcast<{ test: never }>();

const customEmitTest = emit("test");
const customOnTest = on("test");

Deno.test("Emit with handlers calls the handlers", () => {
	let called = false;
	onTest(() => (called = true));
	emitTest();

	assert(called);
});

Deno.test("Generated and manual emit are the same", () =>
	assertStrictEquals(emitTest, emit("test")),
);

Deno.test("Generated and manual on are the same", () =>
	assertStrictEquals(onTest, on("test")),
);

Deno.test("Custom emit with custom handlers calls the handlers", () => {
	let called = false;
	customOnTest(() => (called = true));
	customEmitTest();

	assert(called);
});

Deno.test(
	"On handler that's called manually twice, then unregistered calls the handler twice, then stop calling it",
	() => {
		let count = 0;
		const off = onTest(() => (count += 1));
		emitTest();
		emitTest();
		off();
		emitTest();
		assertStrictEquals(count, 2);
	},
);

const memoizedBroadcast = broadcast<{ memoized: never }>();

Deno.test("Generated functions are memoized", () => {
	const { emitMemoized: emitMemoizedA, onMemoized: onMemoizedA } =
		memoizedBroadcast;
	const { emitMemoized: emitMemoizedB, onMemoized: onMemoizedB } =
		memoizedBroadcast;

	assertStrictEquals(emitMemoizedA, emitMemoizedB);
	assertStrictEquals(onMemoizedA, onMemoizedB);
});
