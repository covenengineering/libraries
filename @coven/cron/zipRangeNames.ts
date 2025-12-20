import { zip } from "@coven/iterables";
import type { KeyOf } from "@coven/types";
import type { RangeField } from "./RangeField.ts";

/**
 * Zips "from" and "to".
 */
export const zipRangeNames: <RangeNames>(
	rangeNames: Iterable<RangeNames>,
) => IterableIterator<Readonly<[KeyOf<RangeField<number>>, RangeNames]>> = zip([
	"from",
	"to",
] as const);
