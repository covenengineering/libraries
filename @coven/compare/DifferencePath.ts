import type { ReadonlyIterator } from "@coven/types";
import type { PATH } from "./constants.ts";

/**
 * Type to be extended by other differences (all differences should have a
 * `path` to the property).
 */
export type DifferencePath = {
	/**
	 * Path of diff property (undefined for root).
	 */
	readonly [PATH]?: ReadonlyIterator<PropertyKey>;
};
