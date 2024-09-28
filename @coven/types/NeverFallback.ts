import type { Fallback } from "./Fallback.ts";

/**
 * Takes a type that could be `never` and replaces the `never` case with the
 * given fallback type. This works like the the `??` operator, but for the
 * `never` type.
 *
 * @example
 * ```typescript
 * type Type1 = NeverFallback<never, number>; // number
 * type Type2 = NeverFallback<string, number>; // string
 * ```
 * @see {@link Fallback}
 * @template MaybeNever The type that may or may not be `never`.
 * @template FallbackType The fallback type to use if `MaybeNever` is `never`.
 */
export type NeverFallback<MaybeNever, FallbackType> = Fallback<
	never,
	MaybeNever,
	FallbackType
>;
