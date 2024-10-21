import type { AllToken } from "./AllToken.ts";
import type { ListField } from "./ListField.ts";
import type { ValueOrRangeField } from "./ValueOrRangeField.ts";

/**
 * Union of {@linkcode AllToken}, {@linkcode ValueOrRangeField} and {@linkcode ListField}
 * that represents a field in a cron expression.
 *
 * @see {@linkcode AllToken}
 * @see {@linkcode ValueOrRangeField}
 * @see {@linkcode ListField}
 */
export type Field<Value extends number> =
	| AllToken
	| ListField<Value>
	| ValueOrRangeField<Value>;
