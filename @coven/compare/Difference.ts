import type { CreateDifference } from "./CreateDifference.ts";
import type { DeleteDifference } from "./DeleteDifference.ts";
import type { UpdateDifference } from "./UpdateDifference.ts";

/**
 * Union of all types of differences ({@link CreateDifference},
 * {@link DeleteDifference} and {@link UpdateDifference}).
 *
 * @example
 * ```typescript
 * const differences = [
 * 	{
 * 		kind: "CREATE",
 * 		path: ["foo", "bar"][Symbol.iterator](),
 * 		right: "new value",
 * 	},
 * 	{
 * 		kind: "DELETE",
 * 		left: "removed value",
 * 		path: ["foo", "bar"][Symbol.iterator](),
 * 	},
 * 	{
 * 		kind: "UPDATE",
 * 		left: "new value",
 * 		path: ["foo", "bar"][Symbol.iterator](),
 * 		right: "old value",
 * 	},
 * ] satisfies ReadonlyArray<Difference>;
 * ```
 * @see {@link CreateDifference}
 * @see {@link DeleteDifference}
 * @see {@link UpdateDifference}
 */
export type Difference =
	| CreateDifference
	| DeleteDifference
	| UpdateDifference;
