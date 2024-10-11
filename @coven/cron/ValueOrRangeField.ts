import type { RangeField } from "./RangeField.ts";

/**
 * Union of a set of numbers and a {@link RangeField} with that same set of
 * numbers.
 */
export type ValueOrRangeField<Value extends number> = RangeField<Value> | Value;
