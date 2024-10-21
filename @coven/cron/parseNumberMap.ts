import { map } from "@coven/iterables";
import type { Maybe } from "@coven/types";
import { parseNumber } from "./parseNumber.ts";

/**
 * Maps given iterable through {@linkcode parseNumber}.
 *
 * @example
 * ```typescript
 * parseNumberMap(["05"]); // [5]
 * parseNumberMap(["13"]); // [13]
 * parseNumberMap(["59"]); // [59]
 * parseNumberMap(["60"]); // [undefined] (60 isn't valid for any cron field)
 * ```
 * @see {@linkcode parseNumber}
 */
export const parseNumberMap: (
	iterable: Iterable<string>,
) => IterableIterator<Maybe<number>> = map(parseNumber);
