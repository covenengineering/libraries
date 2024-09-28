import type { Entry } from "./Entry.ts";

/**
 * Value of an {@link Entry}.
 *
 * @example
 * ```typescript
 * const entry = ["🧙‍♀️", 13] as const satisfies Entry<string, number>;
 * const entryValue = entry[1] satisfies EntryValue<typeof entry>;
 * ```
 * @see {@link Entry}
 * @template EntryTuple Entry to get the value from.
 */
export type EntryValue<EntryTuple extends Entry> = EntryTuple[1];
