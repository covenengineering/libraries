import type { Effect } from "@coven/types";
import type { BroadcastEmit } from "./BroadcastEmit.ts";
import type { BroadcastOn } from "./BroadcastOn.ts";
import type { EventHandler } from "./EventHandler.ts";
import type { EventRegistry } from "./EventRegistry.ts";
import type { EventTypeDictionary } from "./EventTypeDictionary.ts";

/**
 * Object containing `emit` and `on` methods with a shared event dictionary.
 */
export type BroadcastObject<Events extends EventTypeDictionary> = {
	/**
	 * Emit events for the current broadcast registry.
	 *
	 * @param event Event to be emitted.
	 * @returns Curried emitter function that might or might not take an
	 * argument.
	 */
	readonly emit: BroadcastEmit<Events>;

	/**
	 * Listen for events of the current broadcast registry.
	 *
	 * @param event Event to be listened.
	 * @returns Curried handler function that might or might not receive an
	 * argument. This function returns the `off` function to stop listening.
	 */
	readonly on: BroadcastOn<Events>;

	/**
	 * Broadcast registry.
	 */
	readonly registry: EventRegistry<Events>;
} & {
	/**
	 * Dynamically generated `emit`.
	 */
	readonly [Event in keyof Events as `emit${Capitalize<keyof Events & string>}`]: EventHandler<
		Events[Event]
	>;
} & {
	/**
	 * Dynamically generated `on`.
	 */
	readonly [Event in keyof Events as `on${Capitalize<keyof Events & string>}`]: (
		handler: EventHandler<Events[Event]>,
	) => Effect;
};
