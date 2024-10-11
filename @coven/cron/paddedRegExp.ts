import { join, optional } from "@coven/expression";

/**
 * Regular expression to match field with an optional `0` to it's left.
 *
 * @example
 * ```typescript
 * paddedRegExp(5); // "0?5"
 * ```
 * @param value Value to pad.
 * @returns RegExp to match value with padded `0`.
 */
export const paddedRegExp = <Value extends number | string>(
	value: Value,
): `0?${Value}` => join(optional(0), value);
