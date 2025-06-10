import { iterableToArray } from "@coven/iterables";
import type { Difference } from "./Difference.ts";
import type { FlatDifference } from "./FlatDifference.ts";
import { flatPathMap } from "./flatPathMap.ts";

/**
 * Flattens Iterable of {@linkcode Difference}.
 *
 * @example Flatting a creation Difference
 * ```typescript
 * import type { Difference } from "@coven/compare";
 *
 * flat([{
 * 	kind: "CREATE",
 * 	path: ["property", "path"].values(),
 * 	right: "created value",
 * }].values() as Iterable<Difference>);
 * // [{ kind: "CREATE", path: ["property", "path"], right: "created value" }]
 * ```
 * @see {@linkcode Difference}
 * @see {@linkcode FlatDifference}
 * @see {@linkcode flatPathMap}
 */
export const flat = (
	differences: Iterable<Difference>,
): ReadonlyArray<FlatDifference> => iterableToArray(flatPathMap(differences));
