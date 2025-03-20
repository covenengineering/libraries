import type { Effect, Single } from "@coven/types";

/**
 * Event handler effect function (used for emit and listen for events).
 *
 * @template Data Data type.
 * @see [Effect](https://coven.to/types/doc/~/Effect)
 */
export type EventHandler<Data> = Effect<
	Single<Data> extends Single<never> ? readonly [] : readonly [data: Data]
>;
