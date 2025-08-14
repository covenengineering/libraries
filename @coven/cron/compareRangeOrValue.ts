import { memo } from "@coven/memo";
import type { ValueOrRangeField } from "./ValueOrRangeField.ts";
import { isRangeField } from "./isRangeField.ts";

/**
 * Compares `value` to a {@linkcode ValueOrRangeField}.
 *
 * @example Compare cron range or cron field
 * ```typescript
 * compareRangeOrValue(13)({ from: 0, to: 99 }); // true
 * compareRangeOrValue(13)({ from: 0, to: 10 }); // false
 * compareRangeOrValue(13)(13); // true
 * compareRangeOrValue(13)(14); // false
 * ```
 * @param value Value to be compared.
 * @returns Curried function expecting a {@linkcode ValueOrRangeField}.
 */
export const compareRangeOrValue: (
	value: number,
) => (valueOrRange: ValueOrRangeField<number>) => boolean = memo(
	(value: number): (valueOrRange: ValueOrRangeField<number>) => boolean =>
		memo((valueOrRange) =>
			isRangeField(valueOrRange)
				? value >= valueOrRange.from && value <= valueOrRange.to
				: value === valueOrRange
		),
);
