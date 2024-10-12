import type { Emitter } from "./Emitter.ts";
import type { EventListener } from "./EventListener.ts";
import type { EventTypeDictionary } from "./EventTypeDictionary.ts";

/**
 * Object containing `emit` and `on` methods with a shared event dictionary.
 */
export type BroadcastObject<Events extends EventTypeDictionary> = {
	/**
	 * Emit events for the current broadcast.
	 *
	 * @param event Event to be emitted.
	 * @returns Curried emitter function that might or might not take an
	 * argument.
	 */
	readonly emit: <Event extends keyof Events>(
		event: Event,
	) => Emitter<Events[Event]>;

	/**
	 * Listen for events of the current broadcast.
	 *
	 * @param event Event to be listened.
	 * @returns Curried listener function that might or might not receive an
	 * argument. This function returns the `off` function to stop listening.
	 */
	readonly on: <Event extends keyof Events>(
		event: Event,
	) => (listener: EventListener<Events[Event]>) => () => undefined;
};
