import { map } from "@coven/iterables";
import type { Maybe } from "@coven/types";
import { parseNumber } from "./parseNumber.ts";
import { parseRange } from "./parseRange.ts";
import type { RangeField } from "./RangeField.ts";

/**
 * Map to parse cron list items (can be either a range or a number).
 *
 * @example Parse valid range items on a list
 * ```typescript
 * parseListMap(["1", "05", "13", "5-13", "13-13", "13-5", "99"]);
 * // [1, 5, 13, { from: 5, to: 13 }, 13, undefined, undefined]
 * ```
 * @see {@linkcode parseNumber}
 * @see {@linkcode parseRange}
 */
export const parseListMap: (
	list: Iterable<string>,
) => IterableIterator<RangeField<number> | Maybe<number>> = map(
	(item: string) => parseRange(item) ?? parseNumber(item),
);
