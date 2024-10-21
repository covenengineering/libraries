import type { Just } from "./Just.ts";
import type { NeverFallback } from "./NeverFallback.ts";
import type { ReadonlyArrayLike } from "./ReadonlyArrayLike.ts";

/**
 * Gets the possible index values of a {@linkcode ReadonlyArrayLike}, and fallbacks
 * to `number` when it can't be inferred.
 *
 * @example
 * ```typescript
 * const triple = ["🧙‍♀️", "🔮", "💀"] as const;
 * const array = ["🧙‍♀️", "🔮", "💀"];
 *
 * type IndexOfTriple = ArrayLikeIndexFallback<typeof triple>; // 0 | 1 | 2
 * type IndexOfArray = ArrayLikeIndexFallback<typeof array>; // number
 * ```
 * @see {@linkcode Just}
 * @see {@linkcode NeverFallback}
 * @see {@linkcode ReadonlyArrayLike}
 * @template Array An array-like (we mainly care about it having a `length`).
 */
export type ArrayLikeIndexFallback<
	Array extends Pick<ReadonlyArrayLike, "length">,
> = NeverFallback<
	Just<Exclude<Partial<Array>["length"], Array["length"]>>,
	number
>;
