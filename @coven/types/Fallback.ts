import type { Single } from "./Single.ts";

/**
 * Type fallback helper. Takes a `Wrong`, a `MaybeWrong` and a `FallbackType`.
 * If `MaybeWrong` extends `Wrong`, then `Fallback` returns `FallbackType`, if
 * not then it just returns `MaybeWrong`.
 *
 * @example
 * ```typescript
 * type Test1 = Fallback<never, never, number>; // number
 * type Test2 = Fallback<never, string, string>; // string
 * ```
 * @see {@linkcode Single}
 * @template Wrong Type to avoid.
 * @template MaybeWrong Type to check.
 * @template FallbackType Fallback if `MaybeWrong` extends `Wrong`.
 */
export type Fallback<Wrong, MaybeWrong, FallbackType> =
	Single<Wrong> extends Single<never> ?
		Single<MaybeWrong> extends Single<Wrong> ?
			FallbackType
		:	MaybeWrong
	: MaybeWrong extends Wrong ? FallbackType
	: MaybeWrong;
