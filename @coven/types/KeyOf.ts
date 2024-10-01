import type { ArrayLikeIndexFallback } from "./ArrayLikeIndexFallback.ts";
import type { ReadonlyArrayLike } from "./ReadonlyArrayLike.ts";

/**
 * Key of objects (stringified like `Object.entries` does).
 *
 * @example
 * ```typescript
 * const array = [13, 42] as const;
 * const object = { "🧙‍♀️": "🔮" } as const;
 *
 * const arrayKey = 0 as const satisfies KeyOf<typeof array>;
 * const objectKey = "🧙‍♀️" as const satisfies KeyOf<typeof object>;
 * ```
 * @see {@link ArrayLikeIndexFallback}
 * @see {@link ReadonlyArrayLike}
 * @template Object Object type to get the key from.
 */
export type KeyOf<Object extends object> = `${Object extends ReadonlyArrayLike ?
	ArrayLikeIndexFallback<Object>
:	Exclude<keyof Object, symbol>}`;
