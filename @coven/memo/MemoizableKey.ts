/**
 * Keys the `memo` function can memoize for a record.
 */
export type MemoizableKey = Exclude<PropertyKey, symbol>;
