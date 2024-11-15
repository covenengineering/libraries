import { EMPTY_ARRAY } from "@coven/constants";
import type { ReadonlyArray } from "@coven/types";
import type {
	BroadcastObject,
	EventListener,
	EventTypeDictionary,
} from "@simulcast/core";
import { useCallback, useEffect } from "preact/hooks";

export const createUseOn = <Events extends EventTypeDictionary>(
	on: BroadcastObject<Events>["on"],
): <Event extends keyof Events>(
	event: Event,
) => (listener: EventListener<Events[Event]>) => void =>
<Event extends keyof Events>(event: Event) =>
(
	listener: EventListener<Events[Event]>,
	dependencies: ReadonlyArray = EMPTY_ARRAY,
) => {
	const handler = useCallback(on(event), [event, ...dependencies]);

	return useEffect(() => handler(listener), [handler]);
};
