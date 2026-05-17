import { every } from "@coven/iterables";
import { memoFunction } from "@coven/memo";
import { isArray, isNumber } from "@coven/predicates";
import type { Predicate } from "@coven/types";
import type { Field } from "./Field.ts";
import { isRangeField } from "./isRangeField.ts";
import type { ListField } from "./ListField.ts";
import type { ValueOrRangeField } from "./ValueOrRangeField.ts";

const everyIsNumberOrRangeField = every<
	ValueOrRangeField<number>,
	ValueOrRangeField<number>
>((item) => isNumber(item) || isRangeField(item));

/**
 * Predicate checking if given value is a {@linkcode ListField}.
 *
 * @see {@linkcode ListField}
 * @see {@linkcode isRangeField}
 */
export const isListField: Predicate<
	Field<number>,
	ListField<number>
> = memoFunction((value) => isArray(value) && everyIsNumberOrRangeField(value));
