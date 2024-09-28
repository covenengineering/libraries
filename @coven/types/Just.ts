/**
 * Excludes `undefined` of a type union. Similar to `NonNullable` but ignoring
 * `null`.
 *
 * @example
 * ```typescript
 * const maybeUndefined = "🧙‍♀️" as Maybe<string>;
 * const defined = "🧙‍♀️" as const satisfies Just<typeof maybeUndefined>; // ok
 * const noDefined = undefined satisfies Just<typeof maybeUndefined>; // error
 * ```
 * @template MaybeUndefined Type to exclude `undefined` from.
 */
export type Just<MaybeUndefined> = Exclude<MaybeUndefined, undefined>;
