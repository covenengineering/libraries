import { EMPTY_OBJECT } from "@coven/constants";
import { createObject, get, mutate, set } from "@coven/utils";
import type { BroadcastObject } from "./BroadcastObject.ts";
import type { EventTypeDictionary } from "./EventTypeDictionary.ts";
import { eventRegExp } from "./eventRegExp.ts";

/**
 * Proxy handler that enables the aliasing of `on("event")` as `onEvent`.
 */
export const broadcastProxyHandler: Readonly<{
	get: <Events extends EventTypeDictionary>(
		broadcastObject: BroadcastObject<Events>,
		property: string,
	) => unknown;
}> = createObject({
	get: (broadcast, property) => {
		const { name, type } =
			(!(property in broadcast) && eventRegExp.exec(property)?.groups)
			|| EMPTY_OBJECT;

		if (name && type) {
			const setProperty = set(property);
			const getAction = get(type as "emit" | "on");
			const action = getAction(broadcast);
			const event = `${name.slice(0, 1).toLowerCase()}${name.slice(1)}`;
			const setAction = setProperty(action(event));
			const commitSave = mutate(setAction(broadcast));

			commitSave(broadcast);
		}

		return Reflect.get(broadcast, property);
	},
});
