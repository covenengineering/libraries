import type { Effect, Single } from "@coven/types";

/**
 * Event listener unary function.
 *
 * @template Data Data type.
 * @see [Unary](https://jsr.io/@coven/types/doc/~/Unary)
 */
export type EventListener<Data> = Single<Data> extends Single<never>
	? () => void
	: Effect<[data: Data]>;
