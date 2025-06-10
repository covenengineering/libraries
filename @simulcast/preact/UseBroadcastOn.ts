import type { EventHandler, EventTypeDictionary } from "@simulcast/core";

/**
 * Broadcast `on` hook.
 */
export type UseBroadcastOn<Events extends EventTypeDictionary> = <
	Event extends keyof Events,
>(
	event: Event,
	handler: EventHandler<Events[Event]>,
	dependencies?: ReadonlyArray<unknown>,
) => void;
