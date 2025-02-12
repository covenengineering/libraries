import { EMPTY_OBJECT } from "@coven/constants";
import { createObject, get, mutate, set } from "@coven/utils";
import type { BroadcastObject } from "./BroadcastObject.ts";
import type { EventTypeDictionary } from "./EventTypeDictionary.ts";
import { eventRegExp } from "./eventRegExp.ts";

/**
 * Proxy handler that enables the aliasing of `on("event")` as `onEvent`.
 */
export const broadcastProxyHandler: {
	readonly get: <Events extends EventTypeDictionary>(
		broadcastObject: BroadcastObject<Events>,
		property: string,
	) => unknown;
} = createObject({
	get: (broadcastObject, property) => {
		const { groups: { type, name } = EMPTY_OBJECT } =
			property in broadcastObject
				? EMPTY_OBJECT
				: (eventRegExp.exec(property) ?? EMPTY_OBJECT);

		return Reflect.get(
			name && type
				? mutate(
					set(property)(
						get(type as "emit")(broadcastObject)(
							`${name[0]?.toLocaleLowerCase()}${name.slice(1)}`,
						),
					)(
						broadcastObject,
					),
				)(broadcastObject)
				: broadcastObject,
			property,
		);
	},
});
