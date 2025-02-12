import { append, filter, toIterable } from "@coven/iterables";
import { has } from "@coven/predicates";
import type { Effect, Just } from "@coven/types";
import { get, memoize, mutate, set } from "@coven/utils";
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
): <Event extends keyof Events>(
	event: Event,
) => (handler: EventHandler<Events[Event]>) => Effect =>
	memoize(<Event extends keyof Events>(event: Event) => {
		const getEvent = get(event) as (
			eventRegistry: EventRegistry<Events>,
		) => Just<EventRegistry<Events>[Event]>;
		const setEvent = set(event);
		const hasEvent = has(event);

		return (handler: EventHandler<Events[Event]>) => (
			mutate(
				setEvent(
					hasEvent(eventRegistry)
						? append(toIterable(handler))(getEvent(eventRegistry))
						: toIterable(handler),
				)(eventRegistry),
			)(eventRegistry), () =>
				void mutate(
					setEvent(
						filter((currentHandler) => currentHandler !== handler)(
							eventRegistry[event] as IterableIterator<
								Events[Event]
							>,
						),
					)(eventRegistry),
				)(eventRegistry)
		);
	});
