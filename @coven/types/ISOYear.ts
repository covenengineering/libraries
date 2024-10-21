import type { MinimumLengthNumberString } from "./MinimumLengthNumberString.ts";

/**
 * ISO year values in string format.
 *
 * @example
 * ```typescript
 * const years = [
 * 	"2020",
 * 	"-001000",
 * 	"1989",
 * 	"+001989",
 * ] as const satisfies Iterable<ISOYear>;
 * ```
 * @see {@linkcode MinimumLengthNumberString}
 * @see [Date](https://mdn.io/Date)
 */
export type ISOYear =
	| `${"-" | "+"}${MinimumLengthNumberString<6>}`
	| MinimumLengthNumberString<4>;
