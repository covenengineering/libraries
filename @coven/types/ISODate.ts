import type { ISOYear } from "./ISOYear.ts";
import type { MinimumLengthNumberString } from "./MinimumLengthNumberString.ts";

/**
 * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format of a date (returned
 * by [Date#toISOString](https://coven.to/mdn/Date/toISOString)). It uses
 * {@linkcode MinimumLengthNumberString} because the type complexity using better
 * types would be too hight (32,140,800,000 union types approximately).
 *
 * @example
 * ```typescript
 * const date = "2020-01-01T00:00:00.000Z" as const satisfies ISODate;
 * ```
 * @see {@linkcode ISOYear}
 * @see {@linkcode MinimumLengthNumberString}
 * @see {@linkcode https://coven.to/mdn/Date Date}
 * @see {@linkcode https://coven.to/mdn/Date/toISOString Date#toISOString}
 * @see {@linkcode https://en.wikipedia.org/wiki/ISO_8601 ISO 8601}
 */
export type ISODate =
	`${ISOYear}-${MinimumLengthNumberString}-${MinimumLengthNumberString}T${MinimumLengthNumberString}:${MinimumLengthNumberString}:${MinimumLengthNumberString}.${MinimumLengthNumberString<
		3
	>}Z`;
