import { has, isNumber, isObject } from "@coven/predicates";
import type { RangeField } from "./RangeField.ts";
import { FROM_NAME, TO_NAME } from "./rangeFieldNames.ts";

const hasFrom = has(FROM_NAME);
const hasTo = has(TO_NAME);

/**
 * Predicate checking if given value is a cron object range ({@link RangeField}).
 *
 * @see {@link RangeField}
 */
export const isRangeField = (value: unknown): value is RangeField<number> =>
	isObject(value) &&
	hasFrom(value) &&
	hasTo(value) &&
	isNumber(value[FROM_NAME]) &&
	isNumber(value[TO_NAME]) &&
	value[FROM_NAME] < value[TO_NAME];
