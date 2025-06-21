import { EMPTY_ARRAY } from "@coven/constants";
import { mutate, set } from "@coven/utils";
import {
	broadcast,
	type EventRegistry,
	type EventTypeDictionary,
} from "@simulcast/core";
import {
	type UseBroadcastObject,
	type UseBroadcastOn,
	useBroadcastProxyHandler,
} from "@simulcast/preact";
import { useEffect, useMemo } from "react";

/**
 * React hook to wrap `@simulcast/core`'s `broadcast` function.
 *
 * @example
 * ```tsx
 * /** @jsxImportSource react *\/
 * import { broadcast } from "@simulcast/core";
 * import type { MouseEvent } from "react";
 *
 * const { registry } = broadcast<{
 * 	click: MouseEvent<HTMLButtonElement>;
 * }>();
 *
 * const Component = () => {
 * 	const { emitClick, onClick } = useBroadcast(registry);
 *
 * 	onClick(console.log);
 *
 * 	return (
 * 		<button onClick={emitClick} type="button">
 * 			Click me!
 * 		</button>
 * 	);
 * };
 * ```
 * @template Events Event registry.
 * @param registry Optional record of event names mapped to an array of handlers.
 * @returns An object that gives access to the broadcast hooked to React.
 */
export const useBroadcast = <Events extends EventTypeDictionary>(
	registry: EventRegistry<Events>,
): UseBroadcastObject<Events> =>
	useMemo<UseBroadcastObject<Events>>(() => {
		const broadcastObject = broadcast<Events>(registry);
		const { on } = broadcastObject;

		const useBroadcastOn: UseBroadcastOn<Events> = (
			event,
			handler,
			dependencies = EMPTY_ARRAY,
		) => useEffect(() => on(event)(handler), [event, ...dependencies]);
		const setOn = set("on");
		const setOnHook = setOn(useBroadcastOn)(broadcastObject);
		const commitHook = mutate(setOnHook);

		return new Proxy(
			commitHook(broadcastObject),
			useBroadcastProxyHandler as unknown as ProxyHandler<
				UseBroadcastObject<Events>
			>,
		);
	}, [registry]);
