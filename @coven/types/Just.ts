/**
 * Excludes `undefined` of a type union. Similar to `NonNullable` but ignoring
 * `null`.
 *
 * @example
 * ```typescript
 * import type { Maybe } from "@coven/types";
 *
 * const maybeUndefined = "✨" as Maybe<string>;
 * const defined = "✨" as const satisfies Just<typeof maybeUndefined>;
 * ```
 * @template MaybeUndefined Type to exclude `undefined` from.
 */
export type Just<MaybeUndefined> = Exclude<MaybeUndefined, undefined>;
