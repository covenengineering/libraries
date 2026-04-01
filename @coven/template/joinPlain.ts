import { join } from "@coven/iterables";
import type { Stringable } from "@coven/types";

/**
 * Join an `Iterable` of {@linkcode Stringable} values into a plain string.
 *
 * @example
 * ```typescript
 * joinPlain([1, 2, 3]); // "123"
 * ```
 */
export const joinPlain: <Item extends Stringable>(
	iterable: Iterable<Item>,
) => string = join("");
