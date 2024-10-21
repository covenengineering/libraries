import type { EmptyArray } from "./EmptyArray.ts";
import type { EmptyString } from "./EmptyString.ts";
import type { Head } from "./Head.ts";
import type { Last } from "./Last.ts";
import type { Maybe } from "./Maybe.ts";
import type { ReadonlyArrayLike } from "./ReadonlyArrayLike.ts";
import type { UndefinedFallback } from "./UndefinedFallback.ts";

/**
 * Get a couple with the initial and last types of an {@linkcode ReadonlyArrayLike}.
 * The first item has all elements except the last, and the second item has
 * the last element.
 *
 * @example
 * ```typescript
 * const array = ["🧙‍♀️", "🔮", "💀"] as const;
 * const initialAndLast = [["🧙‍♀️", "🔮"], "💀"] as const satisfies InitialAndLast<
 * 	typeof array
 * >;
 * ```
 * @see {@linkcode EmptyArray}
 * @see {@linkcode EmptyString}
 * @see {@linkcode Head}
 * @see {@linkcode Maybe}
 * @see {@linkcode ReadonlyArrayLike}
 * @template ArrayLike `ReadonlyArrayLike` to get the initial and last types.
 */
export type InitialAndLast<ArrayLike extends ReadonlyArrayLike> =
	ArrayLike extends readonly [...infer InitialItems, infer LastItem]
		? readonly [initial: InitialItems, last: LastItem]
		: ArrayLike extends EmptyArray | EmptyString
			? readonly [initial: undefined, last: undefined]
		: ArrayLike extends `${infer FirstCharacter}${infer RestOfString}`
			? readonly [
				initial: `${RestOfString extends EmptyString ? EmptyString
					: FirstCharacter}${UndefinedFallback<
					Head<InitialAndLast<RestOfString>>,
					EmptyString
				>}`,
				last: `${RestOfString extends EmptyString ? FirstCharacter
					: Last<RestOfString>}`,
			]
		: readonly [initial: Maybe<ArrayLike>, last: Maybe<ArrayLike[number]>];
