import type { CreateDifference } from "./CreateDifference.ts";
import type { DeleteDifference } from "./DeleteDifference.ts";
import type { FlatPath } from "./FlatPath.ts";
import type { UpdateDifference } from "./UpdateDifference.ts";

/**
 * Flat representation of a `Difference`.
 *
 * @example Array of Difference satisfied
 * ```
 * import type { Difference } from "@coven/compare";
 *
 * const flatDifference = [
 * 	{
 * 		kind: "CREATE",
 * 		path: ["property", "path"],
 * 		right: "created value",
 * 	},
 * 	{
 * 		kind: "DELETE",
 * 		left: "removed value",
 * 		path: ["property", "path"],
 * 	},
 * 	{
 * 		kind: "UPDATE",
 * 		left: "new value",
 * 		path: ["property", "path"],
 * 		right: "old value",
 * 	}
 * ] satisfies ReadonlyArray<Difference>;
 * ```
 * @see {@linkcode CreateDifference}
 * @see {@linkcode DeleteDifference}
 * @see {@linkcode FlatPath}
 * @see {@linkcode UpdateDifference}
 */
export type FlatDifference = (
	| Omit<CreateDifference, "path">
	| Omit<DeleteDifference, "path">
	| Omit<UpdateDifference, "path">
) &
	FlatPath;
