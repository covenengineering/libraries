import type { BroadcastObject } from "./BroadcastObject.ts";
import type { EventRegistry } from "./EventRegistry.ts";
import type { EventTypeDictionary } from "./EventTypeDictionary.ts";
import { emit } from "./emit.ts";
import { on } from "./on.ts";

/**
 * Creates a new "broadcast" object, which has `emit` and `on` with a shared
 * `eventRegistry`.
 *
 * @example
 * ```typescript
 * const { emit, on } = broadcast<{ event: string }>();
 * const off = on("event")(console.log);
 * emit("event")("Hello world"); // Logs "Hello world"
 * off();
 * emit("event")("Nope"); // Nothing happens
 * ```
 * @template Events Event registry.
 * @param registry Optional record of event names mapped to an array of
 * listeners.
 * @returns Object with `emit` and `on` functions.
 */
export const broadcast = <Events extends EventTypeDictionary>(
	registry: EventRegistry<Events> = Object.create(null),
): BroadcastObject<Events> => ({ emit: emit(registry), on: on(registry) });
