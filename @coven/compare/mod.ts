/**
 * @module 🪞 Minimalistic deep comparison.
 *
 * This library takes 2 values (a `left` and a `right`) and returns an iterator
 * with all the differences between said values. The differences are represented
 * by 3 kinds:
 *
 * -   **Create:** Missing `left` and existing `right`.
 * -   **Update:** Different `left` and `right` values.
 * -   **Delete:** Existing `left` and missing `right`.
 */

export { basePath } from "./basePath.ts";
export { compare } from "./compare.ts";
export { compareIterables } from "./compareIterables.ts";
export { compareObjects } from "./compareObjects.ts";
export { compareProperties } from "./compareProperties.ts";
export {
	CREATE,
	DELETE,
	DONE,
	KIND,
	LEFT,
	MISSING,
	NEXT,
	PATH,
	RIGHT,
	UPDATE,
	VALUE,
} from "./constants.ts";
export type { CreateDifference } from "./CreateDifference.ts";
export type { DeleteDifference } from "./DeleteDifference.ts";
export type { Difference } from "./Difference.ts";
export type { DifferencePath } from "./DifferencePath.ts";
export { getKeys } from "./getKeys.ts";
export { isObject } from "./isObject.ts";
export { pathPrepend } from "./pathPrepend.ts";
export type { UpdateDifference } from "./UpdateDifference.ts";
export { valueToDifference } from "./valueToDifference.ts";
