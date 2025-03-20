import type { ReadonlyArrayLike } from "./ReadonlyArrayLike.ts";

/**
 * Type of property values in an object (also works for items in an
 * {@linkcode ReadonlyArrayLike}).
 *
 * @example
 * ```typescript
 * const object = {
 * 	"🧙‍♀️": 13,
 * 	"🔮": 42,
 * } as const;
 * const key = 13 as const satisfies ValueOf<typeof object>;
 * ```
 * @see {@linkcode ReadonlyArrayLike}
 * @template Object Object or array type.
 */
export type ValueOf<Object extends object> =
	Object extends ReadonlyArrayLike ? Object[number] : Object[keyof Object];
