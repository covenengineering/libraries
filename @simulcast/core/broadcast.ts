import { createObject } from "@coven/utils";
import type { BroadcastObject } from "./BroadcastObject.ts";
import type { EventRegistry } from "./EventRegistry.ts";
import type { EventTypeDictionary } from "./EventTypeDictionary.ts";
import { broadcastProxyHandler } from "./broadcastProxyHandler.ts";
import { emit } from "./emit.ts";
import { on } from "./on.ts";

/**
 * Creates a new "broadcast" object, which has `emit` and `on` with a shared
 * `eventRegistry`.
 *
 * @example
 * ```typescript
 * const { emitEvent, onEvent } = broadcast<{ event: string }>();
 * const offEvent = onEvent(console.log);
 * emitEvent("Hello world"); // Logs "Hello world"
 * offEvent();
 * emitEvent("Nope"); // Nothing happens
 * ```
 * @template Events Event registry.
 * @param registry Optional record of event names mapped to an array of handlers.
 * @param overrides Overrides of the default {@linkcode BroadcastObject} methods and properties.
 * @returns Object with `emit` and `on` functions.
 */
export const broadcast = <Events extends EventTypeDictionary>(
	registry: EventRegistry<Events> = createObject(),
): BroadcastObject<Events> =>
	new Proxy(
		createObject({
			emit: emit(registry),
			on: on(registry),
			registry,
		} as BroadcastObject<Events>),
		broadcastProxyHandler,
	);
