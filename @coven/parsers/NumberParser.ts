import type { Maybe, Stringable, Unary } from "@coven/types";

/**
 * Number parsing function that takes as {@linkcode Stringable} and might return
 * a `number` or `undefined` if the value failed to parse.
 */
export type NumberParser = Unary<[stringable: Stringable], Maybe<number>>;
