import type { ValueOrRangeField } from "./ValueOrRangeField.ts";
import { isRangeField } from "./isRangeField.ts";
import { FROM_NAME, TO_NAME } from "./rangeFieldNames.ts";

/**
 * Compares `value` to a {@linkcode ValueOrRangeField}.
 *
 * @example
 * ```typescript
 * compareRangeOrValue(13)({ from: 0, to: 99 }); // true
 * compareRangeOrValue(13)({ from: 0, to: 10 }); // false
 * compareRangeOrValue(13)(13); // true
 * compareRangeOrValue(13)(14); // false
 * ```
 * @param value Value to be compared.
 * @returns Curried function expecting a {@linkcode ValueOrRangeField}.
 */
export const compareRangeOrValue =
	(value: number): (valueOrRange: ValueOrRangeField<number>) => boolean =>
	(valueOrRange) =>
		isRangeField(valueOrRange)
			? value >= valueOrRange[FROM_NAME] && value <= valueOrRange[TO_NAME]
			: value === valueOrRange;
