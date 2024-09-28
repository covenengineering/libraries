import type { Fallback } from "./Fallback.ts";
import type { Just } from "./Just.ts";

/**
 * Takes a value that could be `undefined`, and if it is `undefined` it goes to
 * the `Fallback` value.
 *
 * @example
 * ```typescript
 * type Type1 = UndefinedFallback<undefined, number>; // number
 * type Type2 = UndefinedFallback<string, number>; // string
 * ```
 * @see {@link Fallback}
 * @see {@link Just}
 * @template MaybeUndefined The type that may or may not be `undefined`.
 * @template FallbackType The fallback type to use if `MaybeUndefined` is `undefined`.
 */
export type UndefinedFallback<MaybeUndefined, FallbackType> = Fallback<
	undefined,
	MaybeUndefined,
	Just<FallbackType>
>;
