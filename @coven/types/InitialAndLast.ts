import type { EmptyArray } from "./EmptyArray.ts";
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
 * const array = ["✨", "🔮", "💀"] as const;
 * const initialAndLast = [["✨", "🔮"], "💀"] as const satisfies InitialAndLast<
 * 	typeof array
 * >;
 * ```
 * @see {@linkcode EmptyArray}
 * @see {@linkcode Head}
 * @see {@linkcode Maybe}
 * @see {@linkcode ReadonlyArrayLike}
 * @template ArrayLike `ReadonlyArrayLike` to get the initial and last types.
 */
export type InitialAndLast<ArrayLike extends ReadonlyArrayLike> =
	ArrayLike extends Readonly<[...infer InitialItems, infer LastItem]>
		? Readonly<[initial: InitialItems, last: LastItem]>
		: ArrayLike extends EmptyArray | ""
			? Readonly<[initial: undefined, last: undefined]>
		: ArrayLike extends `${infer FirstCharacter}${infer RestOfString}`
			? Readonly<
				[
					initial: `${RestOfString extends "" ? ""
						: FirstCharacter}${UndefinedFallback<
						Head<InitialAndLast<RestOfString>>,
						""
					>}`,
					last: `${RestOfString extends "" ? FirstCharacter
						: Last<RestOfString>}`,
				]
			>
		: Readonly<[initial: Maybe<ArrayLike>, last: Maybe<ArrayLike[number]>]>;
