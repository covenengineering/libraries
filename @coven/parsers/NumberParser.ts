import type { Maybe } from "@coven/types";

/**
 * Number parsing function that takes as `string` and might return a `number` or
 * `undefined` if the value failed to parse.
 */
export type NumberParser = (string: string) => Maybe<number>;
