import type { Maybe } from "./Maybe.ts";

/**
 * Nullish value (union of `null` and `undefined`).
 *
 * @example
 * ```typescript
 * const nullishUndefined = undefined satisfies Nullish;
 * const nullishNull = null satisfies Nullish;
 * ```
 * @see {@linkcode Maybe}
 * @see [Nullish](https://coven.to/mdn/Glossary/Nullish)
 */
export type Nullish = Maybe<null>;
