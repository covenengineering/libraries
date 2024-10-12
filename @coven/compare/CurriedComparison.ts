import type { Difference } from "./Difference.ts";

/**
 * Curried function returned by `compare` function when it already took a `left`
 * (original) value.
 *
 * @example
 * ```typescript
 * const compare = <Left>(left: string): CurriedComparison<string> =>
 * 	function* (right) {
 * 		yield {
 * 			// Difference object
 * 		}
 * 	}
 * ```
 *
 * @template Right Right value to compare
 * @returns Generator that yields `Difference` objects.
 */
export type CurriedComparison<Right> = (right: Right) => Generator<Difference>;
