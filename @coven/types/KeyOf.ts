import type { ArrayLikeIndex } from "./ArrayLikeIndex.ts";
import type { ReadonlyArrayLike } from "./ReadonlyArrayLike.ts";

/**
 * Key of objects (stringified like `Object.entries` does).
 *
 * @example
 * ```typescript
 * const array = [13, 42] as const;
 * const object = { "✨": "🔮" } as const;
 *
 * const arrayKey = "0" as const satisfies KeyOf<typeof array>;
 * const objectKey = "✨" as const satisfies KeyOf<typeof object>;
 * ```
 * @see {@linkcode ArrayLikeIndex}
 * @see {@linkcode ReadonlyArrayLike}
 * @template Object Object type to get the key from.
 */
export type KeyOf<Object extends object> = `${Object extends ReadonlyArrayLike ?
	ArrayLikeIndex<Object>
:	Exclude<keyof Object, symbol>}`;
