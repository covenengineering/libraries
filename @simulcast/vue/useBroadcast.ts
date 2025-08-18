import { mutate, set } from "@coven/utils";
import {
	broadcast,
	type EventRegistry,
	type EventTypeDictionary,
} from "@simulcast/core";
import { onUnmounted } from "vue";
import type { UseBroadcastObject } from "./UseBroadcastObject.ts";
import type { UseBroadcastOn } from "./UseBroadcastOn.ts";
import { useBroadcastProxyHandler } from "./useBroadcastProxyHandler.ts";

const broadcastMemo = new Map<
	EventTypeDictionary,
	UseBroadcastObject<EventTypeDictionary>
>();

/**
 * Vue hook to wrap `@simulcast/core`'s `broadcast` function.
 *
 * @example
 * ```vue
 * <script setup>
 * 	import { broadcast } from "@simulcast/core";
 * 	import { useBroadcast } from "@simulcast/vue";
 * 	import type { MouseEvent } from "vue";
 *
 * 	const { registry } = broadcast<{ click: MouseEvent }>();
 * 	const { emitClick, onClick } = useBroadcast(registry);
 *
 * 	onClick(console.log);
 * </script>
 *
 * <template>
 * 	<button
 * 		\@click="emitClick"
 * 		type="button"
 * 	>
 * 		Click me!
 * 	</button>
 * </template>
 * ```
 * @template Events Event registry.
 * @param registry Record of event names mapped to an IterableIterator of handlers.
 * @returns An object that gives access to the broadcast hooked to React.
 */
export const useBroadcast = <Events extends EventTypeDictionary>(
	registry: EventRegistry<Events>,
): UseBroadcastObject<Events> => {
	if (!broadcastMemo.has(registry)) {
		const broadcastObject = broadcast<Events>(registry);
		const { on } = broadcastObject;

		const useBroadcastOn: UseBroadcastOn<Events> = (event, handler) =>
			onUnmounted(on(event)(handler));
		const setOn = set("on");
		const setOnHook = setOn(useBroadcastOn)(broadcastObject);
		const commitHook = mutate(setOnHook);

		broadcastMemo.set(
			registry,
			new Proxy(
				commitHook(broadcastObject),
				useBroadcastProxyHandler as unknown as ProxyHandler<
					UseBroadcastObject<Events>
				>,
			) as UseBroadcastObject<EventTypeDictionary>,
		);
	}

	return broadcastMemo.get(registry) as UseBroadcastObject<Events>;
};
