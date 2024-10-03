/**
 * Union type useful for cases where a value might be of one type or another. By
 * convention we use `Right` for the "success" type and `Left` for the error.
 *
 * @example
 * ```typescript
 * type MaybeNumber = Either<number, string>;
 * const maybeNumber = 13 as const satisfies MaybeNumber;
 * const notNumber = "13" as const satisfies MaybeNumber;
 * ```
 * @template Right The "success" type.
 * @template Left The "error" type.
 */
export type Either<Right, Left> = Left | Right;
