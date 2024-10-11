import type { ReadonlyArray } from "@coven/types";
import type { EventListener } from "./EventListener.ts";
import type { EventTypeDictionary } from "./EventTypeDictionary.ts";

/**
 * Registry of event names to array of listeners.
 *
 * @see {@link EventListener}
 * @see {@link EventTypeDictionary}
 * @example
 * ```typescript
 * const eventRegistry = {
 * 	example: [() => console.log("example called")],
 * };
 * ```
 * @template Events Event registry.
 */
export type EventRegistry<Events extends EventTypeDictionary> = {
	readonly [Event in keyof Events]?: ReadonlyArray<
		EventListener<Readonly<Events[Event]>>
	>;
};
