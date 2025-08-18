import type { EventHandler } from "./EventHandler.ts";
import type { EventTypeDictionary } from "./EventTypeDictionary.ts";

/**
 * Registry of event names to IterableIterator of handlers.
 *
 * @see {@linkcode EventHandler}
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
		EventHandler<Readonly<Events[Event]>>
	>;
};
