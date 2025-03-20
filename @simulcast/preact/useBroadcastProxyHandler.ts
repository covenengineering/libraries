import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import type { ReadonlyArray } from "@coven/types";
import { createObject, mutate, set } from "@coven/utils";
import type { EventHandler, EventTypeDictionary } from "@simulcast/core";
import { onRegExp } from "./onRegExp.ts";
import type { UseBroadcastObject } from "./UseBroadcastObject.ts";

/**
 * Proxy handler to call `on` events with hook parameter.
 */
export const useBroadcastProxyHandler: {
	readonly get: (
		broadcastObject: UseBroadcastObject<EventTypeDictionary>,
		property: string,
	) => unknown;
} = createObject({
	get: (broadcast, property) => {
		const { name } =
			(!(property in broadcast) && onRegExp.exec(property)?.groups) ||
			EMPTY_OBJECT;

		if (name) {
			const setProperty = set(property);
			const on = Reflect.get(broadcast, "on");
			const event = `${name.slice(0, 1).toLowerCase()}${name.slice(1)}`;
			const setHandler = setProperty(
				(
					handler: EventHandler<unknown>,
					dependencies: ReadonlyArray = EMPTY_ARRAY,
				) => on(event, handler, dependencies),
			)(broadcast);
			const commitHandler = mutate(setHandler);

			commitHandler(broadcast);
		}

		return Reflect.get(broadcast, property);
	},
});
