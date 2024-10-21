import { forEach } from "@coven/iterables";
import { has } from "@coven/predicates";
import type { Just } from "@coven/types";
import { applyTo, get } from "@coven/utils";
import type { Emitter } from "./Emitter.ts";
import type { EventListener } from "./EventListener.ts";
import type { EventRegistry } from "./EventRegistry.ts";
import type { EventTypeDictionary } from "./EventTypeDictionary.ts";

/**
 * Creates a curried function to emit events for listeners of the given
 * `eventRegistry`.
 *
 * @example
 * ```typescript
 * const eventRegistry = {};
 * const emitRegistry = emit(eventRegistry);
 * const emitEvent = emitRegistry("event");
 * emitEvent("data");
 * ```
 * @template Events Event registry.
 * @param eventRegistry Record of event names mapped to an array of listeners.
 * @returns Curried function with `eventRegistry` in context.
 */
export const emit = <Events extends EventTypeDictionary>(
	eventRegistry: EventRegistry<Events>,
): <Event extends keyof Events>(event: Event) => Emitter<Events[Event]> =>
<Event extends keyof Events>(event: Event) => {
	const getEvent = get(event) as (
		eventRegistry: EventRegistry<Events>,
	) => Just<EventRegistry<Events>[Event]>;
	const hasEvent = has(event);

	return ((data) =>
		hasEvent(eventRegistry)
			? forEach<EventListener<typeof data>>(applyTo(data))(
				getEvent(eventRegistry),
			)
			: undefined) as Emitter<Events[Event]>;
};
