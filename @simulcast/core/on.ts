import { append, filter, toIterable } from "@coven/iterables";
import { memo } from "@coven/memo";
import { has } from "@coven/predicates";
import type { Effect, Just } from "@coven/types";
import { get, mutate, set } from "@coven/utils";
import type { EventHandler } from "./EventHandler.ts";
import type { EventRegistry } from "./EventRegistry.ts";
import type { EventTypeDictionary } from "./EventTypeDictionary.ts";

/**
 * Creates a curried function to listen for calls to an event in the passed
 * `eventRegistry`.
 *
 * @example
 * ```typescript
 * import { emit, type EventRegistry } from "@simulcast/core";
 *
 * const exampleEvent = "example";
 * const eventRegistry: EventRegistry<{ [exampleEvent]: string }> = {};
 * const onRegistry = on(eventRegistry);
 * const emitRegistry = emit(eventRegistry);
 * const onEvent = onRegistry(exampleEvent);
 * const emitEvent = emitRegistry(exampleEvent);
 * const offEvent = onEvent(console.log);
 * emitEvent("Will log");
 * offEvent();
 * emitEvent("Will not log");
 * ```
 * @template Events Event registry.
 * @param eventRegistry Record of event names mapped to an array of handlers.
 * @returns Curried function with `eventRegistry` in context.
 */
export const on = <Events extends EventTypeDictionary>(
	eventRegistry: EventRegistry<Events>,
): (<Event extends keyof Events>(
	event: Event,
) => (handler: EventHandler<Events[Event]>) => Effect) =>
	memo(<Event extends keyof Events>(event: Event) => {
		const getEventHandlers = get(event) as (
			eventRegistry: EventRegistry<Events>,
		) => Just<EventRegistry<Events>[Event]>;
		const setEventHandlers = set(event);
		const hasEventHandlers = has(event);

		return (handler: EventHandler<Events[Event]>) => {
			const handlerIterable = toIterable(handler);
			const appendHandler = append(handlerIterable);
			const filterHandler = filter(
				currentHandler => currentHandler !== handler,
			);
			const eventHandlers = getEventHandlers(eventRegistry);
			const setNewHandlers = setEventHandlers(
				hasEventHandlers(eventRegistry) ?
					appendHandler(eventHandlers)
				:	handlerIterable,
			);
			const commitUpdate = mutate(setNewHandlers(eventRegistry));

			commitUpdate(eventRegistry);

			return () => {
				const currentEventHandlers = getEventHandlers(eventRegistry);
				const filteredHandlers = filterHandler(currentEventHandlers);
				const setFilteredHandlers = setEventHandlers(filteredHandlers);
				const commitRemove = mutate(setFilteredHandlers(eventRegistry));

				commitRemove(eventRegistry);
			};
		};
	});
