import type { RangeString } from "./RangeString.ts";

/**
 * Union of a set any number and a {@linkcode RangeString}.
 */
export type ValueOrRangeString = RangeString | `${number}`;
