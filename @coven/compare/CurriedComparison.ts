import type { Difference } from "./Difference.ts";

/**
 * Curried function returned by `compare`.
 *
 * @example Function which returns a curried comparison of type string
 * ```typescript
 * const exampleCompare = (left: string): CurriedComparison<string> =>
 * 	function* (right) {
 * 		yield { kind: "UPDATE", left, right }
 * 	}
 * ```
 * @template Right Right value to compare
 * @returns Generator that yields `Difference` objects.
 */
export type CurriedComparison<Right> = (right: Right) => Generator<Difference>;
