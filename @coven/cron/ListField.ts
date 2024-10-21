import type { ReadonlyArray } from "@coven/types";
import type { ValueOrRangeField } from "./ValueOrRangeField.ts";

/**
 * Type that represents a list of values for a cron object field.
 *
 * @see {@linkcode ValueOrRangeField}
 */
export type ListField<Value extends number> = ReadonlyArray<
	ValueOrRangeField<Value>
>;
