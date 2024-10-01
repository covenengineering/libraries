import type { HeadAndTail } from "./HeadAndTail.ts";
import type { ReadonlyArrayLike } from "./ReadonlyArrayLike.ts";

/**
 * Initial value (item in index `0`) of a {@link ReadonlyArrayLike}.
 *
 * @example
 * ```typescript
 * const array = ["🧙‍♀️", "🔮", "💀"] as const;
 * const head = "🧙‍♀️" as const satisfies Head<typeof array>;
 *
 * const emptyArray = [] as const;
 * const emptyHead = undefined satisfies Head<typeof emptyArray>;
 * ```
 * @see {@link HeadAndTail}
 * @see {@link ReadonlyArrayLike}
 * @template ArrayLike `ReadonlyArrayLike` value (such as `Array` or `string`).
 */
export type Head<ArrayLike extends ReadonlyArrayLike> =
	HeadAndTail<ArrayLike>[0];
