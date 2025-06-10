/** @jsxImportSource preact */
import { broadcast, type EventRegistry } from "@simulcast/core";
import { useBroadcast } from "@simulcast/preact";
import { assertStrictEquals } from "@std/assert";
import { type JSX, render } from "preact";
import { useState } from "preact/hooks";
import { setup } from "../../utils/setupPreactDOM.ts";
import { timeout } from "../../utils/timeout.ts";

const CountComponent = (properties: JSX.IntrinsicElements["button"]) => {
	const [count, setCount] = useState(0);

	return (
		<button
			className="add"
			onClick={() => setCount(count + 1)}
			{...properties}
		>
			{count}
		</button>
	);
};

const BroadcastComponent = ({
	className,
	registry,
	state,
	...properties
}: Readonly<
	JSX.IntrinsicElements["button"] & {
		state: { calledTimes: number };
		registry: EventRegistry<{
			click: JSX.TargetedMouseEvent<HTMLButtonElement>;
		}>;
	}
>) => {
	const { emitClick, onClick } = useBroadcast(registry);

	onClick(() => state.calledTimes++);

	return (
		<button
			className={className ?? "broadcast"}
			onClick={emitClick}
			{...properties}
		>
			Click me!
		</button>
	);
};

Deno.test(
	"Broadcast's on handler is called once even when it re-renders",
	async () => {
		const cleanup = setup();
		const state = { calledTimes: 0 };
		const root = document.querySelector("#root") as HTMLDivElement;
		const { registry } = broadcast<{
			click: JSX.TargetedMouseEvent<HTMLButtonElement>;
		}>();

		render(
			<>
				<BroadcastComponent {...{ registry, state }} />
				<CountComponent />
			</>,
			root,
		);

		const addButton = document.querySelector<HTMLButtonElement>(
			"button.add",
		) as HTMLButtonElement;
		const broadcastButton = document.querySelector<HTMLButtonElement>(
			"button.broadcast",
		) as HTMLButtonElement;

		addButton.click(); // Click button that will re-render once
		await timeout(100);
		addButton.click(); // Click button that will re-render twice
		await timeout(100);
		broadcastButton.click(); // Click broadcast button once
		assertStrictEquals(state.calledTimes, 1); // State should be updated once
		assertStrictEquals(addButton.textContent, "2"); // Even when it re-rendered twice

		cleanup();
	},
);

Deno.test("Broadcast's on handler is removed when unmounted", async () => {
	const cleanup = setup();
	const state1 = { calledTimes: 0 };
	const state2 = { calledTimes: 0 };
	const root = document.querySelector("#root") as HTMLDivElement;
	const { registry } = broadcast<{
		click: JSX.TargetedMouseEvent<HTMLButtonElement>;
	}>();

	const App = () => {
		// deno-lint-ignore no-boolean-literal-for-arguments
		const [visible, setVisible] = useState(true);

		return (
			<>
				{visible ?
					<BroadcastComponent
						state={state1}
						{...{ registry }}
					/>
				:	null}
				<BroadcastComponent
					className="always-visible-broadcast"
					state={state2}
					{...{ registry }}
				/>
				<button
					className="toggle"
					onClick={() => setVisible(!visible)}
					type="button"
				>
					Toggle Visibility
				</button>
			</>
		);
	};

	render(<App />, root);

	await timeout(100);

	const toggleButton = document.querySelector<HTMLButtonElement>(
		"button.toggle",
	) as HTMLButtonElement;
	const broadcastButton = document.querySelector<HTMLButtonElement>(
		"button.broadcast",
	) as HTMLButtonElement;
	const alwaysVisibleBroadcastButton =
		document.querySelector<HTMLButtonElement>(
			"button.always-visible-broadcast",
		) as HTMLButtonElement;

	await timeout(100);
	// Click broadcast button that will be removed from the DOM
	broadcastButton.click();
	// Click broadcast button that will stay in the DOM
	alwaysVisibleBroadcastButton.click();
	// Click toggle button (removes the first broadcast button)
	toggleButton.click();
	await timeout(100);
	// Click broadcast button that stayed again
	alwaysVisibleBroadcastButton.click();
	assertStrictEquals(state1.calledTimes, 2); // State 1 should have registered events until removed
	assertStrictEquals(state2.calledTimes, 3); // State 2 should have registered all events

	cleanup();
});
