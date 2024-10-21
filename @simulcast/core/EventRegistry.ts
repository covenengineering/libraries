import type { EventListener } from "./EventListener.ts";
import type { EventTypeDictionary } from "./EventTypeDictionary.ts";

/**
 * Registry of event names to array of listeners.
 *
 * @see {@linkcode EventListener}
 * @see {@linkcode EventTypeDictionary}
 * @example
 * ```typescript
 * const eventRegistry: EventRegistry<{ example: never }> = {
 * 	example: [() => console.log("example called")].values(),
 * };
 * ```
 * @template Events Event registry.
 */
export type EventRegistry<Events extends EventTypeDictionary> = {
	readonly [Event in keyof Events]?: IterableIterator<
		EventListener<Readonly<Events[Event]>>
	>;
};
