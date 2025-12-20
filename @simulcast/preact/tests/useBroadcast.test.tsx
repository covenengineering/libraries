import { broadcast, type EventRegistry } from "@simulcast/core";
import { useBroadcast } from "@simulcast/preact";
import { assertStrictEquals } from "@std/assert";
import { cleanup, render, screen } from "@testing-library/preact";
import { userEvent } from "@testing-library/user-event";
import type { ComponentProps, TargetedMouseEvent } from "preact";
import { useState } from "preact/hooks";

const CountComponent = (properties: ComponentProps<"button">) => {
	const [count, setCount] = useState(0);

	return (
		<button onClick={() => setCount(count + 1)} title="Add" {...properties}>
			{count}
		</button>
	);
};

const BroadcastComponent = ({
	registry,
	state,
	...properties
}: Readonly<
	ComponentProps<"button"> & {
		state: { calledTimes: number };
		registry: EventRegistry<{
			click: TargetedMouseEvent<HTMLButtonElement>;
		}>;
	}
>) => {
	const { emitClick, onClick } = useBroadcast(registry);

	onClick(() => state.calledTimes++);

	return (
		<button onClick={emitClick} title="Broadcast" {...properties}>
			Click me!
		</button>
	);
};

Deno.test.afterEach(cleanup);

Deno.test(
	"Broadcast's on handler is called once even when it re-renders",
	async () => {
		const state = { calledTimes: 0 };
		const { registry } = broadcast<{
			click: TargetedMouseEvent<HTMLButtonElement>;
		}>();

		render(
			<>
				<BroadcastComponent {...{ registry, state }} />
				<CountComponent />
			</>,
		);

		const addButton = screen.getByTitle<HTMLButtonElement>("Add");
		const broadcastButton =
			screen.getByTitle<HTMLButtonElement>("Broadcast");

		await userEvent.click(addButton); // Click button that will re-render once
		await userEvent.click(addButton); // Click button that will re-render twice
		await userEvent.click(broadcastButton); // Click broadcast button once
		assertStrictEquals(state.calledTimes, 1); // State should be updated once
		assertStrictEquals(addButton.textContent, "2"); // Even when it re-rendered twice
	},
);

Deno.test("Broadcast's on handler is removed when unmounted", async () => {
	const state1 = { calledTimes: 0 };
	const state2 = { calledTimes: 0 };
	const { registry } = broadcast<{
		click: TargetedMouseEvent<HTMLButtonElement>;
	}>();

	const App = () => {
		// deno-lint-ignore no-boolean-literal-for-arguments
		const [visible, setVisible] = useState(true);

		return (
			<>
				{visible ?
					<BroadcastComponent state={state1} {...{ registry }} />
				:	undefined}
				<BroadcastComponent
					state={state2}
					title="Always visible Broadcast"
					{...{ registry }}
				/>
				<button
					onClick={() => setVisible(!visible)}
					title="Toggle"
					type="button"
				>
					Toggle Visibility
				</button>
			</>
		);
	};

	render(<App />);

	const toggleButton = screen.getByTitle<HTMLButtonElement>("Toggle");
	const broadcastButton = screen.getByTitle<HTMLButtonElement>("Broadcast");
	const alwaysVisibleBroadcastButton = screen.getByTitle<HTMLButtonElement>(
		"Always visible Broadcast",
	);

	// Click broadcast button that will be removed from the DOM
	await userEvent.click(broadcastButton);
	// Click broadcast button that will stay in the DOM
	await userEvent.click(alwaysVisibleBroadcastButton);
	// Click toggle button (removes the first broadcast button)
	await userEvent.click(toggleButton);
	// Click broadcast button that stayed again
	await userEvent.click(alwaysVisibleBroadcastButton);
	assertStrictEquals(state1.calledTimes, 2); // State 1 should have registered events until removed
	assertStrictEquals(state2.calledTimes, 3); // State 2 should have registered all events
});
