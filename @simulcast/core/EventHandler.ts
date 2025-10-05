import type { Effect, Single } from "@coven/types";

/**
 * Event handler effect function (used for emit and listen for events).
 *
 * @template Data Data type.
 * @see {@linkcode https://coven.to/types/doc/~/Effect Effect}
 */
export type EventHandler<Data> = Effect<
	Single<Data> extends Single<never> ? Readonly<[]> : Readonly<[data: Data]>
>;
