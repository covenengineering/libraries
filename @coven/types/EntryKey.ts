import type { Entry } from "./Entry.ts";

/**
 * Key of an {@link Entry}.
 *
 * @example
 * ```typescript
 * const entry = ["🧙‍♀️", 13] as const satisfies Entry<string, number>;
 * const entryKey = entry[0] satisfies EntryKey<typeof entry>;
 * ```
 * @see {@link Entry}
 * @template EntryTuple Entry type.
 */
export type EntryKey<EntryTuple extends Entry> = EntryTuple[0];
