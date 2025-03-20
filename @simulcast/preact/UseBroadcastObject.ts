import type { ReadonlyArray } from "@coven/types";
import type {
	BroadcastObject,
	EventHandler,
	EventTypeDictionary,
} from "@simulcast/core";
import type { UseBroadcastOn } from "./UseBroadcastOn.ts";

/**
 * Object containing `emit` and `on` methods with a shared event dictionary.
 */
export type UseBroadcastObject<Events extends EventTypeDictionary> = Omit<
	BroadcastObject<Events>,
	`on${string}`
> & {
	/**
	 * Like `on` but with Preact cleanup.
	 *
	 * @param event Event name.
	 * @param handler Event handler.
	 * @param dependencies Underlying `useEffect` dependencies to trigger a cleanup of the handler.
	 */
	readonly on: UseBroadcastOn<Events>;
} & {
	/**
	 * @param handler Function to run when event is emitted.
	 * @param dependencies Passed directly to the underlying `useEffect`.
	 */
	readonly [Event in keyof Events as `on${Capitalize<keyof Events & string>}`]: (
		handler: EventHandler<Events[Event]>,
		dependencies?: ReadonlyArray,
	) => void;
};
