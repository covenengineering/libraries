import type { Single, Unary } from "@coven/types";

/**
 * Event listener unary function.
 *
 * @template Data Data type.
 * @see [Unary](https://jsr.io/@coven/types@0.0.11/doc/~/Unary)
 */
export type EventListener<Data> = Single<Data> extends Single<never>
	? () => void
	: Unary<[data: Data], void>;
