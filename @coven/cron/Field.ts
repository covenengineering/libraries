import type { AllToken } from "./AllToken.ts";
import type { ListField } from "./ListField.ts";
import type { ValueOrRangeField } from "./ValueOrRangeField.ts";

/**
 * Union of {@link AllToken}, {@link ValueOrRangeField} and {@link ListField}
 * that represents a field in a cron expression.
 *
 * @see {@link AllToken}
 * @see {@link ValueOrRangeField}
 * @see {@link ListField}
 */
export type Field<Value extends number> =
	| AllToken
	| ListField<Value>
	| ValueOrRangeField<Value>;
