import type { HeadAndTail } from "./HeadAndTail.ts";
import type { ReadonlyArrayLike } from "./ReadonlyArrayLike.ts";

/**
 * All items of a {@link ReadonlyArrayLike} except the last.
 *
 * @example
 * ```typescript
 * const array = ["🧙‍♀️", "🔮", "💀"] as const;
 * const tail = ["🔮", "💀"] as const satisfies Tail<typeof array>;
 *
 * const emptyArray = [];
 * const emptyTail = undefined satisfies Tail<typeof emptyArray>;
 * ```
 * @see {@link HeadAndTail}
 * @see {@link ReadonlyArrayLike}
 * @template ArrayLike Type of the array to get the tail.
 */
export type Tail<ArrayLike extends ReadonlyArrayLike> =
	HeadAndTail<ArrayLike>[1];
