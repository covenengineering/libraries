/**
 * Type that represents a range of values for a cron object field.
 */
export type RangeField<Value extends number> = {
	/**
	 * Start of the range, must be lower than `to`.
	 */
	readonly from: Value;

	/**
	 * End of the range, must be higher than `from`.
	 */
	readonly to: Value;
};
