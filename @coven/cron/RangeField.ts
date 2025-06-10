/**
 * Type that represents a range of values for a cron object field.
 */
export type RangeField<Value extends number> = Readonly<{
	/**
	 * Start of the range, must be lower than `to`.
	 */
	from: Value;

	/**
	 * End of the range, must be higher than `from`.
	 */
	to: Value;
}>;
