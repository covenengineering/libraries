import type { ISOYear } from "./ISOYear.ts";
import type { MinimumLengthNumberString } from "./MinimumLengthNumberString.ts";

/**
 * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format of a date (returned
 * by [Date#toISOString](https://mdn.io/Date.prototype.toISOString)). It uses
 * {@link MinimumLengthNumberString} because the type complexity using better
 * types would be too hight (32,140,800,000 union types approximately).
 *
 * @example
 * ```typescript
 * const date = "2020-01-01T00:00:00.000Z" as const satisfies ISODate;
 * ```
 * @see {@link ISOYear}
 * @see {@link MinimumLengthNumberString}
 * @see [Date](https://mdn.io/Date)
 * @see [Date#toISOString](https://mdn.io/Date.prototype.toISOString)
 * @see [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
 */
export type ISODate =
	`${ISOYear}-${MinimumLengthNumberString}-${MinimumLengthNumberString}T${MinimumLengthNumberString}:${MinimumLengthNumberString}:${MinimumLengthNumberString}.${MinimumLengthNumberString<
		3
	>}Z`;
