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
export { pathPrepend } from "./pathPrepend.ts";
export type { UpdateDifference } from "./UpdateDifference.ts";
export { valueToDifference } from "./valueToDifference.ts";
