import type { Enumerate } from "./Enumerate.ts";
import type { Maybe } from "./Maybe.ts";
import type { NeverFallback } from "./NeverFallback.ts";
import type { ReadonlyRecord } from "./ReadonlyRecord.ts";
import type { Single } from "./Single.ts";

/**
 * Shallow read-only `ArrayLike` alternative with optional item type and
 * configurable `length`. This type is similar to doing
 * `Readonly<ArrayLike<unknown>>`, with some key differences:
 *
 * -   The type of `Item` is optional, and default to `unknown`.
 * -   A type value for `Length` can be specified, inferring index values.
 *
 * @example
 * ```typescript
 * const numbers = [13, 42, 665] as const satisfies ReadonlyArrayLike<number>;
 * const strings = ["✨", "🔮", "💀"] as const satisfies ReadonlyArrayLike<
 * 	string,
 * 	3
 * >;
 * ```
 * @see {@linkcode Enumerate}
 * @see {@linkcode Maybe}
 * @see {@linkcode NeverFallback}
 * @see {@linkcode ReadonlyRecord}
 * @see {@linkcode Single}
 * @template Item Type of the items in the array-like object.
 * @template Length Length value of the array-like object.
 */
export type ReadonlyArrayLike<
	Item = unknown,
	Length extends number = number,
> = Readonly<{
	/**
	 * Amount of items in the {@linkcode ReadonlyArrayLike}.
	 */
	length: Length;
}>
	& ReadonlyRecord<
		NeverFallback<Exclude<Enumerate<Length>, Length>, number> & PropertyKey,
		Exclude<Enumerate<Length>, Length> extends Single<never> ? Maybe<Item>
		:	Item
	>;
