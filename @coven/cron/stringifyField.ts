import { memo } from "@coven/memo";
import type { Field } from "./Field.ts";
import type { FieldString } from "./FieldString.ts";
import { isAllToken } from "./isAllToken.ts";
import { stringifyList } from "./stringifyList.ts";
import { stringifyRange } from "./stringifyRange.ts";

/**
 * Takes a cron object and returns a string expression.
 *
 * @example Stringify cron field back to cron expression field
 * ```typescript
 * stringifyField("*"); // "*"
 * stringifyField(13); // "13"
 * stringifyField([10, 11, 13]); // "10,11,13"
 * stringifyField({ from: 1, to: 10 }); // "1-10"
 * ```
 * @see {@linkcode isAllToken}
 * @see {@linkcode stringifyList}
 * @see {@linkcode stringifyRange}
 *
 * @param field Cron object field.
 * @returns Cron string field.
 */
export const stringifyField: (field: Field<number>) => FieldString = memo(
	(field: Field<number>): FieldString =>
		isAllToken(field) ? field : (
			(stringifyList(field)
				?? stringifyRange(field)
				?? `${field as number}`) as FieldString
		),
);
