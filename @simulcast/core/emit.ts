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
 * const emitRegistry = emit(eventRegistry); // 👈🏻 You are here
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
/**
 * Creates a curried function to emit an event of the `eventRegistry` in context.
 *
 * @example
 * ```typescript
 * const eventRegistry = {};
 * const emitRegistry = emit(eventRegistry);
 * const emitEvent = emitRegistry("event"); // 👈🏻 You are here
 * emitEvent("data");
 * ```
 * @template Event Event name.
 * @param event Event name (has to be a valid key of the `eventRegistry`).
 * @returns Curried function with `eventRegistry` and `event` in context.
 */
<Event extends keyof Events>(event: Event) => {
	const getEvent = get(event) as (
		eventRegistry: EventRegistry<Events>,
	) => Just<EventRegistry<Events>[Event]>;
	const hasEvent = has(event);

	/**
	 * Emits the `event` in context of the `eventRegistry` in context.
	 *
	 * @example
	 * ```typescript
	 * const eventRegistry = {};
	 * const emitRegistry = emit(eventRegistry);
	 * const emitEvent = emitRegistry("event");
	 * emitEvent("data"); // 👈🏻 You are here
	 * ```
	 * @param data Data to pass to the listeners.
	 */
	return ((data) =>
		hasEvent(eventRegistry)
			? forEach<EventListener<typeof data>>(applyTo(data))(
				getEvent(eventRegistry),
			)
			: undefined) as Emitter<Events[Event]>;
};
