import { iterableToArray, map } from "@coven/iterables";
import type { Difference } from "./Difference.ts";
import type { FlatDifference } from "./FlatDifference.ts";
import { setPath } from "./setPath.ts";

/**
 * Maps over an `Iterable` of {@linkcode Difference} and flattens its `path`.
 *
 * @see {@linkcode Difference}
 * @see {@linkcode FlatDifference}
 * @see {@linkcode setPath}
 */
export const flatPathMap: (
	differences: Iterable<Difference>,
) => IterableIterator<FlatDifference> = map((difference: Difference) =>
	setPath(iterableToArray(difference.path))(difference) as FlatDifference
);
