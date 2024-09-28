import { has } from "./has.ts";
import type { HasFunction } from "./HasFunction.ts";

/**
 * Check if given `object` has a `prototype` property.
 *
 * @example
 * ```typescript
 * hasPrototype({ prototype: "hi" }); // true
 * hasPrototype("h1"); // false
 * ```
 */
export const hasPrototype: HasFunction<"prototype"> = has("prototype");
