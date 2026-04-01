import type { NormalizeEntryKey } from "@coven/types";
import type { Entry } from "./Entry.ts";
import type { ReadonlyArrayLike } from "./ReadonlyArrayLike.ts";

/**
 * Get the {@linkcode Entry} of the passed object.
 *
 * @example
 * ```typescript
 * const object = {
 * 	"✨": 13,
 * 	"🔮": 42,
 * } as const;
 * const entries = Object.entries(object)[0] as EntryOf<typeof object>;
 * ```
 * @see {@linkcode Entry}
 * @see {@linkcode ReadonlyArrayLike}
 * @template Object Object to get the entry from.
 */
export type EntryOf<Object extends object> = Readonly<{
	/**
	 * @see {@linkcode EntryOf} property that shouldn't be referenced directly
	 */
	[Property in keyof Object]: Entry<
		NormalizeEntryKey<Property>,
		Object extends ReadonlyArrayLike ? Object[number] : Object[Property]
	>;
}>[keyof Object];
