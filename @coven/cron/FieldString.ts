import type { AllToken } from "./AllToken.ts";
import type { ListString } from "./ListString.ts";
import type { ValueOrRangeString } from "./ValueOrRangeString.ts";

/**
 * Union of {@link AllToken}, {@link ValueOrRangeString} and {@link ListString}
 * that represents a field in a cron expression.
 *
 * @see {@link AllToken}
 * @see {@link ValueOrRangeString}
 * @see {@link ListString}
 */
export type FieldString = AllToken | ListString | ValueOrRangeString;
