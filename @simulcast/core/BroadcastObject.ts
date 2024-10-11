import type { Emitter } from "./Emitter.ts";
import type { EventListener } from "./EventListener.ts";
import type { EventTypeDictionary } from "./EventTypeDictionary.ts";

/**
 * Object containing `emit` and `on` methods with a shared event dictionary.
 */
export type BroadcastObject<Events extends EventTypeDictionary> = {
	readonly emit: <Event extends keyof Events>(
		event: Event,
	) => Emitter<Events[Event]>;
	readonly on: <Event extends keyof Events>(
		event: Event,
	) => (listener: EventListener<Events[Event]>) => () => undefined;
};
