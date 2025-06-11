import { join, optional } from "@coven/expression";
import { memo } from "@coven/memo";

/**
 * Regular expression to match field with an optional `0` to it's left.
 *
 * @example Create some optionally padded with zeroes numbers
 * ```typescript
 * paddedRegExp(5); // "0?5"
 * ```
 * @param value Value to pad.
 * @returns RegExp to match value with padded `0`.
 */
export const paddedRegExp: <Value extends number | string>(
	value: Value,
) => `0?${Value}` = memo(<Value extends number | string>(value: Value) =>
	join(optional(0), value),
);
