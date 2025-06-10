import type { Just } from "./Just.ts";
import type { NeverFallback } from "./NeverFallback.ts";
import type { ReadonlyArrayLike } from "./ReadonlyArrayLike.ts";

/**
 * Type of the index of a {@linkcode ReadonlyArrayLike}. Fallbacks to `number`
 * when it can't be inferred.
 *
 * @example
 * ```typescript
 * const triple = ["✨", "🔮", "💀"] as const;
 * const array = ["✨", "🔮", "💀"];
 *
 * type IndexOfTriple = ArrayLikeIndex<typeof triple>; // 0 | 1 | 2
 * type IndexOfArray = ArrayLikeIndex<typeof array>; // number
 * ```
 * @see {@linkcode ReadonlyArrayLike}
 * @template Array An array-like (we mainly care about it having a `length`).
 */
export type ArrayLikeIndex<Array extends Pick<ReadonlyArrayLike, "length">> =
	NeverFallback<
		Just<Exclude<Partial<Array>["length"], Array["length"]>>,
		number
	>;
