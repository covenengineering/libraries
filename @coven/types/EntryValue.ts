import type { Entry } from "./Entry.ts";

/**
 * Value of an {@linkcode Entry}.
 *
 * @example
 * ```typescript
 * import type { Entry } from "@coven/types";
 *
 * const entry = ["✨", 13] as const satisfies Entry<string, number>;
 * const entryValue = entry[1] satisfies EntryValue<typeof entry>;
 * ```
 * @see {@linkcode Entry}
 * @template EntryTuple Entry to get the value from.
 */
export type EntryValue<EntryTuple extends Entry> = EntryTuple[1];
