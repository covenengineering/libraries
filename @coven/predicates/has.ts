import type { ReadonlyRecord } from "@coven/types";
import type { HasFunction } from "./HasFunction.ts";
import { isObject } from "./isObject.ts";

/**
 * Curried wrapper for the `in` operator. Given a `property` name and an
 * `object`, returns `true` the object contains that property, `false`
 * otherwise.
 *
 * @example
 * ```typescript
 * const hasCircle = has("🧙🏻‍♀️");
 *
 * hasCircle({ "🧙🏻‍♀️": "🔮" }); // true
 * hasCircle({ "🔮": "🧙🏻‍♀️" }); // false
 * ```
 * @returns Curried function with `property` in context.
 */
export const has = <Property extends PropertyKey>(
	property: Property,
): HasFunction<Property> =>
(object): object is ReadonlyRecord<Property, unknown> =>
	isObject(object) && property in object;
