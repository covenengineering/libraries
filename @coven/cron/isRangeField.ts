import { memoFunction } from "@coven/memo";
import { has, isNumber, isObject } from "@coven/predicates";
import type { Field } from "./Field.ts";
import type { RangeField } from "./RangeField.ts";

const hasFrom = has("from");
const hasTo = has("to");

/**
 * Predicate checking if given value is a cron object range ({@linkcode RangeField}).
 *
 * @see {@linkcode RangeField}
 */
export const isRangeField: <Predicated extends number>(
	value: Field<Predicated>,
) => value is RangeField<Predicated> = memoFunction(
	<Predicated extends number>(
		value: Field<Predicated>,
	): value is RangeField<Predicated> =>
		isObject(value)
		&& hasFrom(value)
		&& hasTo(value)
		&& isNumber(value.from)
		&& isNumber(value.to)
		&& value.from < value.to,
);
