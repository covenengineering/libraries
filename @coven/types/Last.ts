import type { InitialAndLast } from "./InitialAndLast.ts";
import type { ReadonlyArrayLike } from "./ReadonlyArrayLike.ts";

/**
 * Last item of an {@linkcode ReadonlyArrayLike}.
 *
 * @example
 * ```typescript
 * const array = ["✨", "🔮", "💀"] as const;
 * const last = "💀" as const satisfies Last<typeof array>;
 * ```
 * @see {@linkcode InitialAndLast}
 * @see {@linkcode ReadonlyArrayLike}
 * @template ArrayLike `ReadonlyArrayLike` to get the last item from.
 */
export type Last<ArrayLike extends ReadonlyArrayLike> = InitialAndLast<
	ArrayLike
>[1];
