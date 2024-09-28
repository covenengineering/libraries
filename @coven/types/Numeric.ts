/**
 * Union of `bigint` and `number`.
 *
 * @example
 * ```typescript
 * const numericNumber = 13 as const satisfies Numeric;
 * const numericBigInt = 13n as const satisfies Numeric;
 * ```
 */
export type Numeric = bigint | number;
