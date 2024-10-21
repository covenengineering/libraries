import type { Effect, Single } from "@coven/types";

/**
 * Emitter function (when data is `never` it doesn't take any arguments).
 *
 * @template Data Data type.
 */
export type Emitter<Data> = Effect<
	Single<Data> extends Single<never> ? [] : [data: Data]
>;
