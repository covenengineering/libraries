import type { Single, Unary } from "@coven/types";

/**
 * Emitter function (when data is `never` it doesn't take any arguments).
 *
 * @template Data Data type.
 */
export type Emitter<Data> = Single<Data> extends Single<never> ? () => void
	: Unary<[data: Data], void>;
