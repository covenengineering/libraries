import { memo } from "@coven/memo";
import { has, isNumber, isObject } from "@coven/predicates";
import type { RangeField } from "./RangeField.ts";

const hasFrom = has("from");
const hasTo = has("to");

/**
 * Predicate checking if given value is a cron object range ({@linkcode RangeField}).
 *
 * @see {@linkcode RangeField}
 */
export const isRangeField: (value: unknown) => value is RangeField<number> =
	memo(
		(value: unknown): value is RangeField<number> =>
			isObject(value)
			&& hasFrom(value)
			&& hasTo(value)
			&& isNumber(value.from)
			&& isNumber(value.to)
			&& value.from < value.to,
	);
