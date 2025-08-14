/** @jsxImportSource react */
import { broadcast, type EventRegistry } from "@simulcast/core";
import { useBroadcast } from "@simulcast/react";
import { assertStrictEquals } from "@std/assert";
import { type JSX, type MouseEvent, useState } from "react";
import { createRoot } from "react-dom/client";
import { mockDOM } from "../../utils/mockDOM.ts";
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
		registry: EventRegistry<{ click: MouseEvent<HTMLButtonElement> }>;
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
		mockDOM();
		const root = createRoot(
			document.querySelector("#root") as HTMLDivElement,
		);

		const state = { calledTimes: 0 };
		const { registry } = broadcast<{
			click: MouseEvent<HTMLButtonElement>;
		}>();

		root.render(
			(
				<>
					<BroadcastComponent {...{ registry, state }} />
					<CountComponent />
				</>
			),
		);

		await timeout(3);

		const addButton = document.querySelector<HTMLButtonElement>(
			"button.add",
		) as HTMLButtonElement;
		const broadcastButton = document.querySelector<HTMLButtonElement>(
			"button.broadcast",
		) as HTMLButtonElement;

		await timeout();
		addButton.click(); // Click button that will re-render once
		await timeout();
		addButton.click(); // Click button that will re-render twice
		await timeout();
		broadcastButton.click(); // Click broadcast button once
		assertStrictEquals(state.calledTimes, 1); // State should be updated once
		assertStrictEquals(addButton.textContent, "2"); // Even when it re-rendered twice
	},
);

Deno.test("Broadcast's on handler is removed when unmounted", async () => {
	mockDOM();
	const root = createRoot(document.querySelector("#root") as HTMLDivElement);

	const state1 = { calledTimes: 0 };
	const state2 = { calledTimes: 0 };
	const { registry } = broadcast<{
		click: MouseEvent<HTMLButtonElement>;
	}>();

	const App = () => {
		// deno-lint-ignore no-boolean-literal-for-arguments
		const [visible, setVisible] = useState(true);

		return (
			<>
				{visible
					? (
						<BroadcastComponent
							{...{ registry }}
							state={state1}
						/>
					)
					: null}
				<BroadcastComponent
					className="always-visible-broadcast"
					{...{ registry }}
					state={state2}
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

	root.render(<App />);

	await timeout(1);

	const toggleButton = document.querySelector<HTMLButtonElement>(
		"button.toggle",
	) as HTMLButtonElement;
	const broadcastButton = document.querySelector<HTMLButtonElement>(
		"button.broadcast",
	) as HTMLButtonElement;
	const alwaysVisibleBroadcastButton = document.querySelector<
		HTMLButtonElement
	>(
		"button.always-visible-broadcast",
	) as HTMLButtonElement;

	// Click broadcast button that will be removed from the DOM
	await timeout();
	broadcastButton.click();
	await timeout();
	// Click broadcast button that will stay in the DOM
	alwaysVisibleBroadcastButton.click();
	await timeout();
	// Click toggle button (removes the first broadcast button)
	toggleButton.click();
	await timeout();
	// Click broadcast button that stayed again
	alwaysVisibleBroadcastButton.click();
	await timeout();
	assertStrictEquals(state1.calledTimes, 2); // State 1 should have registered events until removed
	assertStrictEquals(state2.calledTimes, 3); // State 2 should have registered all events
});
