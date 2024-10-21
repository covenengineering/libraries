import type { ReadonlyRecord } from "@coven/types";
import { has } from "./has.ts";
import { isObject } from "./isObject.ts";

const hasPrototypeProperty = has("prototype");

/**
 * Check if given object has the `prototype` property and it is an object.
 *
 * @example
 * ```typescript
 * hasPrototype(Array); // true
 * hasPrototype([]); // false
 * ```
 * @returns `true` when given object has a `prototype` property and it is an
 * object, `false` otherwise.
 */
export const hasPrototype = (
	object: object,
): object is ReadonlyRecord<"prototype", object> =>
	hasPrototypeProperty(object) && isObject(object.prototype);
