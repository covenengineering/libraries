import type { EmptyArray } from "./EmptyArray.ts";
import type { Maybe } from "./Maybe.ts";
import type { ReadonlyArrayLike } from "./ReadonlyArrayLike.ts";

/**
 * Get a couple with the head (item at index `0`) and tail (all elements except
 * index `0`) types of an {@linkcode ReadonlyArrayLike}.
 *
 * @example
 * ```typescript
 * const array = ["✨", "🔮", "💀"] as const;
 * const headAndTail = ["✨", ["🔮", "💀"]] as const satisfies HeadAndTail<
 * 	typeof array
 * >;
 * ```
 * @see {@linkcode EmptyArray}
 * @see {@linkcode Maybe}
 * @see {@linkcode ReadonlyArrayLike}
 * @template ArrayLike `ReadonlyArrayLike` to get the head and tail.
 */
export type HeadAndTail<ArrayLike extends ReadonlyArrayLike> = ArrayLike extends
	(
		Readonly<[head: infer HeadItem, ...tail: infer TailItems]>
	) ? Readonly<[head: HeadItem, tail: TailItems]>
	: ArrayLike extends `${infer FirstCharacter}${infer RestOfString}`
		? Readonly<[head: FirstCharacter, tail: RestOfString]>
	: ArrayLike extends EmptyArray | ""
		? Readonly<[head: undefined, tail: undefined]>
	: Readonly<[head: Maybe<ArrayLike[number]>, tail: Maybe<ArrayLike>]>;
