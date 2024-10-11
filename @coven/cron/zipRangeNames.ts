import { zip } from "@coven/iterables";
import { FROM_NAME, TO_NAME } from "./rangeFieldNames.ts";

/**
 * Zips "from" and "to".
 */
export const zipRangeNames: <RangeNames>(
	rangeNames: Iterable<RangeNames>,
) => IterableIterator<
	readonly [typeof FROM_NAME | typeof TO_NAME, RangeNames]
> = zip([FROM_NAME, TO_NAME] as const);
