import { isObject } from "@coven/predicates";
import type { CurriedComparison } from "./CurriedComparison.ts";
import { compareObjects } from "./compareObjects.ts";
import { differentiate } from "./differentiate.ts";

/**
 * Deep-compare values.
 *
 * {@linkcode compare} yields the differences found between `left` and `right`
 * with a descriptive object.
 *
 * @example Using compare with strings
 * ```typescript
 * const magicCompare = compare("✨");
 * magicCompare("✨"); // Yields nothing
 * magicCompare("🎃"); // Yields { kind: "UPDATE", left: "✨", right: "🎃", path: [] }
 * ```
 * @example Using compare with objects
 * ```typescript
 * const magicObjectCompare = compare({ magic: "✨" });
 *
 * magicObjectCompare({ magic: "🎃" }); // Yields { kind: "UPDATE", left: "✨", right: "🎃", path: ["magic"] }
 * ```
 * @see {@linkcode CurriedComparison}
 * @see {@linkcode compareObjects}
 * @see {@linkcode isObject}
 * @see {@linkcode differentiate}
 * @param left Original value.
 * @returns Curried generator with `left` in context.
 */
export const compare = (left: unknown): CurriedComparison<unknown> =>
	(isObject(left) ? compareObjects : differentiate)(left as never);
