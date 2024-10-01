import type { InitialAndLast } from "./InitialAndLast.ts";
import type { ReadonlyArrayLike } from "./ReadonlyArrayLike.ts";

/**
 * Last item of an {@link ReadonlyArrayLike}.
 *
 * @example
 * ```typescript
 * const array = ["🧙‍♀️", "🔮", "💀"] as const;
 * const last = "💀" as const satisfies Last<typeof array>;
 * ```
 * @see {@link InitialAndLast}
 * @see {@link ReadonlyArrayLike}
 * @template ArrayLike `ReadonlyArrayLike` to get the last item from.
 */
export type Last<ArrayLike extends ReadonlyArrayLike> =
	InitialAndLast<ArrayLike>[1];
