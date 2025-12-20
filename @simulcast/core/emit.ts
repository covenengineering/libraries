import { forEach } from "@coven/iterables";
import { memo } from "@coven/memo";
import { has } from "@coven/predicates";
import type { Just } from "@coven/types";
import { applyTo, get } from "@coven/utils";
import type { EventHandler } from "./EventHandler.ts";
import type { EventRegistry } from "./EventRegistry.ts";
import type { EventTypeDictionary } from "./EventTypeDictionary.ts";

/**
 * Creates a curried function to emit events for handlers of the given
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
 * @param eventRegistry Record of event names mapped to an IterableIterator of handlers.
 * @returns Curried function with `eventRegistry` in context.
 */
export const emit = <Events extends EventTypeDictionary>(
	eventRegistry: EventRegistry<Events>,
): (<Event extends keyof Events>(
	event: Event,
) => EventHandler<Events[Event]>) =>
	memo(<Event extends keyof Events>(event: Event) => {
		const getEventHandlers = get(event) as (
			eventRegistry: EventRegistry<Events>,
		) => Just<EventRegistry<Events>[Event]>;
		const hasEventHandlers = has(event);

		return ((data) => {
			if (hasEventHandlers(eventRegistry)) {
				const applyToData = applyTo(data);
				const applyEachHandlerToData =
					forEach<EventHandler<typeof data>>(applyToData);
				const eventHandlers = getEventHandlers(eventRegistry);

				applyEachHandlerToData(eventHandlers);
			}
		}) as EventHandler<Events[Event]>;
	});
