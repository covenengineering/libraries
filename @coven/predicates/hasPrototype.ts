import type { ReadonlyRecord } from "@coven/types";
import { has } from "./has.ts";
import { isObject } from "./isObject.ts";

const hasPrototypeProperty = has("prototype");

/**
 * Check if given object has the `prototype` property and it is an object.
 *
 * @example
 * ```typescript
 * hasIteratorSymbol({ [Symbol.iterator]() {} }); // true
 * hasIteratorSymbol({ bar: "bar" }); // false
 * ```
 * @returns `true` when given object has the `Symbol.iterator` symbol, `false`
 * otherwise.
 */
export const hasPrototype = (
	object: object,
): object is ReadonlyRecord<"prototype", object> =>
	hasPrototypeProperty(object) && isObject(object.prototype);
