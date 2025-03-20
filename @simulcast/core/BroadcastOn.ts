import type { Effect } from "@coven/types";
import type { EventHandler } from "./EventHandler.ts";
import type { EventTypeDictionary } from "./EventTypeDictionary.ts";

/**
 * Event on function (takes an event name and a handler and returns an
 * {@linkcode Effect}).
 */
export type BroadcastOn<Events extends EventTypeDictionary> = <
	Event extends keyof Events,
>(
	event: Event,
) => (handler: EventHandler<Events[Event]>) => Effect;
