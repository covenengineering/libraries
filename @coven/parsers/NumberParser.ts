import type { Maybe, Unary } from "@coven/types";

/**
 * Number parsing function that takes as `string` and might return a `number` or
 * `undefined` if the value failed to parse.
 */
export type NumberParser = Unary<[string: string], Maybe<number>>;
