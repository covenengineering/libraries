import type { RangeString } from "./RangeString.ts";

/**
 * Union of a set any number and a {@link RangeString}.
 */
export type ValueOrRangeString = RangeString | `${number}`;
