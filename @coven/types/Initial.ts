import type { InitialAndLast } from "./InitialAndLast.ts";
import type { ReadonlyArrayLike } from "./ReadonlyArrayLike.ts";

/**
 * Initial values of an {@linkcode ReadonlyArrayLike} (all items except the last).
 *
 * @example
 * ```typescript
 * const array = ["🧙‍♀️", "🔮", "💀"] as const;
 * const initial = ["🧙‍♀️", "🔮"] as const satisfies Initial<typeof array>;
 * ```
 * @see {@linkcode InitialAndLast}
 * @see {@linkcode ReadonlyArrayLike}
 * @template ArrayLike `ReadonlyArrayLike` value (such as `Array` or `string`).
 */
export type Initial<ArrayLike extends ReadonlyArrayLike> = InitialAndLast<
	ArrayLike
>[0];
