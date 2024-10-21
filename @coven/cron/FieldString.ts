import type { AllToken } from "./AllToken.ts";
import type { ListString } from "./ListString.ts";
import type { ValueOrRangeString } from "./ValueOrRangeString.ts";

/**
 * Union of {@linkcode AllToken}, {@linkcode ValueOrRangeString} and {@linkcode ListString}
 * that represents a field in a cron expression.
 *
 * @see {@linkcode AllToken}
 * @see {@linkcode ValueOrRangeString}
 * @see {@linkcode ListString}
 */
export type FieldString = AllToken | ListString | ValueOrRangeString;
