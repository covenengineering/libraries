import type { CreateDifference } from "./CreateDifference.ts";
import type { DeleteDifference } from "./DeleteDifference.ts";
import type { UpdateDifference } from "./UpdateDifference.ts";

/**
 * Union of all types of differences ({@linkcode CreateDifference},
 * {@linkcode DeleteDifference} and {@linkcode UpdateDifference}).
 *
 * @example Array with 3 objects which satisfy one of each type of `Difference`
 * ```typescript
 * const differences = [
 * 	{
 * 		kind: "CREATE",
 * 		path: ["property", "path"].values(),
 * 		right: "created value",
 * 	},
 * 	{
 * 		kind: "DELETE",
 * 		left: "removed value",
 * 		path: ["property", "path"].values(),
 * 	},
 * 	{
 * 		kind: "UPDATE",
 * 		left: "new value",
 * 		path: ["property", "path"].values(),
 * 		right: "old value",
 * 	},
 * ] satisfies ReadonlyArray<Difference>;
 * ```
 * @see {@linkcode CreateDifference}
 * @see {@linkcode DeleteDifference}
 * @see {@linkcode UpdateDifference}
 */
export type Difference = CreateDifference | DeleteDifference | UpdateDifference;
