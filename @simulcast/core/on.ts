import { append, filter, toIterable } from "@coven/iterables";
import { has } from "@coven/predicates";
import type { Just } from "@coven/types";
import { get, mutate, set } from "@coven/utils";
import type { EventListener } from "./EventListener.ts";
import type { EventRegistry } from "./EventRegistry.ts";
import type { EventTypeDictionary } from "./EventTypeDictionary.ts";

/**
 * Creates a curried function to listen for calls to an event in the passed
 * `eventRegistry`.
 *
 * @example
 * ```typescript
 * const eventRegistry = {};
 * const onRegistry = on(eventRegistry); // 👈🏻 You are here
 * const onEvent = onRegistry("event");
 * const offEvent = onEvent(() => console.log("event called"));
 * emit(eventRegistry)("event")(); // Logs "event called"
 * offEvent();
 * emit(eventRegistry)("event")(); // Nothing happens
 * ```
 * @template Events Event registry.
 * @param eventRegistry Record of event names mapped to an array of listeners.
 * @returns Curried function with `eventRegistry` in context.
 */
export const on = <Events extends EventTypeDictionary>(
	eventRegistry: EventRegistry<Events>,
): <Event extends keyof Events>(
	event: Event,
) => (listener: EventListener<Events[Event]>) => () => undefined =>
<Event extends keyof Events>(event: Event) => {
	const getEvent = get(event) as (
		eventRegistry: EventRegistry<Events>,
	) => Just<EventRegistry<Events>[Event]>;
	const setEvent = set(event);
	const hasEvent = has(event);

	return (listener: EventListener<Events[Event]>) => (
		mutate(
			setEvent(
				hasEvent(eventRegistry)
					? append(toIterable(listener))(getEvent(eventRegistry))
					: toIterable(listener),
			)(eventRegistry),
		)(eventRegistry), () =>
			void mutate(
				setEvent(
					filter((currentListener) => currentListener !== listener)(
						eventRegistry[event] as IterableIterator<
							Events[Event]
						>,
					),
				)(eventRegistry),
			)(eventRegistry)
	);
};
