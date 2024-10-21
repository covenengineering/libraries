import type { ReadonlyRecord } from "@coven/types";
import type { HasFunction } from "./HasFunction.ts";

/**
 * Checks given property is `in` given object.
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
export const has =
	<Property extends PropertyKey>(property: Property): HasFunction<Property> =>
	(object: object): object is ReadonlyRecord<Property, unknown> =>
		property in object;
