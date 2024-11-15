import type {
	BroadcastObject,
	Emitter,
	EventTypeDictionary,
} from "@simulcast/core";
import { useCallback } from "preact/hooks";

export const createUseEmit = <Events extends EventTypeDictionary>(
	emit: BroadcastObject<Events>["emit"],
): <Event extends keyof Events>(event: Event) => Emitter<Events[Event]> =>
<Event extends keyof Events>(event: Event) => useCallback(emit(event), [event]);
