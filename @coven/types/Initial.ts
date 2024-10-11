import type { InitialAndLast } from "./InitialAndLast.ts";
import type { ReadonlyArrayLike } from "./ReadonlyArrayLike.ts";

/**
 * Initial values of an {@link ReadonlyArrayLike} (all items except the last).
 *
 * @example
 * ```typescript
 * const array = ["🧙‍♀️", "🔮", "💀"] as const;
 * const initial = ["🧙‍♀️", "🔮"] as const satisfies Initial<typeof array>;
 * ```
 * @see {@link InitialAndLast}
 * @see {@link ReadonlyArrayLike}
 * @template ArrayLike `ReadonlyArrayLike` value (such as `Array` or `string`).
 */
export type Initial<ArrayLike extends ReadonlyArrayLike> = InitialAndLast<
	ArrayLike
>[0];
