import type { ReadonlyArray } from "@coven/types";
import {
	broadcast,
	type BroadcastObject,
	type Emitter,
	type EventListener,
	type EventTypeDictionary,
} from "@simulcast/core";
import { createUseEmit } from "./createUseEmit.ts";
import { createUseOn } from "./createUseOn.ts";

export const createHooks = <Events extends EventTypeDictionary>(
	{ emit, on }: BroadcastObject<Events> = broadcast<Events>(),
): {
	useEmit: <Event extends keyof Events>(
		event: Event,
	) => Emitter<Events[Event]>;
	useOn: <Event extends keyof Events>(
		event: Event,
	) => (
		listener: EventListener<Events[Event]>,
		dependencies?: ReadonlyArray,
	) => void;
} => ({ useEmit: createUseEmit(emit), useOn: createUseOn(on) });
