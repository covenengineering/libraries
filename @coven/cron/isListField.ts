import { isArray, isNumber } from "@coven/predicates";
import type { Field } from "./Field.ts";
import type { ListField } from "./ListField.ts";
import { isRangeField } from "./isRangeField.ts";

/**
 * Predicate checking if given value is a {@link ListField}.
 *
 * @see {@link ListField}
 * @see {@link isRangeField}
 */
export const isListField = (value: Field<number>): value is ListField<number> =>
	isArray(value) &&
	value.every((item) => isNumber(item) || isRangeField(item));
