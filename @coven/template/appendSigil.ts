import { SIGIL } from "@coven/constants";
import { append } from "@coven/iterables";

/**
 * Appends a {@linkcode SIGIL} to te given Iterable (to extend it for zipping).
 *
 * @example
 * ```typescript
 * appendSigil(["foo", "bar"]); // ["foo", "bar", Symbol("⛧")]
 * appendSigil([]); // [Symbol("⛧")]
 * ```
 */
export const appendSigil: <const InitialItem>(
	initialIterable: Iterable<InitialItem>,
) => IterableIterator<typeof SIGIL | InitialItem> = append([SIGIL] as const);
