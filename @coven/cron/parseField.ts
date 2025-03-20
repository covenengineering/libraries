import { parseDecimal } from "@coven/parsers";
import type { Maybe } from "@coven/types";
import type { AllToken } from "./AllToken.ts";
import { isAllToken } from "./isAllToken.ts";
import type { ListField } from "./ListField.ts";
import { parseList } from "./parseList.ts";
import { parseRange } from "./parseRange.ts";
import type { RangeField } from "./RangeField.ts";

/**
 * Parses a cron field.
 *
 * @example
 * ```typescript
 * parseField("*"); // "*"
 * parseField("13"); // 13
 * parseField("10,11,13"); // [10, 11, 13]
 * parseField("1-10"); // { from: 1, to: 10 }
 * ```
 * @see {@linkcode isAllToken}
 * @see {@linkcode parseList}
 * @see {@linkcode parseRange}
 *
 * @param field Cron field value (should be validated before this).
 * @returns Parsed field.
 */
export const parseField = (
	field: string,
): AllToken | Maybe<number> | RangeField<number> | ListField<number> =>
	isAllToken(field) ? field : (
		(parseList(field) ?? parseRange(field) ?? parseDecimal(field))
	);
