import { broadcast, type EventRegistry } from "@simulcast/core";
import { useBroadcast } from "@simulcast/vue";
import { assertStrictEquals } from "@std/assert";
import { mount } from "@vue/test-utils";
import { defineComponent, type Ref, ref } from "vue";

// Vue has a leaky setTimeout, this gets rid of it:
Object.assign(globalThis, {
	__VUE_DEVTOOLS_GLOBAL_HOOK__: { emit: () => undefined },
});

const CountComponent = defineComponent({
	setup(): { count: Ref<number, number> } {
		const count = ref(0);

		return { count };
	},
	template: `
		<button
			@click="count++"
			class="add"
			type="button"
		>
			{{ count }}
		</button>
	`,
});

const BroadcastComponent = defineComponent<{
	class?: string;
	registry: EventRegistry<{ click: MouseEvent }>;
	state: { calledTimes: number };
}>({
	setup({ class: className = "broadcast", registry, state }): {
		className: string;
		emitClick: (event: MouseEvent) => void;
	} {
		const { emitClick, onClick } = useBroadcast(registry);

		onClick(() => state.calledTimes++);

		return { className, emitClick };
	},
	props: { registry: { type: Object }, state: { type: Object } },
	template: `
		<button
			:class="className"
			@click="emitClick"
			type="button"
		>
			Click me!
		</button>
	`,
});

Deno.test(
	"Broadcast's on handler is called once even when it re-renders",
	async () => {
		const state = { calledTimes: 0 };
		const { registry } = broadcast<{ click: MouseEvent }>();

		const wrapper = mount(
			defineComponent({
				components: { BroadcastComponent, CountComponent },
				setup: () => ({ registry, state }),
				template: `
					<BroadcastComponent :registry="registry" :state="state" />
					<CountComponent />
				`,
			}),
		);

		const addButton = wrapper.find<HTMLButtonElement>("button.add");
		const broadcastButton = wrapper.find<HTMLButtonElement>(
			"button.broadcast",
		);

		await addButton.trigger("click"); // Click button that will re-render once
		await addButton.trigger("click"); // Click button that will re-render twice
		await broadcastButton.trigger("click"); // Click broadcast button once
		assertStrictEquals(state.calledTimes, 1); // State should be updated once
		assertStrictEquals(addButton?.text(), "2"); // Even when it re-rendered twice
	},
);

Deno.test("Broadcast's on handler is removed when unmounted", async () => {
	const state1 = { calledTimes: 0, name: "state1" };
	const state2 = { calledTimes: 0, name: "state2" };
	const { registry } = broadcast<{ click: MouseEvent }>();

	const wrapper = mount(
		defineComponent({
			components: { BroadcastComponent },
			setup(): {
				registry: typeof registry;
				state1: typeof state1;
				state2: typeof state2;
				visible: Ref<boolean, boolean>;
			} {
				// deno-lint-ignore no-boolean-literal-for-arguments
				const visible = ref(true);

				return { registry, state1, state2, visible };
			},
			template: `
				<BroadcastComponent
					v-if="visible"
					:state="state1"
					:registry="registry"
				/>
				<BroadcastComponent
					class="always-visible-broadcast"
					:state="state2"
					:registry="registry"
				/>
				<button
					class="toggle"
					@click="visible = !visible"
					type="button"
				>
					Toggle Visibility
				</button>
		`,
		}),
	);

	const toggleButton = wrapper.find<HTMLButtonElement>("button.toggle");
	const broadcastButton = wrapper.find<HTMLButtonElement>("button.broadcast");
	const alwaysVisibleBroadcastButton = wrapper.find<HTMLButtonElement>(
		"button.always-visible-broadcast",
	);
	// Click broadcast button that will be removed from the DOM
	await broadcastButton.trigger("click");
	// Click broadcast button that will stay in the DOM
	await alwaysVisibleBroadcastButton.trigger("click");
	// Click toggle button (removes the first broadcast button)
	await toggleButton.trigger("click");
	// Click broadcast button that stayed again
	await alwaysVisibleBroadcastButton.trigger("click");

	assertStrictEquals(state1.calledTimes, 2); // State 1 should have registered events until removed
	assertStrictEquals(state2.calledTimes, 3); // State 2 should have registered all events
});
