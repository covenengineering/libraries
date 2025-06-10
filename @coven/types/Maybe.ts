/**
 * Value that could be `undefined`.
 *
 * @example
 * ```typescript
 * type MaybeNumber = Maybe<number>;
 *
 * const maybeNumber = 1 as const satisfies MaybeNumber;
 * const notNumber = undefined satisfies MaybeNumber;
 * ```
 * @template OptionalType The type of the value to make optional.
 */
export type Maybe<OptionalType> = OptionalType | undefined;
