import type { EventHandler } from "./EventHandler.ts";
import type { EventTypeDictionary } from "./EventTypeDictionary.ts";

/**
 * Event emit function (takes an event name and returns an {@linkcode EventHandler}).
 */
export type BroadcastEmit<Events extends EventTypeDictionary> = <
	Event extends keyof Events,
>(
	event: Event,
) => EventHandler<Events[Event]>;
