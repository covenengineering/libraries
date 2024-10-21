import type { Entry } from "./Entry.ts";

/**
 * Key of an {@linkcode Entry}.
 *
 * @example
 * ```typescript
 * import type { Entry } from "@coven/types";
 *
 * const entry = ["🧙‍♀️", 13] as const satisfies Entry<string, number>;
 * const entryKey = entry[0] satisfies EntryKey<typeof entry>;
 * ```
 * @see {@linkcode Entry}
 * @template EntryTuple Entry type.
 */
export type EntryKey<EntryTuple extends Entry> = EntryTuple[0];
