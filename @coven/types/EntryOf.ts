import type { Entry } from "./Entry.ts";
import type { KeyOf } from "./KeyOf.ts";
import type { ReadonlyArrayLike } from "./ReadonlyArrayLike.ts";

/**
 * Get the {@link Entry} of the passed object.
 *
 * @example
 * ```typescript
 * const object = {
 * 	"🧙‍♀️": 13,
 * 	"🔮": 42,
 * } as const;
 * const entries = Object.entries(object)[0] satisfies EntryOf<typeof object>;
 * ```
 * @see {@link Entry}
 * @see {@link KeyOf}
 * @see {@link ReadonlyArrayLike}
 * @template Object Object to get the entry from.
 */
export type EntryOf<Object extends object> = {
	readonly [
		/**
		 * @see {@link EntryOf} property that shouldn't be referenced directly
		 */
		Property in KeyOf<Object>
	]: Entry<
		Property,
		Property extends keyof Object ? Object[Property]
			: Object extends ReadonlyArrayLike ? Object[number]
			: never
	>;
}[KeyOf<Object>];
